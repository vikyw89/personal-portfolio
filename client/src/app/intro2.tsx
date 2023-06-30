"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const introText = `HELLO`.split("")

export const IntroLineComponent = () => {
    const fontContainer = useRef<any>(null)
    const [fontSize, setFontSize] = useState()

    useEffect(() => {
        setFontSize(fontContainer.current.clientWidth)
        setInterval(()=>{
            
        },1000)
    }, [])

    return (
        <div className="w-full flex justify-evenly gap-2" style={{
            fontSize: fontSize
        }}>
            {introText.map((v, i) => {
                return <span ref={fontContainer} key={i} className="w-full text-center">{v}</span>
            })}
        </div>
    )
}

export const Intro2Component = () => {

    const replicateHandler = () => {

    }

    return (
        <div className="fixed inset-0 z-50">
            <motion.div
                onViewportEnter={replicateHandler}
            >
                <IntroLineComponent />
            </motion.div>
        </div>
    )
}