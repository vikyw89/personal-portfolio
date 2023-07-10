"use client"
import { AsciiRenderer, CameraControls, CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Model } from "./Casual"
import { Canvas } from "@react-three/fiber"

export const AnimatedMe = () => {
    // position={[0, -1.5, 3]} rotation={[0.2,-0.5,0]}
    return (
        <div className="fixed inset-0 h-full aspect-auto overflow-hidden z-0">
            <Canvas className="">
                <CameraControls />
                <CubeCamera castShadow={true} position={[0.3, -1.7, 3]} rotation={[0.5,0.7,0]} >
                    {(texture) => (
                        <Model />
                    )}
                </CubeCamera>
                <Environment preset="lobby"/>
            </Canvas>
        </div>
    )
}