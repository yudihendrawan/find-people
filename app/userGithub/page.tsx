'use client'
import React, { useState } from 'react'
import SectionResult from './sectionResult'

export default function UserGithub() {

  const [query, setQuery] = useState('')

  const onSearchSubmit = (e: any) => {
    e.preventDefault()
    const inputQuery = e.target[0].value
    setQuery(inputQuery)
    console.log('query nya : ', query)
  }

  return (
    <div>
      <p>UserGithub</p>
      <form onSubmit={onSearchSubmit} >
        <input placeholder='Cari User..' />
        <button style={{ margin: 10 }}>Cari</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  )
}
