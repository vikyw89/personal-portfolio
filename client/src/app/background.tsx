import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const BackgroundComponent = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const screenWidth = window.screen.width
        setWidth(screenWidth)
    }, [])

    return (
        <div className='background fixed -z-10 top-0 right-0 bottom-0 left-0 opacity-25'>
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
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
                className='text-9xl font-bold text-neutral-content'
            >
                こんにちは
            </motion.div>
        </div>
    )
}