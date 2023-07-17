'use client'

import { Background } from '../background'
import { Header } from '../header'
import { IntroductionComponent } from './introduction'

export default function Page() {
  return (
    <div className="content grid text-base-content z-0 justify-center">
      <Header />
      <IntroductionComponent />
      {/* <Footer /> */}
      <Background />
    </div>
  )
}