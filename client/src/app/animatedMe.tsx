"use client"
import { AsciiRenderer, CameraControls, CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Model } from "./Casual"
import { Canvas } from "@react-three/fiber"

export const AnimatedMe = () => {
    // position={[0, -1.5, 3]} rotation={[0.2,-0.5,0]}
    return (
        <div className="fixed inset-0 right-[200] bg-base-200 h-full aspect-auto overflow-hidden">
            <Canvas className="-translate-y-60 translate-x-16">
                {/* <CameraControls /> */}
                <CubeCamera castShadow={true} position={[0, -1.7, 2]} rotation={[0.2,0.5,0]}>
                    {(texture) => (
                        <Model />
                    )}
                </CubeCamera>
                <Environment preset="lobby" background={false}/>
                {/* <AsciiRenderer bgColor="transparent"/> */}
            </Canvas>
        </div>
    )
}