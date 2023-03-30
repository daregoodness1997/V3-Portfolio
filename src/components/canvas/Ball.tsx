import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  OrbitControls,
  Float,
  Preload,
  useTexture,
} from '@react-three/drei';

const Ball = () => {
  return <div>Ball</div>;
};

interface BallCanvasProps {
  icon: React.ComponentType;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return <>Ball Canvas</>;
};

export default BallCanvas;
