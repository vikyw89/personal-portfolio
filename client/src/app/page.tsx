"use client"
import { useState } from 'react'
import { BackgroundComponent } from './background'
import { ForegroundComponent } from './foreground'
import { HeaderComponent } from './headerComponent'
import { IntroComponent } from './intro'
import { ProjectCardContainer } from './projectCardContainer'
import { IntroductionComponent } from './introduction'
import { AnimatedMe } from './animatedMe'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [intro, setIntro] = useState(true)

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main className="content grid flex-1 text-base-content"
        initial={{
          x: -1000,
          scale: 0
        }}
        animate={{
          x: 0,
          scale: 1
        }}
        exit={{
          x: 1000,
          scale: 0
        }}
      >
        aaaaaa
        {/* {intro &&
        <>
          <IntroComponent props={{ setIntro }} />
          <ForegroundComponent />
        </>
      } */}
        {/* <AnimatedMe /> */}
        {intro &&
          <>
            <HeaderComponent />
            <IntroductionComponent />
            <ProjectCardContainer />
          </>
        }
        {/* <BackgroundComponent /> */}
        {/* <ForegroundComponent /> */}
      </motion.main >
    </AnimatePresence>
  )
}
