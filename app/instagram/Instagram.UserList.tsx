import React from 'react'
import UserItem from './Instagram.UserItem'
import { UserInstagram } from '@/types/userInstagram/Instagram.User'

export default function UserList({ userList, searchResult }: Props) {
    return (
        <div className='border shadow-md rounded-md w-full py-10' >
            <p className='text-center p-3' >Hasil Pencarian : {searchResult}</p>
            {userList?.map((user, index) =>
                <UserItem key={index} user={user} />
            )}
        </div>
    )
}

interface Props {
    userList?: UserInstagram[]
    searchResult: string
}

