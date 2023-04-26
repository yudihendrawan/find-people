import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Button({ type, isLoading }: Props) {
    const Loading = () => {
        return (
            <div className='flex justify-center'>
                <div className='animate-spin rounded-full h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-white'></div>
            </div>
        )
    }
    return (
        <button className='ml-2 p-2 bg-primary hover:bg-[#02b188] text-white rounded-md lg:p-2'>
            {isLoading ? <Loading /> : <MagnifyingGlassIcon className='w-6 h-6 lg:w-8 lg:h-8' />}
        </button>
    )
}

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined
    isLoading?: boolean
}
