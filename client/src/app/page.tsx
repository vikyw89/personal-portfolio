"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {

  return (
    <main className="content flex flex-col w-full min-h-full items-center relative">
      <motion.div
        whileHover={{ scale: 6 }}>
        Hello I&apos;m Viky
      </motion.div>
      <div>
        Works
      </div>
      <ProjectCardContainer/>
    </main>
  )
}
