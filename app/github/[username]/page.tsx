'use client'
import { useState, useEffect } from 'react'

export default function Detail({ params }: { params: { username: string } }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.github.com/users/${params.username}`)
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [params.username])

    return (
        <div>
            <p>Detail: {params.username}</p>
            <div>{data && JSON.stringify(data, null, 2)}</div>
        </div>
    )
}
