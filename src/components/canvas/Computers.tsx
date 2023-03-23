import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
extend({ OrbitControls, Preload, useGLTF });
import * as THREE from 'three';
import Loader from '../Loader';

interface Props {
  isMobile: boolean;
}

const Computers: React.FC<Props> = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf', true);

  return (
    <mesh scale={0.9}>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
        scale={isMobile ? 0.7 : 0.75}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <spotLight
        position={[-8, 10, 4]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={isMobile ? 0.75 : 1} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = e => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 6, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
