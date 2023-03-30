import React from 'react'
export const metadata = {
    title: 'Facebook',
    description: 'Find user Facebook',
    key: ["Facebook", "Find People", "Find User Facebook"]
}

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
