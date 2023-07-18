'use client'
import { motion } from 'framer-motion'
import { Background } from '../background'
import { Header } from '../header'
import { IntroductionComponent } from './introduction'

export default function Page() {
  return (
    <>
      <motion.div className="fixed inset-0 content grid text-base-content z-0">
        <Header />
        <IntroductionComponent />
        {/* <Footer /> */}
        <Background />
      </motion.div>
    </>
  )
}