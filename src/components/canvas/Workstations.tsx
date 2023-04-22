import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
extend({ OrbitControls, Preload, useGLTF });
import Loader from '../Loader';

export interface Props {
  isMobile: boolean;
}

const Workstations: React.FC<Props> = ({ isMobile }) => {
  const workstation = useGLTF('./weathered/scene.gltf', true);

  useThree(({ camera }) => {
    console.log('camera position', camera.position);
    console.log('camera fov', camera);
  });

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
      <primitive object={workstation.scene} scale={isMobile ? 1.4 : 0.4} />
    </mesh>
  );
};

const WorkstationsCanvas = () => {
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
      camera={{
        position: isMobile
          ? [18, 12, -40]
          : [5.5693564790836785, 18.73091805771304, 4.704782367350349],
        fov: 56,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Workstations isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default WorkstationsCanvas;
