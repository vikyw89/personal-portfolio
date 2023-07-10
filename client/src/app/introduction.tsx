"use client"

import Marquee from "react-fast-marquee"
import { AnimatedMe } from "./animatedMe"

const introduction = `Web Developer`
export const IntroductionComponent = () => {
    return (
        <div className="text-base-content grid items-center gap-y-[-4px]">
            <div>
                Web Developer
            </div>
            <Marquee autoFill speed={10} className="h-6">
                <span className="font-extrabold text-primary z-10 relative">
                    VIKY&nbsp;&nbsp;
                </span>
            </Marquee>
            <h1 className="font-mono bg-primary text-primary-content w-full font-bold text-3xl p-3 relative z-40 -translate-y-[5px] grid grid-cols-2">
                <div>
                    /profile
                </div>
                <div className="relative grid justify-center items-center">
                    <AnimatedMe />
                </div>
            </h1>
            <div className="grid grid-cols-3">
                <div className="col-start-2 grid">
                    <h1>
                        web_developer
                    </h1>
                    <h1>
                        architectural_engineer
                    </h1>
                </div>
                <div className="col-start-1 col-end-2 text-clip overflow-auto">
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
            </div>
        </div>
    )
}