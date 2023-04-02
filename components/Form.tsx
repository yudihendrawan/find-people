import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function FormSearch({ onChange, value }: Props) {
    return (
        <input placeholder='Cari User..'
            className='border border-zinc-500 rounded-md px-2 w-full'
            value={value}
            onChange={onChange}
        />
    )
}

interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
}
