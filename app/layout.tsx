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
        <div className='justify-center flex flex-col container mx-auto '>

          <Navigation />

          <div className='place-self-center mt-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
