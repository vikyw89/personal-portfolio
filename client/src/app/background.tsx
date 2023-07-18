'use client'
import { usePathname } from 'next/navigation'
import { ReactFitty } from 'react-fitty'

export const Background = () => {
  const pathName = usePathname()

  return (
    <div className='fixed -z-10 inset-0 opacity-[0.05] text-base-content'>
      <ReactFitty className="absolute right-0 [writing-mode:vertical-lr] h-14 select-none" maxSize={200}>
        {pathName}
      </ReactFitty>
      <ReactFitty className="absolute bottom-0">
        <h1 className="hidden xl:block">
                    viky
        </h1>
      </ReactFitty>
    </div>
  )
}