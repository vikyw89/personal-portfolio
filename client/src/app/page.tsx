"use client"
import Image from 'next/image'
import { BackgroundComponent } from './background.tsx'
import { ForegroundComponent } from './foreground.tsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import { IntroComponent } from './intro.tsx'

const textContent = [`Hello there...`, `I'm Viky`, `I'm a full-stack developer`, `I like creating things`, `I like exploring technologies`, `I'm a self learner`, `I enjoy solving problem`]

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.screen.height)
  }, [])
  return (
    <main className="content grid flex-1">
      <IntroComponent/>
      <BackgroundComponent />
      <ForegroundComponent />
    </main >
  )
}
