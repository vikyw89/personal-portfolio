'use client'

import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './header'
import { Background } from './background'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Viky\'s Portfolio',
  description: 'Welcome to my portfolio',
}

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    opacity: 0
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1
  },
  exit: {
    // clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    opacity: 0
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content="HTML, Meta Tags, Metadata" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {/* <AnimatePresence mode="wait" initial={false} > */}
        <motion.main key={`${Math.random().toString()}`} className='fixed inset-0 bg-base-100 text-base-content overflow-hidden -z-50'
          initial="initial"
          animate="animate"
          exit="exit"
          variants={wrapperVariants}
        >
          <Header />
          {children}
          <Background />
        </motion.main>
        {/* </AnimatePresence> */}
      </body>
    </html>
  )
}
