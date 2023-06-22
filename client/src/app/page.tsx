"use client"
import Image from 'next/image'
import { BackgroundComponent } from './background.tsx'
import { ForegroundComponent } from './foreground.tsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const textContent = [`I'm Viky`, `I'm a full-stack developer`, `I like creating things`, `I like exploring technologies`, `I'm a self learner`, `I enjoy solving problem`]

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.screen.height)
  }, [])
  return (
    <main className="content grid flex-1">
      <BackgroundComponent />
      <div className='focus z-10'>
        <motion.div
          className="text-neutral-content text-3xl p-10"
        >
          {textContent.map((e, i) => {
            return <motion.div
              initial={{ display: 'none' }}
              animate={{ opacity: [0, 100, 100, 0] }}
              exit={{ display: 'none' }}
              transition={{
                delay: i * 2,
                duration: 2,
              }}
              key={i}
              className='text-neutral-text'>
              {Array.from(e).map((e, i) => {
                return <motion.span
                  key={i}
                  transition={{
                    delay: i,
                  }}
                >
                  {e}
                </motion.span>
              })}
            </motion.div>
          })}
        </motion.div>
      </div>
      <ForegroundComponent />
      {/* 
      <div>
        Works
      </div> */}
      {/* <ProjectCardContainer /> */}
    </main >
  )
}
