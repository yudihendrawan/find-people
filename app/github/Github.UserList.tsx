import { SearchRes } from '@/types/userGithub/Github.SearchRes'
import { UserGithub } from '@/types/userGithub/Github.User'
import React from 'react'
import UserItem from './Github.UserItem'

export default function UserList({ result, searchResult, resultQuery }: Props) {
    return (
        <div className='border shadow-md rounded-md w-full py-10'>
            <p className='text-center p-3'>Hasil Pencarian : <span className='font-bold'>{searchResult}</span> (total : {resultQuery}) </p>
            {result?.users.map((user, index) =>
                <UserItem key={index} user={user} />
            )}
        </div>
    )
}

interface Props {
    result?: SearchRes
    searchResult: string
    resultQuery?: string
}
