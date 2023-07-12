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
    <div className='fixed top-0 left-0 right-0 flex p-3 z-[60] justify-between'>
      <button onClick={openMenuHandler} className='btn btn-ghost btn-secondary-focus text-secondary-focus' >
        {!showMenu && <MenuIcon />}
      </button>

      <button className='font-extrabold text-secondary-focus btn btn-ghost' onClick={navAboutHandler}>
        <span>.{navHash[pathName].slice(1) || 'home'}</span>
      </button>
      {showMenu &&
        <Menu props={{ setShowMenu }} />
      }
    </div>
  )
}