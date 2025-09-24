// ModelViewer.js - Transparent Background Version
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function RobotModel() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} scale={0.8}>
      {/* Robot Head */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#4A90E2"
          metalness={0.7}
          roughness={0.3}
          emissive="#1a365d"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Robot Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 0.8]} />
        <meshStandardMaterial
          color="#2E5BBA"
          metalness={0.8}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Robot Arms */}
      <mesh position={[-1.2, 0.5, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="#4A90E2" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, 0.5, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="#4A90E2" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Robot Legs */}
      <mesh position={[-0.4, -1.5, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#2E5BBA" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.4, -1.5, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#2E5BBA" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Robot Eyes - Glowing */}
      <mesh position={[-0.2, 1.6, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[0.2, 1.6, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial
          color="#00BFFF"
          emissive="#00BFFF"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF4500"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function GLTFModel() {
  const { scene } = useGLTF("/models/scene.gltf");
  const modelRef = useRef();

  useEffect(() => {
    if (scene) {
      // Calculate the bounding box of the model
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      // Scale the model to be larger since it's the main attraction
      const maxSize = 6; // Increased size for prominence
      const scale = maxSize / size;

      scene.scale.setScalar(scale);
      scene.position.copy(center).multiplyScalar(-scale);
      scene.position.y -= 0.5;

      console.log("Model loaded and scaled:", { originalSize: size, scale, center });
    }
  }, [scene]);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // Slow auto-rotation
      modelRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1; // Floating effect
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

function Model() {
  return (
    <Suspense fallback={<RobotModel />}>
      <GLTFModel />
    </Suspense>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 1000 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true, // Enable transparency
          powerPreference: "high-performance",
        }}
      >
        {/* Dramatic lighting for the main attraction */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          color="#ffffff"
        />
        <pointLight position={[-8, 8, -8]} intensity={0.6} color="#4A90E2" />
        <pointLight position={[8, -8, 8]} intensity={0.6} color="#00BFFF" />
        <pointLight position={[0, -10, 0]} intensity={0.3} color="#8B5CF6" />

        <Model />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          maxDistance={15}
          minDistance={4}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 8}
        />
      </Canvas>
    </div>
  );
}
