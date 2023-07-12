'use client'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model } from './Model7'

export const AnimatedMe = () => {

  return (
    <div className="h-full w-full object-cover overflow-visible relative translate-x-11">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="lobby" />
        </Suspense>
      </Canvas>
    </div>
  )
}