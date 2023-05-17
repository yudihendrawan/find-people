
import { Inter } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
const inter = Inter({ subsets: ['latin'] })

const dancing = Dancing_Script({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <div className="relative py-3 w-full sm:max-w-full sm:mx-auto">
        <h2 className="md:pt-28 pt-16 mb-1 text-5xl font-semibold tracking-tighter text-center text-gray-800 lg:text-7xl md:text-6xl">
          Selamat datang.
        </h2>
        <p className=" p-2 md:py-1 mx-auto text-xl text-center text-gray-900 font-normal mt-3 lg:w-2/3">
          Temukan informasi terkini tentang pengguna Instagram dan GitHub dengan mudah di sini.
        </p>
        <div className="pt-12 pb-24 grid md:grid-cols-2 md:gap-10 gap-5 max-w-4xl mx-auto md:px-1 px-3">
          <div className='bg-slate-100 rounded-lg p-8 shadow-lg' >
            <h3 className="pt-3 font-semibold text-lg text-black">
              Cari Pengguna Instagram
            </h3>
            <p className="pt-2 value-text text-md text-gray-800">
              Temukan profil Instagram seseorang hanya dengan memasukkan nama pengguna di kotak pencarian. Dapatkan akses ke foto-foto terbaru, cerita, dan aktivitas terkini mereka. Nikmati pengalaman eksplorasi yang menarik di dunia Instagram.
            </p>
            <Link href={'/instagram'} className='flex mt-3 group hover:text-primary'>
              <button type="button" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                <span>Telusuri Pengguna Instagram</span>
              </button>
            </Link>
          </div>
          <div className='bg-slate-100 rounded-lg p-8 shadow-lg' >
            <h3 className="pt-3 font-semibold text-lg text-black">
              Cari Pengguna GitHub
            </h3>
            <p className="pt-2 value-text text-md text-gray-800">
              Ingin mengetahui lebih banyak tentang para pengembang hebat di komunitas GitHub? Masukkan nama pengguna GitHub mereka untuk melihat repositori terpopuler, proyek kolaboratif, dan sumbangan berharga yang mereka berikan. Temukan inspirasi dan koneksi baru dalam dunia pengembangan perangkat lunak.
            </p>
            <Link href={'/github'} className='flex mt-3 group hover:text-primary'>
              <button type="button" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                <span>Cari Pengguna GitHub</span>
              </button>
            </Link>
          </div>
        </div>
        {/* <Header />
        <div className='mt-10 space-y-10 md:space-y-0 md:flex md:items-start'>
          <Hero src='./img/banner/instagram.svg' href='/instagram' title='Mencari user Instagram' description='Kamu dapat kepoin si dia loohh' />
          <Hero src='./img/banner/facebook.svg' href='/facebook' title='Mencari User Facebook' description='Walaupun sudah jarang dipake tetapi tetap ingin mencari orangnya' />
          <Hero src='./img/banner/github.svg' href='/github' title='Mencari User Github' description='Tempat yang tepat untuk mencari user github' />
        </div> */}
      </div>
    </div>
  )
}
