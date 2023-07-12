import MenuIcon from '@mui/icons-material/Menu'
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

  useEffect(()=>{
    if(!pathName) return
    setNavTo(navHash[pathName])
  },[pathName])

  const openMenuHandler = () => {
    setShowMenu(true)
  }

  const navAboutHandler = () => {
    router.push(`/${navTo === 'home' ? '': navTo}`)
  }

  return (
    <div className='fixed top-0 left-0 right-0 flex p-1 z-[60] justify-between'>
      <button onClick={openMenuHandler} className='btn btn-ghost btn-secondary-focus text-base-content' >
        {!showMenu && <MenuIcon />}
      </button>

      <button className='font-extrabold text-base-content pr-3 ' onClick={navAboutHandler}>
        <span>{`.${navTo}`}</span>
      </button>
      {showMenu &&
        <Menu props={{ setShowMenu }} />
      }
    </div>
  )
}