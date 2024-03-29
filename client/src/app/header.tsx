'use client'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Menu from './menu'

const navHash = {
  '/': 'about',
  '/about/': 'home'
} as any

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pathName = usePathname()
  const [navTo, setNavTo] = useState('about')
  const router = useRouter()

  useEffect(() => {
    if (!pathName) return
    setNavTo(navHash[pathName])
  }, [pathName])

  const openMenuHandler = () => {
    setShowMenu(true)
  }

  const navHandler = () => {
    router.push(`/${navTo === 'home' ? '' : navTo}`)
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 flex p-1 z-[60] justify-between mix-blend-difference text-white'>
        <button onClick={openMenuHandler} className='btn btn-ghost btn-secondary-focus' >
          {!showMenu && <MenuIcon />}
        </button>
        <motion.button className='font-extrabold pr-3 mix-blend-normal' onClick={navHandler}
        >
          <span>{`.${navTo}`}</span>
        </motion.button>
      </header>
      {
        showMenu &&
        <Menu props={{ setShowMenu }} />
      }
    </>
  )
}