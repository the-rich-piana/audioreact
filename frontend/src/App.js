import axios from "axios";
import React, { useRef, useState, useLayoutEffect, useMemo } from "react";
import HomePage from './components/home';
import "./App.scss";
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'


  axios.get("/test").then((response) => {
   console.log(response)
  });

  let size = 5000;
  const tempObject = new THREE.Object3D()
  const tempColor = 'red'
  const color = new THREE.Color("rgb(255, 0, 0)");


const Boxes = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (

      <mesh
        {...props}
        ref={mesh}
        scale={active ? 2 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }


function ArrayBoxes() {
    const ref = useRef()
    useLayoutEffect(() => {
      let i = 0
      for (let x = 0; x < 50; x++)
        for (let y = 0; y < 50; y++)
          for (let z = 0; z < 50; z++) {
            const id = i++
            tempObject.position.set(10 - x, 10 - y, 10 - z)
            tempObject.updateMatrix()
            ref.current.setMatrixAt(id, tempObject.matrix)
          }
      ref.current.instanceMatrix.needsUpdate = true
    }, [])
  
    return (
      <instancedMesh ref={ref} args={[null, null, size]}>
        <boxBufferGeometry attach="geometry" args={[0.15, 0.15, 0.15]}>
          <instancedBufferAttribute attachObject={['attributes', 'color']} args={[color, 3]} />
        </boxBufferGeometry>
        <meshLambertMaterial attach="material" vertexColors={THREE.VertexColors} />
      </instancedMesh>
    )
  }
  


function App() {

  return (
    
    <>
      <div>Music Visualizer</div>
      <header className="App-header">
      </header>
      <Canvas camera={{ position: [1, 0.5, 10], fov: 100}} className='audiocanvas'>
        <ambientLight intensity={0.2}/>
        <pointLight position={[-10, 10, 0]} />
        <OrbitControls   />
        <ArrayBoxes/>
      </Canvas>

    </>
  );
}

export default App;
