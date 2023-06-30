"use client"

import { color, motion } from "framer-motion"
import { useEffect, useState } from "react"

// self replicating box
// every time it replicates on different axis y -x -y and so on

// get screenSize
// divide screen into grid of squares

export const Intro3Component = () => {
    const [screenSize, setScreenSize] = useState()

    useEffect(() => {
        if (!window) return
        window.screen.width
        window.screen.height
    }, [])
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            {!screenSize &&
                <motion.div
                    className="box w-5 aspect-square bg-blue-500"
                    initial={{
                        scale:0,
                    }}
                    animate={{
                        scale:[1,2,0.5,1],
                        scaleY:100
                    }}
                >
                </motion.div>
            }
        </div>
    )
}