import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

const Stars = () => {
  return <mesh>Stars</mesh>;
};

const StarsCanvas = () => {
  return (
    <Canvas>
      <Stars />
    </Canvas>
  );
};

export default StarsCanvas;
