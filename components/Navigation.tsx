'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {

    const [animateHeader, setAnimateHeader] = useState(false)
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

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 140) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        }
        window.addEventListener("scroll", listener)
        return () => {
            window.removeEventListener("scroll", listener)
        }
    }, []);



    const navLink = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Instagram',
            link: '/instagram',
        },
        {
            name: 'Facebook',
            link: '/facebook',
        },
        {
            name: 'Github',
            link: '/github',
        },
    ]

    function buka() {
        setOpen(!open)

    }


    return (
        <header className={`border-b border-zinc-200 md:w-[90%] md:left-[5%] w-full backdrop-filter backdrop-blur-lg bg-transparent fixed z-10 transition px-4 ease-in-out duration-500 top-0 ${animateHeader && "shadow-md"}`}>
            <div className='flex items-center relative justify-between xl:max-w-7xl xl:mx-auto max-w-full flex-wrap w-full'>
                <Image priority={true} className='ml-8 lg:ml-0' src="/img/logo/logoRemoveBg.png" alt='Img' width={110} height={110} />
                <div className='cursor-pointer lg:hidden block mr-8 lg:mr-0' onClick={() => buka()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${open ? "hidden" : "flex"} h-8 w-8 transition delay-75 duration-300`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`${open ? "flex" : "hidden"} h-10 w-10 transition delay-75 duration-300`}>
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>


                </div>


                <nav ref={menuRef} className={`${open ? " flex absolute lg:relative lg:bg-transparent items-center" : "hidden"} ' bg-white lg:bg-transparent shadow-md lg:shadow-none justify-center rounded-md py-5 w-1/6 right-0 max-w-[250px] min-w-[150px] lg:max-w-full top-full lg:flex lg:items-center lg:w-auto`} >
                    <ul className='text-base text-gray-600 lg:flex lg:justify-between lg:text-md'  >

                        {navLink.map(({ link, name }) => (
                            <li key={name} >
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
