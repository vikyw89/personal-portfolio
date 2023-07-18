'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const wrapperVariants = {
  initial: {
    // clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    scale:1,
    transition: { duration: 5 },
  },
  animate: {
    // clipPath: 'polygon(0 0, 300% 0, 300% 100%, 0 100%)',
    scale:2,
    transition: { duration: 5, staggerChildren: .1 }
  },
  exit: {
    // clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    scale:1,
    transition: { duration: 5 }
  }
}

const Loading = () => {
  const path = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={path} className="flex items-center justify-center bg-opacity-30 z-[100] fixed inset-0"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={wrapperVariants}>
        LOADING
      </motion.div>
    </AnimatePresence>
  )
}

export default Loading