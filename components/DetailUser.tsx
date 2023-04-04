import React from 'react'
import Image from 'next/image';

export default function DetailUser({ id, avatar_url, name, followers, following, public_repos }: Props) {
    return (
        <div className='flex w-full'>
            <div>
                <Image className='rounded-full w-28 h:28 lg:w-50 lg:h-50' src={avatar_url} alt='avatar' width={100} height={100} />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-around'>
                    <p className='text-xl font-bold'>{name}</p>
                    <p className='bg-zinc-200 px-4 ' >{id}</p>
                </div>
                <div className='flex justify-around space-x-2 lg:space-x-10 ml-5 lg:ml-10 mt-4'>
                    <div>
                        <p className=' text-lg font-bold'>{followers}</p>
                        <p className=' text-lg '>Followers</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold'>{following}</p>
                        <p className=' text-lg '>Following</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold'>{public_repos}</p>
                        <p className=' text-lg '>Public Repo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Props {
    id: number;
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    html_url: string;
    public_repos: number;
}
