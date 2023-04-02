'use client'
import DetailUser from '@/components/DetailUser'
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
        public_repos: 0
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
                name: data.name,
                followers: data.followers,
                following: data.following,
                html_url: data.html_url,
                public_repos: data.public_repos

            })

        }
        getData()
    }, [params.username])

    return (
        <div className='mt-10'>
            <DetailUser
                id={resData.id}
                avatar_url={resData.avatar_url}
                name={resData.name}
                followers={resData.followers}
                following={resData.following}
                html_url={resData.html_url}
                public_repos={resData.public_repos}
            />
            {/* <div>{data && JSON.stringify(data, null, 2)}</div> */}
        </div>
    )
}
