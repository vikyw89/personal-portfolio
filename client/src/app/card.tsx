/* eslint-disable react/prop-types */
'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

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
  const video: any = useRef(null)
  const isInView = useInView(video, { amount: 1 })

  useEffect(() => {
    if (isInView) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }, [isInView])

  return (
    <>
      <motion.div className="aspect w-full z-20 flex flex-col shadow-lg text-base-content sm:max-w-7xl sm:grid sm:grid-flow-dense sm:grid-cols-2 sm:gap-2 sm:backdrop-blur-sm sm:bg-secondary sm:text-secondary-content sm:bg-opacity-80 sm:rounded-xl"
        initial={{
          opacity: 0.2,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          type: 'spring',
        }}
        viewport={{
          amount: 0.75,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <div className="relative w-full">
          <video preload="auto" className="aspect-square bg-primary bg-opacity-50 backdrop-blur-sm w-full shadow-2xl object-cover sm:aspect-square md:aspect-video" muted loop ref={video}
          >
            <source src={props.videoSrc} type="video/webm" />
          </video>
          <motion.div className="links inset-0 absolute grid grid-flow-col items-end  font-extrabold "
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              amount: 1
            }}
            transition={{
              type: 'spring',
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
      </motion.div>
    </>
  )
}