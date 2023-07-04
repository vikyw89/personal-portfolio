import { Suspense } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Viky's Portfolio`,
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="march">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <div className='fixed top-0 left-0 right-0 bottom-0 bg-base-100 text-neutral-content overflow-x-hidden flex flex-col'>
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  )
}
