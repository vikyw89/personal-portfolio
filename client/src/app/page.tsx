"use client"
import { useState } from 'react'
import { Background } from './background'
import { ForegroundComponent } from './foreground'
import { HeaderComponent } from './headerComponent'
import { IntroComponent } from './intro'
import { ProjectCardContainer } from './projectCardContainer'
import { IntroductionComponent } from './introduction'
import { AnimatedMe } from './animatedMe'
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
    <motion.div className="fixed inset-0 content flex flex-col text-base-content z-0 justify-center">
      <Header />
      <IntroductionComponent />
      <Footer/>
      {/* <BackgroundComponent2/> */}
      {/* <BackgroundComponent3/> */}
      {/* {intro &&
        <>
          <IntroComponent props={{ setIntro }} />
          <ForegroundComponent />
        </>
      } */}
      {/* <AnimatedMe /> */}
      {/* {intro &&
          <>
            <HeaderComponent />
            <IntroductionComponent />
            <ProjectCardContainer />
          </>
        } */}
      <Background />
      {/* <ForegroundComponent /> */}
    </motion.div >
  )
}
