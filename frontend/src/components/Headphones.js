import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'




export default function Headphones(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[5, 5, 5]}>
            <mesh
              geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry}
            >
                <meshStandardMaterial
                 metalness={.6} 
                 roughness={.1}
                 color={'orange'}
                 emissive={'red'}
                 emissiveIntensity={1.0}
                />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/scene.gltf')