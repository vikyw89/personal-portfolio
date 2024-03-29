'use client'

import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const themes = ['march', 'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']
const themeQty = themes.length
const links = {
  linkedIn: 'https://www.linkedin.com/in/vikyweb/',
  github: 'https://github.com/vikyw89',
  gmail: 'mailto:vikyw89@gmail.com',
  whatsApp: `https://wa.me/+6281234001700?text=${encodeURIComponent('I found you from your portfolio site')}`,
  repo: 'https://github.com/vikyw89/personal-portfolio',
  // resume: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b5ad9.appspot.com/o/030723_Daniel_Viky_Wahjoedin_Resume.pdf?alt=media&token=5e3a5a3a-6fb4-4c84-a1c8-81a18e8da169'
}

export default function Menu({ props }: any) {
  const [themeIndex, setThemeIndex] = useState(0)
  const closeMenuHandler = () => {
    props.setShowMenu(false)
  }

  useEffect(() => {
    const activeTheme = document.querySelector('html')?.getAttribute('data-theme')
    const index = themes.findIndex(v => v === activeTheme)
    setThemeIndex(index)
  }, [])
  
  const toggleTheme = () => {
    const htmlNode = document.querySelector('html')
    setThemeIndex(p => {
      const newIndex = (p + 1) % themeQty
      htmlNode?.setAttribute('data-theme', themes[newIndex])
      return newIndex
    })
  }
  return (
    <motion.div className='fixed left-0 top-0 bottom-0 bg-secondary text-secondary-content bg-opacity-70 flex flex-col gap-5 p-3 pl-10 w-80 shadow-sm z-[60] backdrop-blur-sm'
      initial={{
        x:'-100%',
      }}
      animate={{
        x:'-40px'
      }}
      exit={{
        x:'-100%'
      }}
    >
      <div className='flex justify-between'>
        <button onClick={closeMenuHandler} className='btn btn-ghost'>
          <CloseIcon />
        </button>
      </div>
      <ul className='menuContents grid gap-2'>
        {Object.entries(links).map((v, i) => {
          return (
            <li key={i} className='pl-5'>
              <Link target="_blank" rel="noopener noreferrer" href={v[1]}>
                <span className='font-bold'>.{v[0]}</span>
              </Link>
            </li>
          )
        })}
        <li onClick={toggleTheme} className='cursor-pointer pl-5 font-bold'>.{themes[themeIndex]}</li>
      </ul>
    </motion.div>
  )
}