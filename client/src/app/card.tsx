"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

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
    const isInView = useInView(video)

    useEffect(() => {
        video.current.play()
    }, [isInView])

    return (
        <div className="aspect-auto w-full rounded-3xl z-20 backdrop-blur-sm p-5 bg-primary bg-opacity-20 shadow-sm">
            <div className="relative w-full">
                <motion.video preload="auto" className="aspect-auto w-full rounded-3xl" muted ref={video}
                >
                    <source src={props.videoSrc} type="video/webm" />
                </motion.video>
                <div className="links flex gap-5 justify-between absolute bottom-0 w-full text-primary-content">
                    <a className="bg-primary" href={props.liveLink}>Live</a>
                    <a className="bg-primary" href={props.repoLink}>Repo</a>
                </div>
            </div>
            <div className="description">
                <div className="title font-bold">
                    {props.title}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    )
}