'use client'
import React, { useState } from 'react'
import FormSearch from '@/components/Form'
import Button from '@/components/Button'
import UserList from '@/components/UserList'
import Banner from '@/components/Banner'




export default function Github() {

  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
  }

  return (
    <div className='justify-center space-y-3 mt-10 lg:flex lg:w-[500px] lg:items-center lg:flex-col'>
      <Banner />
      <form className='flex place-self-center lg:w-full' onSubmit={onSearchSubmit} >
        <FormSearch />
        <Button type='submit' isLoading={isLoading} />
      </form>
      {/* {query && <SectionResult query={query} />} */}
      <UserList />
    </div>
  )
}
