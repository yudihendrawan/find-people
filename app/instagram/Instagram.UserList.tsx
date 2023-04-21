import React from 'react'
import UserItem from './Instagram.UserItem'
import { InstagramEnpoint } from '@/types/userInstagram/Instagram.SearchRes'

export default function UserList({ result, searchResult }: Props) {
    return (
        <div className='border shadow-md rounded-md w-full py-10' >
            <p className='text-center p-3' >Hasil Pencarian : {searchResult}</p>
            {result?.users?.map((user, index) =>
                <UserItem key={index} user={user} />
            )}
        </div>
    )
}

interface Props {
    result?: InstagramEnpoint
    searchResult: string
}

