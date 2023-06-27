import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const BackgroundComponent = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const screenWidth = window.screen.width
        setWidth(screenWidth)
    }, [])

    return (
        <div className='background fixed -z-10 inset-0 opacity-25 text-base-content'>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [0 - width, width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                Bonjour
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [width, 0 - width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                Aloha
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [0 - width, width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                Hei
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [width, 0 - width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                你好
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [0 - width, width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                Hello
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [width, 0 - width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                Hola
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    x: [width, 0 - width],
                    opacity: [100, 100]
                }}
                transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                }}
                className='text-9xl font-bold'
            >
                こんにちは
            </motion.div>
        </div>
    )
}