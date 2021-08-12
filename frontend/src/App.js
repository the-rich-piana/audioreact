import "./App.scss";
import axios from "axios";
import React, { useRef, useState, useLayoutEffect, useMemo, Suspense} from "react";
import { useLoader, Canvas, useFrame  } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
//LOADER
import Headphones from '../src/components/Headphones.js'


//Axios call to backend-- listening for an express call with the same
axios.get("/about").then((response) => {
   console.log(response)
});


let size = 10000;
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
        <Suspense fallback={null}> 
          <Environment preset="sunset" background/>

          <ambientLight intensity={0.5}/>
          <pointLight position={[-10, 10, 0]} />
          <OrbitControls   />
          <ArrayBoxes/>
          <Headphones position={[10, 10, 0]}  />
        </Suspense>
      </Canvas>

    </>
  );
}

export default App;
