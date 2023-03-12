//@ts-ignore
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
extend({ OrbitControls, Preload, useGLTF });
import * as THREE from 'three';
import type { Mesh } from 'three';

import CanvasLoader from '../Loader';

const Computers = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<Mesh>(null!);

  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh {...props} ref={mesh} scale={0.9}>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
        scale={0.75}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const control = useRef(null!);
  const canvas = useRef(null!);

  return (
    <Canvas
      ref={canvas}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={control}
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
