/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 Model7.glb -T
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export function Model(props:any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Model7-transformed.glb') as any
  const { actions } = useAnimations(animations, group) as any
  
  useEffect(()=>{
    actions['IdleV4.2(maya_head)'].play()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
        </group>
        <PerspectiveCamera name="Camera" makeDefault={true} far={100} near={0.1} fov={22.895} position={[-1.099, 1.025, 4.742]} rotation={[-0.026, -0.232, -0.006]} />
        <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
        <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
        <skinnedMesh name="avaturn_hair_1" geometry={nodes.avaturn_hair_1.geometry} material={materials.avaturn_hair_1_material} skeleton={nodes.avaturn_hair_1.skeleton} />
        <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
        <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/Model7-transformed.glb')
