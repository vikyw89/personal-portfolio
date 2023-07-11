import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ReactFitty } from "react-fitty"

export const Background = () => {
    const [width, setWidth] = useState(0)
    const pathName = usePathname()

    return (
        <div className='background fixed z-10 inset-0 opacity-50 text-base-content grid'>
            <ReactFitty className="relative [writing-mode:vertical-lr]" >
                {pathName}
            </ReactFitty>
        </div>
    )
}