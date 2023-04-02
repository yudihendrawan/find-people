'use client'
import React, { useState } from 'react'
import FormSearch from '@/components/Form'
import Button from '@/components/Button'
import UserList from '@/components/UserList'
import Banner from '@/components/Banner'
import { UserGithub } from '@/types/userGithub/UserGithub'
import { SearchRes } from '@/types/userGithub/SearchRes'



export default function Github(): JSX.Element {
  const [searchResult, setSearchResult] = useState('')
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SearchRes | null>(null)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then(res => res.json())
        .then(data => {
          const users: UserGithub[] = data.items
          const searchRes: SearchRes = {
            search: search,
            users: users
          }
          setResult(searchRes)
        }).finally(() => {
          setIsLoading(false)
          setSearchResult(search)
          setSearch('')
        })
    }
  }

  return (
    <div className='justify-center space-y-3 mt-10 lg:flex lg:w-[500px] lg:items-center lg:flex-col'>
      <Banner />
      <form className='flex place-self-center  lg:w-full' onSubmit={onSearchSubmit} >
        <FormSearch value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type='submit' isLoading={isLoading} />
      </form>
      {result && <UserList result={result} searchResult={searchResult} />}
    </div>
  )
}
