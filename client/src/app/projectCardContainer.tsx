import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Card } from "./card"

const data = [
    {
        title: 'myPhonebook',
        description: 'a responsive multi-user phonebook web app',
        liveLink: 'https://myphonebook-app-dev.web.app/',
        repoLink: 'https://github.com/weaponsforge/my-phonebook',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2012-05-46.webm?alt=media&token=0e7cc66f-7e74-421e-bdec-5ca34dadf3a2'
    },
    {
        title: 'pinterestClone',
        description: 'a responsive pinterest clone with a twist',
        liveLink: 'https://vikyw89.github.io/pinterestClone/',
        repoLink: 'https://github.com/https://github.com/vikyw89/pinterestClone/my-phonebook',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2015-47-33.webm?alt=media&token=19cb540a-4a88-43f3-932e-b80fff12be4d'
    },
    {
        title: `wheresWaldo`,
        description: `desktop game of where's waldo`,
        liveLink: 'https://whereswaldo-f62b8.firebaseapp.com/',
        repoLink: 'https://github.com/vikyw89/wheresWaldo',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2Fwaldo.webm?alt=media&token=f11c4a60-bec3-40b3-9204-4c34edebae00'
    },
    {
        title: `ticTacToe`,
        description: `a ticTacToe game with a minimax algo and pruning`,
        liveLink: 'https://vikyw89.github.io/ticTacToe/',
        repoLink: 'https://github.com/vikyw89/ticTacToe',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FticTacToe.webm?alt=media&token=21b52588-96a5-40b2-8180-219fd26e720a'
    },
    {
        title: `useSyncV`,
        description: `plug&play react state management NPM library`,
        liveLink: 'https://www.npmjs.com/package/use-sync-v',
        repoLink: 'https://github.com/vikyw89/useSyncV',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2017-20-13.webm?alt=media&token=33ec5152-7fea-47b6-bc3f-d10c59acb10f'
    },
    {
        title: 'calculator',
        description: 'mobile web calculator app',
        liveLink: 'https://vikyw89.github.io/calculator/',
        repoLink: 'https://github.com/vikyw89/calculator',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2016-09-30.webm?alt=media&token=f1f2a0a2-c615-46ed-ae52-6181d7c48cf3'
    },
]

export const ProjectCardContainer = () => {
    return (
        <div className="grid overflow-y-scroll overflow-x-hidden gap-10">
            {data.map((v, i) => {
                return (
                    <Card key={i} props={v} />
                )
            })}
        </div>
    )
}