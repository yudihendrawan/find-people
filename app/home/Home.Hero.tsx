import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
export default function Hero({ src, title, description, href, onclick }: Props) {
    return (
        <div className='lg:w-[255px] w-full flex flex-col  justify-center items-center text-center'>
            <Image src={src} width={70} height={70} alt='Banner' />
            <h1 className='font-bold text-lg mt-4'>{title}</h1>
            <h2 className='mt-4'>{description}</h2>
            <Link href={href} className='flex mt-10 group hover:text-primary' onClick={onclick}>
                <p className='text-sm text-zinc-500 group-hover:text-primary'>coba</p>
                <ChevronRightIcon className='w-5 h-5' />
            </Link>
        </div>
    )
}

interface Props {
    src: string
    title?: string
    description?: string
    href: string
    onclick?: () => void
}
