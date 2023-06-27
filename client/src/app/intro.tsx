import { motion, stagger } from "framer-motion"

const introText = [
    `Hello`,
    `I'm Viky`,
    `I'm a full-stack developer`
]

export const IntroComponent = () => {
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
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 2,
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