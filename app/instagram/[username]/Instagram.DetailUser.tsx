import React from 'react'
import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
export default function DetailUser({
    biography,
    id,
    category_name,
    edge_followed_by,
    edge_follow,
    profile_pic_url,
    full_name,
    username,
    is_private,
    is_verified,
    media_count }: Props) {
    return (
        <div className='flex w-full'>
            <div className='flex space-x-4 lg:space-x-8 lg:w-1/2'>
                <div>
                    <Image priority={true} className='rounded-full ml-2 w-28 h:28 lg:w-50 lg:h-50' src={profile_pic_url} alt='avatar' width={100} height={100} />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold'>{full_name ? full_name : username}</p>
                            {is_verified ? <CheckBadgeIcon className='w-4 h-4 text-sky-600'></CheckBadgeIcon> : ""}
                        </div>
                        <div className='flex-row flex space-x-2 items-center'>
                            <p className='bg-zinc-200 w-fit px-1 text-center self-center' >{id}</p>
                            <Link href={`https://www.instagram.com/${username}`} target='_blank'>
                                <ArrowTopRightOnSquareIcon className='w-4 h-4 hover:w-[17px] hover:h-[17px]' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-around space-x-2 lg:space-x-10  mt-4'>
                        <div>
                            <p className=' text-lg font-bold'>{edge_followed_by}</p>
                            <p className=' text-lg '>Followers</p>
                        </div>
                        <div>
                            <p className=' text-lg font-bold'>{edge_follow}</p>
                            <p className=' text-lg '>Following</p>
                        </div>
                        <div>
                            <p className=' text-lg font-bold'>{media_count}</p>
                            <p className=' text-lg '>Posts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Props {
    biography: string
    id: string
    category_name: string
    edge_followed_by: number
    edge_follow: number
    full_name: string
    profile_pic_url: string
    username: string
    is_private: boolean
    is_verified: boolean
    media_count: number
}
