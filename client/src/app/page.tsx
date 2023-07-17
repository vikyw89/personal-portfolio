'use client'

import { Background } from './background'
import { Header } from './header'
import { ProjectCardContainer } from './projectCardContainer'

export default function Home() {

  return (
    <div className="content grid text-base-content z-0 justify-center">
      <Header />
      <ProjectCardContainer/>
      {/* <Footer /> */}
      <Background />
    </div >
  )
}
