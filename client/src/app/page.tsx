"use client"
import { useState } from 'react'
import { BackgroundComponent } from './background.tsx'
import { ForegroundComponent } from './foreground.tsx'
import { HeaderComponent } from './headerComponent.tsx'
import { IntroComponent } from './intro.tsx'
import { ProjectCardContainer } from './projectCardContainer.tsx'

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
      <BackgroundComponent />
    </main >
  )
}
