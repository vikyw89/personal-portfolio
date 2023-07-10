"use client"

import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const links = {
    linkedIn: `https://www.linkedin.com/in/vikyweb/`,
    github: `https://github.com/vikyw89`,
    gmail: `vikyw89@gmail.com`,
    whatsApp: `https://wa.me/+6281234001700?text=${encodeURIComponent("I found you from your portfolio site")}`,
    repo: `https://github.com/vikyw89/personal-portfolio`,
    resume: `https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/030723_Daniel_Viky_Wahjoedin_Resume.pdf?alt=media&token=5e3a5a3a-6fb4-4c84-a1c8-81a18e8da169`
}

export default function Menu() {
    const router = useRouter()
    const closeMenuHandler = () => {
        router.back()
    }
    return (
        <motion.div className='fixed inset-0 bg-base-200 text-base-content p-4 flex flex-col gap-5'

        >
            <div className='flex justify-between'>
                <button onClick={closeMenuHandler}>
                    <CloseIcon />
                </button>
                <Link href={"/"} className='flex justify-center items-center'>
                    <span>About</span>
                    <ArrowRightIcon />
                </Link>
            </div>
            <ul className='menuContents grid gap-2'>
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
        </motion.div>
    )
}