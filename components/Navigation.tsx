'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {

    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {

            if (!menuRef.current?.contains(e.target as Node)) {
                setOpen(false)

            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    const navLink = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Instagram',
            link: '/dashboard',
        },
        {
            name: 'Facebook',
            link: '/blog',
        },
        {
            name: 'Github',
            link: '/userGithub',
        },
    ]

    function buka() {
        setOpen(!open)

    }


    return (
        <header className='border-b border-zinc-200 py-2'>
            <div className='flex items-center relative justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
                <Image src="/img/logo/logoRemoveBg.png" alt='Img' width={110} height={110} />

                <div className='cursor-pointer lg:hidden block' onClick={() => buka()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? "hidden" : "flex"} h-8 w-8 transition delay-75 duration-300`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`${open ? "flex" : "hidden"} h-10 w-10 transition delay-75 duration-300`}>
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>


                </div>


                <nav ref={menuRef} className={`${open ? " flex absolute lg:relative items-center" : "hidden"} ' justify-center rounded-md py-5 w-1/6 shadow-lg lg:shadow-md right-16 max-w-[250px] min-w-[150px] lg:max-w-full top-full lg:flex lg:items-center lg:w-auto`} >
                    <ul className='text-base text-gray-600 lg:flex lg:justify-between'  >

                        {navLink.map(({ link, name }) => (
                            <li >
                                <Link
                                    key={name}
                                    href={link}
                                    className={`${pathname === link ? "lg:px-5 py-2 hover:text-primary font-semibold block text-primary" : "lg:px-5 py-2 hover:text-primary font-semibold block"}`}>
                                    {name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </header>
    )
}
