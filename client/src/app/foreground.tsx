"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const ForegroundComponent = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const screenHeight = window.screen.height
        setHeight(screenHeight)
    }, [])
    return (
        <div className='foreground fixed z-20'>
            <motion.div
                animate={{
                    y: [-height, height + 1000],
                    x: [-200, -200],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className='text-9xl font-bold opacity-0 [writing-mode:vertical-lr] text-neutral-focus'
            >
                hello
            </motion.div>
            <motion.div
                animate={{
                    y: [height + 1000, -height],
                    x: [-400, -400],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className='text-9xl font-bold opacity-0 [writing-mode:vertical-lr] text-neutral-focus'
            >
                goodbye
            </motion.div>
        </div>
    )
}