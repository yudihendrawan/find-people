import React from 'react'
import Script from 'next/script';
export const metadata = {
    title: 'Instagram',
    description: 'Find user Instagram',
    key: ["Instagram", "Find People", "Find User Instagram"]

}

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
