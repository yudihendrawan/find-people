
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'



const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
    query: string
}

export default function SectionResult({ query }: Props) {

    const { data, error } = useSWR(` https://api.github.com/search/users?q=${query}&per_page=20`, fetcher)

    let loading = !data && !error

    return (
        <div className='place-self-center'>
            <p>Hasil pencarian : {query}</p>
            <div className='place-self-center'>
                {loading && "please wait.."}
                {data && data.items.map((user: any, index: number) => {
                    return <div key={index} className='place-self-center'>
                        <p>{user.login}</p>
                    </div>
                })}
                {/* <p>
                    {JSON.stringify(data.items.login, null, 2)}
                </p> */}


            </div>
        </div>
    )
}
