"use client"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import { AnimatedMe } from "./animatedMe";


const backStory = `a nobody with a mixed experience in architectural engineering and web developments`
const links = {
    linkedIn: `https://www.linkedin.com/in/vikyweb/`,
    github: `https://github.com/vikyw89`,
    gmail: `vikyw89@gmail.com`,
    whatsApp: `https://wa.me/+6281234001700?text=${encodeURIComponent("I found you from your portfolio site")}`,
    repo: `https://github.com/vikyw89/personal-portfolio`,
    resume: `https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/030723_Daniel_Viky_Wahjoedin_Resume.pdf?alt=media&token=5e3a5a3a-6fb4-4c84-a1c8-81a18e8da169`
}

const introduction = ``
export const IntroductionComponent = () => {
    const router = useRouter()

    return (
        <div className="text-base-content grid grid-cols-[3fr_1fr] relative mt-20 mb-20 row-[repeat(5,min-content)]] self-center xl:grid-cols-[4fr_1fr_2fr]">
            <div className="row-[1/2] p-3 col-[1/-1] z-50 relative sm:p-10 xl:col-[1/2]">
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
            <div className=" grid justify-center items-center col-[2/3] row-[1/5] z-40 relative translate-x-10">
                <AnimatedMe />
            </div>
            <div className="col-[1/-1] row-[3/4] p-3 relative z-50 max-w-[50vw] sm:p-10 sm:pr-0 sm:max-w-[70vw] xl:col-[1/2]">
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
                <h1 className="font-extrabold hidden sm:block">
                    .equipments
                </h1>
                <div className="hidden sm:grid pl-5">
                    <h1>
                        frontend: nextjs, react, vanilla, tailwindcss, materialui, daisyui, bootstrap
                    </h1>
                    <h1>
                        backend: nextjs, nodejs, flask, nestjs
                    </h1>
                    <h1>
                        ci/cd: github action
                    </h1>
                    <h1>
                        databases: postgresql, sqlite, firestore, cloudinary, mongodb
                    </h1>
                </div>
                <h1 className="font-extrabold">
                    .backStory
                </h1>
                <div className="grid pl-5">
                    <h1>
                        {backStory}
                    </h1>
                </div>
            </div>
            <div className="inventory hidden xl:col-[3/-1] xl:row-[1/2] xl:z-50 xl:p-10 xl:block">
                <h1 className="font-extrabold">
                    .likes
                </h1>
                <div className="grid pl-5">
                    <h1>
                        sci/fi
                    </h1>
                    <h1>
                        drama
                    </h1>
                    <h1>
                        music
                    </h1>
                    <h1>
                        irene
                    </h1>
                </div>
            </div>
            <div className="inventory hidden xl:col-[3/-1] xl:row-[3/4] xl:z-50 xl:p-10 xl:block">
                <h1 className="font-extrabold">
                    .links
                </h1>
                <ul className='grid pl-5'>
                    {Object.entries(links).map((v, i) => {
                        return (
                            <li key={i}>
                                <Link target="_blank" rel="noopener noreferrer" href={v[1]}>
                                    <span>{v[0]}</span>
                                    <ArrowRightIcon />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}