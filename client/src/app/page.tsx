"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {

  return (
    <main className="content flex flex-col w-full min-h-full items-center relative">
      <div className='background fixed z-0'>

      </div>
      <div className='focus fixed z-10'>

      </div>
      <div className='foreground fixed z-20'>

      </div>
      <motion.div
        whileHover={{ scale: 6 }}>
        Hello I&apos;m Viky
      </motion.div>
      <motion.div
        animate={{
          y: [0,1000],
          opacity:[100,10]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2
        }}
        className='[writing-mode:vertical-lr] text-5xl font-bold'
      >
        HELLO !
      </motion.div>
      <div>
        Works
      </div>
      <ProjectCardContainer />
    </main>
  )
}
