/* eslint-disable react/prop-types */
'use client'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export type CardProps = {
  props: {
    index: number,
    year: string,
    tech: Array<string>,
    videoSrc: string,
    title: string,
    description: string,
    liveLink: string,
    repoLink: string,
  }
}

export const Card = ({ props }: CardProps) => {
  const video = useRef(null) as any
  const [card, animate] = useAnimate()
  const cardIsInView = useInView(card, { amount: 0.1 })
  const videoIsInView = useInView(video, { margin: '-40%' })
  // const [watchVideo, setWatchVideo] = useState(false)

  useEffect(() => {
    if (!videoIsInView) {
      video.current.pause()
    }
  }, [videoIsInView])

  const openVideo = (e: any) => {
    e.stopPropagation()
    // setWatchVideo(true)
    video.current.play()
  }

  useEffect(() => {
    const entryPosition = props.index % 2 ? '50vw' : '-50vw'
    if (!video.current) return
    if (cardIsInView) {
      animate(card.current,
        {
          x: 0,
          opacity: 1,
        })
    } else {
      animate(card.current,
        {
          x: entryPosition,
          opacity: 0,
        })
    }
  }, [card, cardIsInView, animate, props.index])

  return (
    <>
      {/* {watchVideo && <Modal props={{...props, setWatchVideo}}/>} */}
      <div ref={card} onClick={openVideo} className="aspect w-full z-20 flex flex-col shadow-lg text-base-content sm:max-w-7xl sm:grid sm:grid-flow-dense sm:grid-cols-2 sm:gap-2 sm:backdrop-blur-sm sm:bg-secondary sm:text-secondary-content sm:bg-opacity-80 sm:rounded-xl">
        <div className="relative w-full">
          <video ref={video} className="aspect-square bg-primary bg-opacity-50 backdrop-blur-sm w-full shadow-2xl object-cover sm:aspect-square md:aspect-video" muted loop>
            <source src={props.videoSrc} type="video/webm" />
          </video>
          <motion.div className="links inset-0 absolute grid grid-flow-col items-end  font-extrabold "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1
            }}
          >
            <a className="btn bg-opacity-60 rounded-none backdrop-blur-md border-none" target="_blank" rel="noopener noreferrer" href={props.repoLink}>
              <GitHubIcon />
            </a>
            <a className="btn bg-opacity-60 rounded-none backdrop-blur-md border-none" target="_blank" rel="noopener noreferrer" href={props.liveLink}>
              <ExitToAppIcon />
            </a>
          </motion.div>
        </div>
        <div className="description p-2 sm:p-5 sm:rounded-xl sm:flex sm:flex-col sm:gap-2">
          <div className="title font-extrabold flex justify-between sm:text-xl">
            <span className="">
              {props.title}
            </span>
            <span>
              {props.year}
            </span>
          </div>
          <div>
            {props.description}
          </div>
          <div className="grid grid-cols-2">
            {props.tech.map((v, i) => {
              return <li key={i}>{v}</li>
            })}
          </div>
        </div>
      </div>
    </>
  )
}