'use client'
import { Environment, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { Model } from './Model7'


const Loading = () => {
  const { progress } = useProgress()
  return (
    <>
      <motion.div className='w-full h-full bg-primary rounded-full' style={{
        opacity: 0.01 * progress,
        scaleY: 0.01 * progress
      }}
      >
      </motion.div>
    </>
  )
}

export const AnimatedMe = () => {

  return (
    <div className="h-full w-full object-cover overflow-visible relative translate-x-11">
      <Suspense fallback={<Loading />}>
        <Canvas>
          <Model />
          <Environment preset="lobby" />
        </Canvas>
      </Suspense>
    </div>
  )
}