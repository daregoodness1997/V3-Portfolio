import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  OrbitControls,
  Float,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

interface BallProps {
  textureUrl: string;
}

const Ball: React.FC<BallProps> = ({ textureUrl }) => {
  const [decalTexture] = useTexture([textureUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          flatShading
          polygonOffsetFactor={-5}
        />
        <Decal
          map={decalTexture}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  iconTextureUrl?: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ iconTextureUrl }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<Loader />}>
        <Ball textureUrl={iconTextureUrl} />
      </Suspense>
    </Canvas>
  );
};

export default React.memo(BallCanvas);
