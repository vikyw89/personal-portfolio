'use client'

import { ProjectCardContainer } from './projectCardContainer'
import { motion } from 'framer-motion'

export default function Page() {

  return (
    <motion.div className="content grid text-base-content z-0 justify-center"
    >
      <ProjectCardContainer />
    </motion.div >
  )
}
