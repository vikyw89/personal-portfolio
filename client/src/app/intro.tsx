import { motion, stagger } from "framer-motion"
import { useEffect, useState } from "react"

const introText = [
    `Hello`,
    `I'm Viky`,
    `I'm a full-stack developer`
]

export const IntroComponent = () => {
    const [screenSize, setScreenSize] = useState<any>()
    useEffect(() => {
        setScreenSize({ h: window.screen.height, w: window.screen.width })
    }, [])
    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black text-white font-bold mix-blend-multiply flex flex-col items-center justify-center ">
            <motion.div
                animate={{
                    scale: [1, 500],
                }}
                transition={{
                    type: 'spring',
                    stiffness: 2,
                    delay: introText.length * 3
                }}
                className="flex flex-col items-center justify-center"
            >
                {introText.map((v, i) => {
                    return (
                        <motion.div
                            initial={{
                                x:-100,
                                opacity: 0,
                                color: 'black',
                                backgroundColor: 'white'
                            }}
                            animate={{
                                x:0,
                                opacity: 1
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 10,
                                delay: i * 2
                            }}
                            key={i}
                        >
                            {v.toUpperCase()}
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}