import React from 'react'

async function getUser(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
}


export default async function DetailUser({ params }: { params: { slug: string } }) {
    const data = await getUser(params.slug)
    return (
        <div>
            <p>DetailUser : {params.slug}</p>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}
