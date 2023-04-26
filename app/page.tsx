
import { Inter } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'
import Header from './home/Home.Header'
import Hero from './home/Home.Hero'

const inter = Inter({ subsets: ['latin'] })

const dancing = Dancing_Script({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <Header />
        <div className='mt-10 space-y-10 md:space-y-0 md:flex md:items-start'>
          <Hero src='./img/banner/instagram.svg' href='/instagram' title='Mencari user Instagram' description='Kamu dapat kepoin si dia loohh' />
          <Hero src='./img/banner/facebook.svg' href='/facebook' title='Mencari User Facebook' description='Walaupun sudah jarang dipake tetapi tetap ingin mencari orangnya' />
          <Hero src='./img/banner/github.svg' href='/github' title='Mencari User Github' description='Tempat yang tepat untuk mencari user github' />
        </div>
      </div>
    </div>
  )
}
