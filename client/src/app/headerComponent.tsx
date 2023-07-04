"use client"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useState } from 'react';

const themeOptions = ["march", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
const themeQty = themeOptions.length
const resumeURL = `https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/030723_Daniel_Viky_Wahjoedin_Resume.pdf?alt=media&token=5e3a5a3a-6fb4-4c84-a1c8-81a18e8da169`
const socials = {
    linkedIn: `https://www.linkedin.com/in/vikyweb/`,
    github: `https://github.com/vikyw89`,
    gmail: `vikyw89@gmail.com`,
    whatsApp: `https://wa.me/+6281234001700?text=${encodeURIComponent("I found you from your portfolio site")}`,
    repo: `https://github.com/vikyw89/personal-portfolio`
}

export const HeaderComponent = () => {
    const [themeIndex, setThemeIndex] = useState(0)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuClickHandler = (e: any) => {
        setMenuIsOpen(p => !p)
    }

    const closeMenu = (e: any) => {
        e.stopPropagation()
        if (e.target.id === 'menuPopUp') {
            setMenuIsOpen(p => !p)
        }
    }

    const toggleTheme = () => {
        const htmlNode = document.querySelector('html')
        setThemeIndex(p => {
            const newIndex = (p + 1) % themeQty
            htmlNode?.setAttribute('data-theme', themeOptions[newIndex])
            return newIndex
        })
    }
    return (
        <>
            <div className="flex fixed top-0 w-full bg-primary bg-opacity-50 backdrop-blur-sm z-40 shadow-2xl">
                <button className='btn btn-square bg-opacity-0 border-0 shadow-sm z-20' onClick={menuClickHandler}>
                    {menuIsOpen &&
                        <MenuOpenIcon />
                    }
                    {!menuIsOpen &&
                        <MenuIcon />
                    }
                </button>
            </div>
            {menuIsOpen &&
                <motion.div
                    initial={{
                        x: -50,
                    }}
                    animate={{
                        x: 0
                    }}
                    exit={{
                        x: -50
                    }}
                    transition={{
                        type: 'spring',
                        damping: 8
                    }}
                    id="menuPopUp" className='z-50 fixed top-0 -left-10 bottom-0 right-0 flex' onClick={closeMenu}>
                    <div className='flex flex-col bg-opacity-50 p-10 pl-20 font-bold bg-secondary text-secondary-content backdrop-blur-md shadow-2xl'>
                        <ul className='flex flex-col gap-5 flex-1'>
                            <li><a target="_blank" rel="noopener noreferrer" href={resumeURL}>Resume</a></li>
                            {/* <li><a target="_blank" rel="noopener noreferrer" href="#">Projects</a></li> */}
                            <li><a target="_blank" rel="noopener noreferrer" href={socials.whatsApp}>WhatsApp</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href={socials.github}>Github</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href={socials.linkedIn}>LinkedIn</a></li>
                            <li onClick={toggleTheme} className='cursor-pointer'>Active Theme<p>{themeOptions[themeIndex]}</p></li>
                        </ul>
                        <a target="_blank" rel="noopener noreferrer" href={socials.repo}>
                            <GitHubIcon />
                        </a>
                    </div>
                </motion.div>
            }
            <div>
                <button className='btn btn-square opacity-0' onClick={menuClickHandler}>
                    {menuIsOpen &&
                        <MenuOpenIcon />
                    }
                    {!menuIsOpen &&
                        <MenuIcon />
                    }
                </button>
            </div>
        </>
    )
}