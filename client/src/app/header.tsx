import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import MenuIcon from '@mui/icons-material/Menu'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Menu from './menu'

const navHash = {
  '/': '/about',
  '/about/': '/'
} as any

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pathName = usePathname()
  const router = useRouter()
  const openMenuHandler = () => {
    setShowMenu(true)
  }

  const navAboutHandler = () => {
    const navTo = navHash[pathName]
    router.push(navTo)
  }

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between p-3 z-[60]'>
      <button onClick={openMenuHandler}>
        <MenuIcon />
      </button>

      {showMenu &&
        <Menu props={{ setShowMenu }} />
      }
      <button className='flex justify-center items-center font-extrabold' onClick={navAboutHandler}>
        <span>.{navHash[pathName].slice(1) || 'home'}</span>
      </button>
    </div>
  )
}