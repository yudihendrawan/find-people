"use client"

import React, { useEffect, useState } from 'react'
import SectionResult from './sectionResult'
import Head from 'next/head'

export default function Dashboard() {
  const [query, setQuery] = useState('')

  const onSearchSubmit = (e: any) => {
    e.preventDefault()
    const inputQuery = e.target[0].value
    setQuery(inputQuery)
  }


  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta>
          name="description"
          content ="Cari user Instagram berdasarkan Username"
          key="desc"
        </meta>
      </Head>
      <p>User Instagram</p>
      <form onSubmit={onSearchSubmit} >
        <input placeholder='Cari User..' />
        <button style={{ margin: 10 }}>Cari</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  )

}
