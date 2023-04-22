"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl text-rose-500 font-bold'>Upss...🫢 Sepertinya ada masalah</p>
            <button className='w-full h-10 bg-primary rounded-md shadow-lg mt-4 hover:bg-emerald-400' onClick={() => reset()}><span className='font-bold text-zinc-800'>Refresh</span></button>
        </div>
    )
}
