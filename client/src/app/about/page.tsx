"use client"
import { motion } from "framer-motion";
import { Footer } from "../footer";
import { Header } from "../header";
import { IntroductionComponent } from "../introduction";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Background } from "../background";

export default function Page() {
    const pathName = usePathname()
    useEffect(() => {
        console.log("🚀 ~ file: page.tsx:11 ~ Page ~ pathName:", pathName)

    }, [])
    return (
        <>
            <motion.div className="fixed inset-0 content flex flex-col text-base-content z-0 justify-center">
                <Header />
                <IntroductionComponent />
                <Footer />
                <Background />
            </motion.div>
        </>
    )
}