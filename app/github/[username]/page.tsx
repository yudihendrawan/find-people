'use client'
import DetailUser from '@/components/DetailUser'
import RepoList from '@/components/RepoList'
import { useState, useEffect } from 'react'

export default function Detail({ params }: { params: { username: string } }) {
    const [data, setData] = useState(null)
    const [resData, setResData] = useState({
        id: 0,
        avatar_url: '',
        name: '',
        followers: 0,
        following: 0,
        html_url: '',
        public_repos: 0,
        repos_url: '',
        login: ''
    })

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.github.com/users/${params.username}`)
            const data = await res.json()
            setData(data)
            setResData({
                ...resData,
                id: data.id,
                avatar_url: data.avatar_url,
                login: data.login,
                name: data.name,
                followers: data.followers,
                following: data.following,
                html_url: data.html_url,
                public_repos: data.public_repos,
                repos_url: data.repos_url

            })

        }
        getData()
    }, [params.username])

    return (
        <div className='mt-10 lg:mx-auto lg:w-3/4 overflow-x-hidden'>
            <DetailUser
                id={resData.id}
                avatar_url={resData.avatar_url}
                name={resData.name}
                followers={resData.followers}
                following={resData.following}
                html_url={resData.html_url}
                public_repos={resData.public_repos}
                login={resData.login}
            />
            <div className='mt-14 ml-2'>
                <p className='font-bold text-2xl'>🌐 List Repository Public</p>
            </div>
            <RepoList repos_url={resData.repos_url} />
            {/* <div>{data && JSON.stringify(data, null, 2)}</div> */}
        </div>
    )
}
