import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div>
        <h1 className='text-zinc-950 text-2xl'>Features</h1>
      </div>
      <div className='text-center mt-4'>
        <h3 className='text-zinc-500'>Tempat yang tepat untuk mencari user media sosial.</h3>
        <h3 className='text-zinc-500'>Ketikan username dan temukan usernya</h3>
      </div>
    </div>
  )
}
