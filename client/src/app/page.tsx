"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {

  return (
    <main className="content flex flex-col w-full min-h-full items-center relative">
      <div className='background fixed -z-10 top-0 right-0 bottom-0 left-0 bg-neutral'>
        <motion.div
          animate={{
            x: [-100, 1000],
            opacity: [100, 100]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }}
          className='text-9xl font-bold opacity-0 text-neutral-content'
        >
          HELLO
        </motion.div>
      </div>
      <div className='focus fixed z-10'>
        <motion.div
          whileHover={{ scale: 6 }}>
          Hello I&apos;m Viky
        </motion.div>
      </div>
      <div className='foreground fixed z-20'>
        <motion.div
          animate={{
            y: [-1000, 1000],
            opacity: [100, 100]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }}
          className='text-9xl font-bold opacity-0 [writing-mode:vertical-lr] text-neutral-focus'
        >
          HELLO
        </motion.div>
      </div>
      {/* 
      <div>
        Works
      </div> */}
      <ProjectCardContainer />
    </main>
  )
}
