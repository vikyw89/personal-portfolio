"use client"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model7"

export const AnimatedMe = () => {

    return (
        <div className="h-full w-full object-cover overflow-visible relative translate-x-11">
            <Canvas>
                <Model />
                <Environment preset="lobby" />
            </Canvas>
        </div>
    )
}