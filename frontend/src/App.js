import "./App.scss";
import axios from "axios";
import React, { useRef, useState, useLayoutEffect, useMemo, Suspense} from "react";
import { useLoader, Canvas, useFrame  } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
//LOADER
import Headphones from '../src/components/Headphones.js'
import { Plane } from "three";


//Axios call to backend-- listening for an express call with the same
axios.get("/about").then((response) => {
   console.log(response)
});


let size = 50000;
const tempObject = new THREE.Object3D()
const tempColor = 'red'
const color = new THREE.Color("rgb(255, 0, 0)");

function ArrayBoxes() {
    const ref = useRef()
    useLayoutEffect(() => {
      let i = 0
      for (let x = 0; x < 50; x++)
        for (let y = 0; y < 50; y++)
          for (let z = 0; z < 50; z++) {
            const id = i++
            tempObject.position.set(0 - x, 0 - y, 0 - z)
            tempObject.updateMatrix()
            ref.current.setMatrixAt(id, tempObject.matrix)
          }
      ref.current.instanceMatrix.needsUpdate = true
    }, [])
  
    return (
      <instancedMesh ref={ref} args={[null, null, size]}>
        <boxBufferGeometry attach="geometry" args={[.2, .2, .2]} >
          <instancedBufferAttribute attachObject={['attributes', 'color']} args={[color, 0]} />
        </boxBufferGeometry>
        <meshStandardMaterial attach="material"  metalness={0.9}/>
      </instancedMesh>
    )
}

function App() {
  return (
    <>
      <div className="title">Music Visualizer</div>

      <header className="App-header">
      </header>

      <Canvas camera={{ position: [1, 0.5, 10], fov: 80}} className='audiocanvas'>
        <Suspense fallback={null}> 
          <Environment preset="sunset" envintensity={0.0} background/>

          <ambientLight intensity={0.5}/>
          <pointLight position={[-100, 10, 0]} />
          <OrbitControls   />
          <ArrayBoxes/>
          <Headphones position={[10, 10, 0]}  />
          <Headphones position={[40, 10, 50]}  />
          <Headphones position={[20, 9, 120]}  />

        </Suspense>
      </Canvas>

    </>
  );
}

export default App;
