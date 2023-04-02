import { SearchRes } from '@/types/userGithub/SearchRes'
import { UserGithub } from '@/types/userGithub/UserGithub'
import React from 'react'
import UserItem from './UserItem'

export default function UserList({ result, searchResult }: Props) {
    return (
        <div className='border rounded-md w-full py-10'>
            <p className='text-center p-3'>Hasil Pencarian : <span className='font-bold'>{searchResult}</span></p>
            {result?.users.map((user, index) =>
                <UserItem key={index} user={user} />
            )}
        </div>
    )
}

interface Props {
    result?: SearchRes
    searchResult: string
}
