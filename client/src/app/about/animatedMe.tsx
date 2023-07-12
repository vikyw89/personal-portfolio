"use client"
import { Environment, OrbitControls, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model7"
import { Suspense } from "react"

export const AnimatedMe = () => {
    const { active, progress, errors, item, loaded, total } = useProgress()

    return (
        <div className="h-full w-full object-cover overflow-visible relative translate-x-11">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="lobby" />
                </Suspense>
            </Canvas>
        </div>
    )
}