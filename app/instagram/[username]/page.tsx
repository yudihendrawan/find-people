'use client'
import DetailUser from '@/app/github/[username]/Github.DetailUser'
import RepoList from '@/app/github/[username]/Github.RepoList'
import { UserDetail } from '@/types/userInstagram/Instagram.User'
import { useState, useEffect } from 'react'

export default function Detail({ params }: { params: { username: string } }) {
    const [data, setData] = useState(null)
    // const [resData, setResData] = useState({
    //     id: 0,
    //     avatar_url: '',
    //     name: '',
    //     followers: 0,
    //     following: 0,
    //     html_url: '',
    //     public_repos: 0,
    //     repos_url: '',
    //     login: ''
    // })
    const [resData, setResData] = useState<UserDetail | null>(null)

    useEffect(() => {
        async function getData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e76efd42f7msh1e6ad3422f4fd08p145587jsne1d97f5997b3',
                    'X-RapidAPI-Host': 'instagram-data12.p.rapidapi.com'
                }
            };
            // const res = await fetch(`https://instagram-data12.p.rapidapi.com/user/details-by-username/?username=${params.username}`, options)
            const res = await fetch('endPoint.json')
            const data = await res.json()
            const user = data.data.user
            // const endPointsUsesDetail: UserDetail = {
            //     biography: user.biography,
            //     id: user.id
            // }
            console.log({ user })
        }
        getData()
    }, [params.username])

    return (
        <div className='mt-10 lg:mx-auto lg:w-3/4 overflow-x-hidden'>
            {/* <DetailUser
                id={resData.id}
                avatar_url={resData.avatar_url}
                name={resData.name}
                followers={resData.followers}
                following={resData.following}
                html_url={resData.html_url}
                public_repos={resData.public_repos}
                login={resData.login}
            /> */}
            <div className='mt-14 ml-2'>
                <p className='font-bold text-2xl'>🌐 List Repository Public</p>
            </div>
            {/* <RepoList repos_url={resData.repos_url} /> */}
        </div>
    )
}