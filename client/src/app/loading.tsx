"use client"

import { motion } from "framer-motion"

const IsLoading = () => {
    return (
        <motion.div className="fixed bg-black inset-0"
            initial={{
                x:-1000
            }}
            animate={{
                x:0
            }}
            exit={{
                x:-1000
            }}
        >

        </motion.div>
    )
}

export default IsLoading