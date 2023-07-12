"use client"
import { motion } from "framer-motion";
import { Footer } from "../footer";
import { Header } from "../header";
import { IntroductionComponent } from "./introduction";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Background } from "../background";

export default function Page() {
    return (
        <>
            <motion.div className="fixed inset-0 content grid text-base-content z-0">
                <Header />
                <IntroductionComponent />
                {/* <Footer /> */}
                <Background />
            </motion.div>
        </>
    )
}