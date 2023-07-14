'use client'

import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-transparent">
      <motion.div className="fixed bg-neutral inset-0 text-neutral-focus"
        initial={{
          y: '-100vh'
        }}
        animate={{
          y: '-50vh'
        }}
        exit={{
          y: '-100vh'
        }}
      >

      </motion.div>
      <motion.div className="fixed bg-neutral inset-0 text-neutral-focus"
        initial={{
          y:'100vh'
        }}
        animate={{
          y: '50vh'
        }}
        exit={{
          y:'100vh'
        }}

      >

      </motion.div>
    </div>
  )
}

export default Loading