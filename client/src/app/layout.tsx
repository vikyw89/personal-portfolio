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
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <div className='fixed inset-0 bg-base-100 text-base-content overflow-hidden flex flex-col'>
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  )
}
