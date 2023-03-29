import React from 'react'

async function getUser(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
}


export default async function DetailUser({ params }: { params: { uasername: string } }) {
    const data = await getUser(params.uasername)
    return (
        <div>
            <p>DetailUser : {params.uasername}</p>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}
