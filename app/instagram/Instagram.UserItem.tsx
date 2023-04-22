import { UserInstagram } from '@/types/userInstagram/Instagram.User'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckBadgeIcon, ChevronRightIcon, LockClosedIcon } from '@heroicons/react/24/solid'


export default function UserItem({ user }: Props) {
    return (
        <div className='flex justify-between items-center w-full overflow-x-hidden hover:bg-zinc-100 px-4 py-5'>
            <div className='inline-flex space-x-2 items-center'>
                {user.user.profile_pic_url ? <Image alt='profile picture' src={user.user.profile_pic_url} className='w-10 h-10  rounded-full' width={50} height={50} /> : <p>a</p>}
                <div className='flex w-40 flex-col'>
                    <div className='flex space-x-2 items-center'>
                        <span>{user.user.username}</span>
                        {user.user.is_verified ? <CheckBadgeIcon className='w-5 h-5 text-sky-600' /> : ""}
                    </div>
                    <span className='font-bold'>{user.user.full_name}</span>
                </div>


            </div>
            <div className='w-10'>
                {user.user.is_private ? <LockClosedIcon className='w-4 h-4' /> : ""}
            </div>


            <div className=' hover:text-primary p-3'>
                <span ><Link href={`/instagram/${user.user.username}`}><ChevronRightIcon className='w-4 h-4' /></Link></span>
            </div>

        </div >
    )
}

interface Props {
    user: UserInstagram
}
