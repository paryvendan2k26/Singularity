// src/components/ModelViewer.js

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningCube() {
  const meshRef = useRef();

  // This hook runs on every frame, creating the animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}> {/* You can adjust the 'scale' to make the cube bigger or smaller */}
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

const ModelViewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 5]} />
      <SpinningCube />
    </Canvas>
  );
};

export default ModelViewer;