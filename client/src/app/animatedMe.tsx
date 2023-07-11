"use client"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model7"

export const AnimatedMe = () => {

    return (
        <div className="flex items-center justify-center h-[calc(100vh/2)] absolute aspect-auto object-contain">
            <Canvas>
                <Model/>
                <Environment preset="lobby"  />
            </Canvas>
        </div>
    )
}