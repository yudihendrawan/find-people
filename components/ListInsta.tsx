import { InstaRes } from '@/types/userGithub/Github.SearchRes'
import { UserInstagram } from '@/types/userGithub/Github.User'
import React from 'react'
import ItemInsta from './ItemInsta'

export default function ListInsta({ result, searchResult, resultQuery }: Props) {
    return (
        <div className='border shadow-md rounded-md w-full py-10'>
            <p className='text-center p-3'>Hasil Pencarian : <span className='font-bold'>{searchResult}</span> (total : {resultQuery}) </p>
            {result?.users.map((user, index) =>
                <ItemInsta key={index} user={user} />
            )}
        </div>
    )
}

interface Props {
    result?: InstaRes
    searchResult: string
    resultQuery?: string
}
