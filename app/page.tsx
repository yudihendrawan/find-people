
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col items-center justify-center py-2">
          <p className='text-primary text-2xl font-bold'>Halaman Home</p>
          <div className='h-96'>Halaman Home 1</div>
          <div className='h-96'>Halaman Home 2</div>
          <div className='h-96'>Halaman Home 3</div>
          <div className='h-96'>Halaman Home 4</div>
          <div className='h-96'>Halaman Home 5</div>
          <div className='h-96'>Halaman Home 6</div>
          <div className='h-96'></div>
          <div className='h-96'></div>
          <div className='h-96'></div>
          <div className='h-96'></div>
          <div className='h-96'></div>
        </div>
      </div>
    </div>
  )
}
