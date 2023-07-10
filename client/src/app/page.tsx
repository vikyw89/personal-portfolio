"use client"
import { useState } from 'react'
import { BackgroundComponent } from './background'
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
    <motion.div className="fixed inset-0 content flex flex-col text-base-content justify-between z-0">
      <div className='flex justify-between p-3'>
        <button onClick={openMenuHandler}>
          <MenuIcon />
        </button>
        <button className='flex justify-center items-center' onClick={navAboutHandler}>
          <span>/about</span>
          <ArrowRightIcon />
        </button>
      </div>
      <IntroductionComponent />
      <div className='flex justify-between w-full p-3'>
        <button className='flex w-full justify-start'>
          <ArrowLeftIcon />
          <h1>
            .prev()
          </h1>
        </button>
        <button className='flex w-full justify-end'>
          <h1>
            .next()
          </h1>
          <ArrowRightIcon />
        </button>
      </div>
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
      {/* <BackgroundComponent /> */}
      {/* <ForegroundComponent /> */}
    </motion.div >
  )
}
