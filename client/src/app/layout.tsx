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
    clipPath: 'inset(49%  49% 49% 49%)',
  },
  animate: {
    clipPath: ['inset(49% 49% 49% 49%)', 'inset(49% 0% 49% 0%)', 'inset(49.9% 0% 49.9% 0%)', 'inset(0% 0% 0% 0%)'],
    transition: {
      duration: 3,
      times: [0.2, 0.4, 0.90, 1],
      staggerChildren: 0.5
    },
  },
  exit: {
    // clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    clipPath: 'inset(49%  49% 49% 49%)',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="dracula">
      <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content="HTML, Meta Tags, Metadata" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className} style={{ position: 'fixed', inset: 0, backgroundColor: 'black' }}>
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
