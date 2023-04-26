import Navigation from '@/components/Navigation'
import './styles/globals.css'
import Footer from '@/components/Footer'


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
      <head >
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body >
        <div className='mx-auto mb-28 lg:mb-24'>
          <Navigation />
        </div>
        <div className='min-h-screen w-full bg-white justify-center flex'>

          {children}
        </div>

        <footer className='w-full lg:w-11/12 lg:left-20 lg:right-20 mx-auto'>
          <Footer />

        </footer>

      </body>
    </html>
  )
}
