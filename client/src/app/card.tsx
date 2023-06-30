"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export type CardProps = {
    props: {
        index?: number,
        videoSrc: string,
        title: string,
        description: string,
        liveLink: string,
        repoLink: string,
    }
}

export const Card = ({ props }: CardProps) => {
    const video: any = useRef(null)
    const isInView = useInView(video, { amount: 0.01, margin:'-40%' })

    useEffect(() => {
        if (isInView) {
            video.current.play()
        } else {
            video.current.pause()
        }
    }, [isInView])
    const viewportEnterHandler = () => {
        // video.current.play()
    }
    const viewportLeaveHandler = () => {
        // video.current.pause()
    }
    return (
        <>
            <motion.div className="aspect-square w-full z-20 grid text-base-content"
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    type:'spring',
                    duration:1
                }}
                exit={{
                    opacity: 0,
                    scale: 0,
                }}
                onViewportEnter={viewportEnterHandler}
                onViewportLeave={viewportLeaveHandler}
            >
                <div className="relative w-full">
                    <motion.video preload="auto" className="aspect-square bg-primary bg-opacity-50 backdrop-blur-sm w-full shadow-2xl object-cover" muted loop ref={video}
                    >
                        <source src={props.videoSrc} type="video/webm" />
                    </motion.video>
                    <motion.div className="links inset-0 absolute flex flex-col items-end justify-between font-extrabold "
                        initial={{
                            x: 30
                        }}
                        whileInView={{
                            x: 10
                        }}
                        transition={{
                            type: 'spring',
                            duration: 1
                        }}

                    >
                        <a className="bg-info btn btn-square rounded-r-none bg-opacity-60 backdrop-blur-md flex-auto border-none" target="_blank" rel="noopener noreferrer" href={props.liveLink}>
                            <span className="-rotate-90 text-info-content">
                                Live
                            </span>
                        </a>
                        <a className="bg-info  btn btn-square rounded-r-none bg-opacity-60 backdrop-blur-md flex-auto border-none hover:-translate-x-10" target="_blank" rel="noopener noreferrer" href={props.repoLink}>
                            <span className="-rotate-90 text-info-content">
                                Repo
                            </span>
                        </a>
                    </motion.div>
                </div>
                <div className="description p-2">
                    <div className="title font-extrabold">
                        {props.title}
                    </div>
                    <div>
                        {props.description}
                    </div>
                </div>
            </motion.div>
        </>
    )
}