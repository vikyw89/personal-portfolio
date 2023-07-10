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
    const [themeIndex, setThemeIndex] = useState(3)

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
            <div className="flex fixed top-0 w-full z-40">
                <a href="/menu">
                    <MenuIcon />
                </a>
            </div>
        </>
    )
}