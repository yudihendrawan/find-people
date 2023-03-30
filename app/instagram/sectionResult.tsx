import React, { useState } from 'react'
import useSWR from 'swr';


interface Props {
    query: string,
}

const fetcher = async (url: string, options: any) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};


export default function sectionResult({ query }: Props) {
    const { data, error } = useSWR(
        `https://instagram-looter2.p.rapidapi.com/profile?username=${query}`,
        (url) =>
            fetcher(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e76efd42f7msh1e6ad3422f4fd08p145587jsne1d97f5997b3',
                    'X-RapidAPI-Host': 'instagram-looter2.p.rapidapi.com',
                },
            })
    );

    if (error) return <div>Failed to load data</div>;
    if (!data) return <div>Loading...</div>;

    return <pre>{JSON.stringify(data.full_name, null, 2)}</pre>;
}
