"use client"
import { useState } from 'react'
import { Background } from './background'
import { ForegroundComponent } from './foreground'
import { HeaderComponent } from './headerComponent'
import { IntroComponent } from './intro'
import { ProjectCardContainer } from './projectCardContainer'
import { IntroductionComponent } from './about/introduction'
import { AnimatedMe } from './about/animatedMe'
import { AnimatePresence, motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import BackgroundComponent2 from './background2'
import BackgroundComponent3 from './background3'
import AnimatedMe2 from './animatedMe2'
import { Header } from './header'
import { Footer } from './footer'
import { ReactFitty } from 'react-fitty'

export default function Home() {
  // const [intro, setIntro] = useState(true)
  const router = useRouter()

  const openMenuHandler = () => {
    router.push('/menu')
  }

  const navAboutHandler = () => {
    router.push('/about')
  }

  return (
    <motion.div className="content grid text-base-content z-0 justify-center">
      <Header />
      <ProjectCardContainer/>
      {/* <Footer /> */}
      <Background />
    </motion.div >
  )
}
