import React from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from '../Loader';

const Earth = () => {
  return <mesh></mesh>;
};

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
