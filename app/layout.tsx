import Navigation from '@/components/Navigation'
import Head from 'next/head'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: {
    default: 'Find People',
    template: '%s | Find People '
  },
  description: 'Find Social Media Users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div className='mx-auto'>
          <Navigation />
        </div>
        <div className='min-h-screen w-screen bg-white justify-center flex mt-20'>

          {children}
        </div>


      </body>
    </html>
  )
}
