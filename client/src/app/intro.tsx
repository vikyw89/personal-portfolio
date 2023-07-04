import { motion, stagger } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const introText = [
    `Hello`,
    `I'm Viky`,
    `I'm a full-stack developer`
]

export const IntroComponent = ({ props }: any) => {
    const [screenSize, setScreenSize] = useState<any>()

    useEffect(() => {
        setScreenSize({ h: window.screen.height, w: window.screen.width })
    }, [])

    const removeIntro = () => {
        props.setIntro(false)
        console.log('introRemoved')
    }
    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black text-white font-bold mix-blend-multiply flex flex-col items-center justify-center ">
            <motion.div
                animate={{
                    scale: [1, 10],
                }}
                transition={{
                    type: 'spring',
                    delay: introText.length * 3
                }}
                className="flex flex-col items-center justify-center"
                onAnimationComplete={removeIntro}
            >
                {introText.map((v, i) => {
                    return (
                        <motion.div
                        className="w-full p-5"
                            initial={{
                                x: -100,
                                opacity: 0,
                                color: 'black',
                                backgroundColor: 'white'
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
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