"use client"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model7"

export const AnimatedMe = () => {

    return (
        <div className="h-[50vh] aspect-auto">
            <Canvas className="object-scale-down">
                <Model/>
                <Environment preset="lobby"  />
            </Canvas>
        </div>
    )
}