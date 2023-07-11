import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import MenuIcon from '@mui/icons-material/Menu'
import { usePathname, useRouter } from 'next/navigation'

export const Header = () => {
  const pathName = usePathname()
    const router = useRouter()
    const openMenuHandler = () => {
      router.push('/menu')
    }
  
    const navAboutHandler = () => {
      router.push('/about')
    }
  
    return (
      <div className='fixed top-0 left-0 right-0 flex justify-between p-3'>
        <button onClick={openMenuHandler}>
          <MenuIcon />
        </button>
        <button className='flex justify-center items-center' onClick={navAboutHandler}>
          <span>{pathName === '/about/' ? '.home' : '.about' }</span>
          <ArrowRightIcon />
        </button>
      </div>
    )
  }