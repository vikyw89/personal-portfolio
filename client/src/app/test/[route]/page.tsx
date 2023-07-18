'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function RandomRoute() {
  const path = usePathname()
  const router = useRouter()

  const navHandler = () => {
    const newNav = `/test/${Math.floor(Math.random() * 10)}`
    router.push(newNav)
  }

  return (
    <div className='bg-green-600 inset-0 fixed flex justify-center items-center flex-col'>
      <button className='bg-blend-difference text-white' onClick={navHandler}>
        navigate randomly
      </button>
      <div>
        {/* <AnimatedMe/> */}
      </div>
      {path}
    </div>
  )
}

