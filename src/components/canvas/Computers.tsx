import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
extend({ OrbitControls, Preload, useGLTF });
import * as THREE from 'three';
import Loader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf', true);
  return (
    <mesh scale={0.9}>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
        scale={0.75}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <spotLight
        position={[-8, 10, 4]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 6, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
