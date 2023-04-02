import Navigation from '@/components/Navigation'
import './globals.css'
// import './style.css'

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
        <div className='mx-auto mb-28 lg:mb-24'>
          <Navigation />
        </div>
        <div className='min-h-screen w-screen bg-white justify-center flex'>

          {children}
        </div>


      </body>
    </html>
  )
}
