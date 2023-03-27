
import React from 'react'
import useSWR from 'swr'


const fetcher = (url: string) => fetch(url).then(res => res.json())

interface Props {
    query: string
}

export default function SectionResult({ query }: Props) {

    const { data, error } = useSWR(` https://api.github.com/search/users?q=${query}`, fetcher)

    let loading = !data && !error

    return (
        <div style={{ marginTop: '10px' }}>
            <p>Hasil : {query}</p>
            <div>
                {loading && "please wait.."}

                {JSON.stringify(data)}


            </div>
        </div>
    )
}
