import { UserGithub } from '@/types/userGithub/Github.User'
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function UserItem({ user }: Props) {
    return (
        <div className='flex justify-between items-center w-full hover:bg-zinc-100 px-4 py-5'>
            <div className='inline-flex items-center space-x-3'>
                <Image alt='avatar' width={40} height={40} src={user?.avatar_url} className='rounded-full' />
                <span>{user.login}</span>
            </div>
            <span className=' hover:text-primary p-3'><Link href={`/github/${user.login}`}><ChevronRightIcon className='w-4 h-4' /></Link></span>
        </div >
    )
}

interface Props {
    user: UserGithub
}
