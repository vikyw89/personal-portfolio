"use client"
import { useState } from 'react'
import { BackgroundComponent } from './background'
import { ForegroundComponent } from './foreground'
import { HeaderComponent } from './headerComponent'
import { IntroComponent } from './intro'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {
  const [intro, setIntro] = useState(true)

  return (
    <main className="content grid flex-1">
      {intro &&
        <>
          <IntroComponent props={{ setIntro }} />
          <ForegroundComponent />
        </>
      }
      {!intro &&
        <>
          <HeaderComponent />
          <ProjectCardContainer />
        </>
      }
      {/* <BackgroundComponent /> */}
    </main >
  )
}
