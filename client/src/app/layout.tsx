import './globals.css'
import { Inter } from 'next/font/google'

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
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-neutral text-neutral-content overflow-x-hidden'>
          {children}
        </div>
      </body>
    </html>
  )
}
