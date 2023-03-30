'use client'
import React, { useState } from 'react'
import SectionResult from './sectionResult'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'




export default function Github() {

  const [query, setQuery] = useState('')

  const onSearchSubmit = (e: any) => {
    e.preventDefault()
    const inputQuery = e.target[0].value
    setQuery(inputQuery)
    e.target[0].value = ''

  }

  return (

    <div >
      <p>UserGithub</p>
      <form className='flex place-self-center' onSubmit={onSearchSubmit} >
        <input className='border border-zinc-500 rounded-md px-2' placeholder='Cari User..' />
        <button className='mx-2 p-2 bg-primary hover:bg-[#02b188] text-white rounded-md'>
          <MagnifyingGlassIcon className='w-6 h-6 ' />
        </button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  )
}
