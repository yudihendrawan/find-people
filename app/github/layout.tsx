import React from 'react'
export const metadata = {
    title: 'Github Page',
    description: 'Find user Github',
    key: ["Github", "Find People", "Find User Github"]
}

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
