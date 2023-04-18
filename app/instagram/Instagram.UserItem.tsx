import { UserInstagram } from '@/types/userInstagram/Instagram.User'
import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'
import Link from 'next/link'
import { CheckBadgeIcon, ChevronRightIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid'


export default function UserItem({ user }: Props) {
    return (
        <div className='flex justify-between items-center w-full overflow-x-hidden hover:bg-zinc-100 px-4 py-5'>
            <div className='inline-flex space-x-2'>
                {/* <Image alt='profile picture' src={user.user.profile_pic_url} width={10} height={10} /> */}
                <div className='flex w-40 flex-col'>
                    <span>{user.user.username}</span>
                    <span className='font-bold'>{user.user.full_name}</span>
                </div>

            </div>
            <div className='w-20' >
                <Link href={user.user.profile_pic_url} target='_blank' ><p className='font-bold text-sm text-cyan-700 hover:text-cyan-900 hover:text-clip ' >Lihat foto profile</p></Link>
            </div>
            <div className='w-10'>
                {user.user.is_private ? <LockClosedIcon className='w-4 h-4' /> : <LockOpenIcon className='w-4 h-4' />}
            </div>
            <div className='w-5'>
                {user.user.is_verified ? <CheckBadgeIcon className='w-5 h-5 text-sky-600' /> : ""}
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
