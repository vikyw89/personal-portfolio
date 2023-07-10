"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model7"

export const AnimatedMe = () => {

    return (
        <div className="overflow-hidden grid items-center justify-center h-[calc(100vh/2)] aspect-auto absolute">
            <Canvas>
                <Model/>
                <Environment preset="lobby"  />
            </Canvas>
        </div>
    )
}