'use client'
import { motion } from 'framer-motion'
import { Background } from './background'
import { Header } from './header'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {

  return (
    <motion.div className="content grid text-base-content z-0 justify-center">
      <Header />
      <ProjectCardContainer/>
      {/* <Footer /> */}
      <Background />
    </motion.div >
  )
}
