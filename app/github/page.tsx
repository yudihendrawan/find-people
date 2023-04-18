'use client'
import React, { useState } from 'react'
import FormSearch from '@/components/FormSearch'
import Button from '@/components/Button'
import UserList from '@/app/github/Github.UserList'
import Banner from '@/components/Banner'
import { UserGithub } from '@/types/userGithub/Github.User'
import { SearchRes } from '@/types/userGithub/Github.SearchRes'



export default function Github(): JSX.Element {
  const [resultQuery, setResultQuery] = useState('')
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
          setResultQuery(JSON.stringify(data.total_count))
          setResult(searchRes)
        }).finally(() => {
          setIsLoading(false)
          setSearchResult(search)
          setSearch('')
        })
    }
  }

  return (
    <div className='justify-center space-y-3 mt-10 lg:flex lg:w-[500px]  lg:items-center lg:flex-col items-center'>
      <Banner title='Github' logo='/img/banner/github.svg' size='lg:h-32 lg:w-32 h-24 w-24' />
      <form className='flex place-self-center w-full mx-auto ' onSubmit={onSearchSubmit} >
        <FormSearch value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type='submit' isLoading={isLoading} />
      </form>
      {result && <UserList result={result} searchResult={searchResult} resultQuery={resultQuery} />}
    </div>
  )
}
