"use client"

import Marquee from "react-fast-marquee"
import { AnimatedMe } from "./animatedMe"
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const backStory = `A nobody with a mixed experience in architectural engineering and web developments`

const introduction = ``
export const IntroductionComponent = () => {
    const router = useRouter()
    
    return (
        <div className="text-base-content grid grid-cols-[3fr_1fr] relative mt-20 mb-20 row-[repeat(5,min-content)]] self-center">
            <div className="row-[1/2] p-3">
                <h1 className="font-extrabold">
                    .name
                </h1>
                <h1 className="pl-5">
                    viky
                </h1>
                <h1 className="font-extrabold">
                    .level
                </h1>
                <h1 className="pl-5">
                    50/99
                </h1>
                <h1 className="font-extrabold">
                    .class
                </h1>
                <div className="grid pl-5">
                    <h1>
                        web developer
                    </h1>
                </div>
                <h1 className="font-extrabold">
                    .quote
                </h1>
                <div className="grid pl-5 pr-20">
                    <h1>
                        &quot;Everything is relative, with it&apos;s pros and cons&quot;
                    </h1>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3]">
                <Marquee autoFill speed={10} className="h-6">
                    <span className="font-extrabold text-primary z-10 relative">
                        VIKY&nbsp;&nbsp;
                    </span>
                </Marquee>
                <h1 className="font-mono bg-primary text-primary-content w-full font-bold text-3xl p-3 pl-5 relative z-40 -translate-y-[5px]">
                    <div className="text-warning">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                </h1>
            </div>
            <div className="relative grid justify-center items-center col-[2/-1] row-[1/5] -translate-x-[40vw] z-50">
                <AnimatedMe />
            </div>
            <div className="col-[1/2] p-3 pr-20">
                <h1 className="font-extrabold">
                    .backStory
                </h1>
                <div className="grid pl-5">
                    <h1>
                        {backStory}
                    </h1>
                </div>
                <h1 className="font-extrabold">
                    .skills
                </h1>
                <div className="grid pl-5">
                    <h1>
                        self learner
                    </h1>
                    <h1>
                        exploration
                    </h1>
                </div>
            </div>
        </div>
    )
}