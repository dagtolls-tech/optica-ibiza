"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Glasses() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.7;
    group.current.rotation.x = Math.sin(Date.now() / 1400) * 0.12;
  });

  const frame = (
    <meshStandardMaterial
      color="#0c0c0c"
      metalness={0.95}
      roughness={0.18}
      envMapIntensity={1.2}
    />
  );
  const glass = (
    <meshPhysicalMaterial
      color="#1b2a3a"
      metalness={0.1}
      roughness={0.05}
      transmission={0.9}
      transparent
      opacity={0.4}
    />
  );

  return (
    <group ref={group} rotation={[0.1, 0, 0]} scale={1.15}>
      {/* Left lens ring + glass */}
      <mesh position={[-0.78, 0, 0]}>
        <torusGeometry args={[0.62, 0.07, 24, 64]} />
        {frame}
      </mesh>
      <mesh position={[-0.78, 0, 0]}>
        <circleGeometry args={[0.6, 48]} />
        {glass}
      </mesh>

      {/* Right lens ring + glass */}
      <mesh position={[0.78, 0, 0]}>
        <torusGeometry args={[0.62, 0.07, 24, 64]} />
        {frame}
      </mesh>
      <mesh position={[0.78, 0, 0]}>
        <circleGeometry args={[0.6, 48]} />
        {glass}
      </mesh>

      {/* Bridge */}
      <mesh position={[0, 0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.42, 16]} />
        {frame}
      </mesh>

      {/* Temples (arms) */}
      <mesh position={[-1.45, 0.05, -0.55]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.07, 0.07, 1.25]} />
        {frame}
      </mesh>
      <mesh position={[1.45, 0.05, -0.55]} rotation={[0, -0.5, 0]}>
        <boxGeometry args={[0.07, 0.07, 1.25]} />
        {frame}
      </mesh>
    </group>
  );
}

export default function GlassesScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* Low base fill so the frame isn't pure black */}
      <ambientLight intensity={0.12} />
      {/* Theatrical white key spotlight from top-front */}
      <spotLight
        position={[0, 5, 4]}
        angle={0.45}
        penumbra={1}
        intensity={120}
        distance={20}
        color="#ffffff"
      />
      {/* Cool rim light to carve the silhouette */}
      <spotLight
        position={[-4, 1, -2]}
        angle={0.6}
        penumbra={1}
        intensity={45}
        distance={20}
        color="#9fc4ff"
      />
      {/* Warm side kick */}
      <pointLight position={[4, -1, 1]} intensity={18} color="#fff1e6" />
      <Glasses />
    </Canvas>
  );
}
