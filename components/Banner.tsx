import React from 'react'
import Image from 'next/image'

export default function Banner({ title, logo, size }: Props) {
    return (
        <div className='flex flex-row items-center w-full lg:space-x-4 space-x-3'>
            <Image className={size} src={logo} alt="logo" width={100} height={100} />
            <div>
                <p className='lg:text-4xl text-3xl'>Cari User</p>
                <p className='lg:text-3xl text-2xl font-bold'>{title}</p>

            </div>
        </div>
    )
}

interface Props {
    title: string
    logo: string
    size: string
}
