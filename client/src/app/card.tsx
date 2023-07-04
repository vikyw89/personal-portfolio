"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export type CardProps = {
    props: {
        index?: number,
        year: string,
        videoSrc: string,
        title: string,
        description: string,
        liveLink: string,
        repoLink: string,
    }
}

export const Card = ({ props }: CardProps) => {
    const video: any = useRef(null)
    const isInView = useInView(video, { amount: 0.01, margin: '-40%' })

    useEffect(() => {
        if (isInView) {
            video.current.play()
        } else {
            video.current.pause()
        }
    }, [isInView])

    return (
        <>
            <motion.div className="aspect w-full z-20 flex flex-col text-base-content"
                initial={{
                    opacity: 0.2,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    type: 'spring',
                }}
                exit={{
                    opacity: 0,
                    scale: 0,
                }}
            >
                <div className="relative w-full">
                    <motion.video preload="auto" className="aspect-square bg-primary bg-opacity-50 backdrop-blur-sm w-full shadow-2xl object-cover" muted loop ref={video}
                    >
                        <source src={props.videoSrc} type="video/webm" />
                    </motion.video>
                    <motion.div className="links inset-0 absolute grid grid-flow-col items-end  font-extrabold "
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{
                            amount: 0.01,
                            margin: '-40%'
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
                <div className="description p-2">
                    <div className="title font-extrabold flex justify-between">
                        <span>
                            {props.title}
                        </span>
                        <span>
                            {props.year}
                        </span>
                    </div>
                    <div>
                        {props.description}
                    </div>
                </div>
            </motion.div>
        </>
    )
}