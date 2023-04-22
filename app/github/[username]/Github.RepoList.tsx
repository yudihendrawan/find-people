import React, { useEffect, useState } from 'react'
import { SearchRes } from '@/types/userGithub/Github.SearchRes'
import Link from 'next/link'

export default function RepoList({ repos_url }: Props) {

    const [repos, setRepos] = useState([])


    useEffect(() => {
        async function getReposUrl() {
            const res = await fetch(repos_url)
            const datas = await res.json()
            const mapped = datas.map((data: any, index: any) => ({
                id: data.id,
                name: data.name,
                description: data.description,
                size: data.size,
                watchers_count: data.watchers_count,
                html_url: data.html_url
            }))

            setRepos(mapped)
        }
        getReposUrl()
    }, [repos_url])
    return (
        <div className='border border-zinc-200 mx-2 lg:w-11/12 shadow-sm rounded-lg justify-center mt-3 mb-10'>
            <div className='flex flex-col p-14'>
                {repos.map((repo: any) => (
                    <div key={repo.id} className='border-b-zinc-100 flex flex-col space-y-1 border-b-2'>
                        <p className='font-bold text-xl'>{repo.name} <span className='hover:pl-1 transition-shadow duration-200 text-base'><Link target='_blank' href={repo.html_url}>🔗</Link></span></p>
                        <p className='text-lg'>{repo.description ? repo.description : "-"}</p>
                        <div className='flex space-x-3  py-3'>
                            <div className='flex-none bg-zinc-100 w-28 '>
                                <p>Size: {repo.size ? repo.size : "0"}</p>
                            </div>

                            <div className=' flex-none bg-zinc-100 w-28 '>
                                <p>Watcher: {repo.watchers_count ? repo.watchers_count : "0"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

interface Props {
    repos_url: string
}
