import Navigation from '@/components/Navigation'
import Head from 'next/head'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Home Page',
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
        <div className='container mx-auto'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
