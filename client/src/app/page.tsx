"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {

  return (
    <main className="content flex flex-col w-full min-h-full items-center relative">
      <motion.div
        whileHover={{ scale: 6 }}>
        test
      </motion.div>
      test
    </main>
  )
}
