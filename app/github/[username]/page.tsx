import React from 'react'

async function getData(params: string) {
    const res = await fetch(`https://api.github.com/users/${params}`)
    // const data = await res.json()
    return res.json()

}

export default async function Detail({ params }: { params: { username: string } }) {
    const data = await getData(params.username)

    return (
        <div>
            <p>
                Detail: {params.username}
            </p>
            <div>
                {JSON.stringify(data, null, 2)}
            </div>
        </div>
    )
}
