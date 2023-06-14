import { motion } from "framer-motion"
import Image from "next/image"

export const ProjectCardContainer = () => {
    return (
        <div className="grid grid-cols-2 overflow-y-scroll overflow-x-hidden">
            <motion.div className="aspect-square"
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
            >
                <Image
                    alt={"card"}
                    src={"../next.svg"}
                    width={300}
                    height={300}
                />
            </motion.div>
        </div>
    )
}