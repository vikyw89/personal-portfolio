import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Card } from "./card"

const data = [
    {
        index:1,
        title: 'myPhonebook',
        description: 'multi user responsive phonebook web app',
        liveLink: 'https://myphonebook-app-dev.web.app/',
        repoLink: 'https://github.com/weaponsforge/my-phonebook',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2012-05-46.webm?alt=media&token=0e7cc66f-7e74-421e-bdec-5ca34dadf3a2'
    },
    {
        index:2,
        title: 'pinterestClone',
        description: 'a responsive pinterest clone with a twist',
        liveLink: 'https://vikyw89.github.io/pinterestClone/',
        repoLink: 'https://github.com/https://github.com/vikyw89/pinterestClone/my-phonebook',
        videoSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/thumbnails%2FScreencast%20from%202023-06-29%2015-47-33.webm?alt=media&token=19cb540a-4a88-43f3-932e-b80fff12be4d'
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