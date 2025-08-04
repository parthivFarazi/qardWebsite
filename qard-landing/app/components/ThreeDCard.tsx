"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

function CardMesh({ front, back, thickness = 0.5, autoRotate = true, autoRotateSpeed = 0.0005 }) {
  const mesh = useRef<any>();
  const [drag, setDrag] = useState(false);
  const [prev, setPrev] = useState<[number, number] | null>(null);

  // Load textures for front/back
  const frontTexture = useLoader(TextureLoader, front);
  const backTexture = useLoader(TextureLoader, back);

  // Auto-rotate animation
  useFrame((_, delta) => {
    if (autoRotate && !drag && mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  // Mouse drag to rotate
  const handlePointerDown = (e: any) => {
    setDrag(true);
    setPrev([e.clientX, e.clientY]);
  };
  const handlePointerUp = () => setDrag(false);
  const handlePointerMove = (e: any) => {
    if (drag && mesh.current && prev) {
      mesh.current.rotation.y += (e.clientX - prev[0]) * 0.01;
      mesh.current.rotation.x += (e.clientY - prev[1]) * 0.01;
      setPrev([e.clientX, e.clientY]);
    }
  };

  return (
    <group
      ref={mesh}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerMove={handlePointerMove}
      cursor={drag ? "grabbing" : "grab"}
    >
      {/* Credit card is a thin box: width=3.375, height=2.125, thickness */}
      <mesh>
        <boxGeometry args={[9.9264, 6.25, 0.1]} />
        {/* 0=right, 1=left, 2=top, 3=bottom, 4=front, 5=back */}
        <meshStandardMaterial attach="material-4" map={frontTexture} />
        <meshStandardMaterial attach="material-5" map={backTexture} />
        {/* Sides: deep purple or dark metallic */}
        <meshStandardMaterial attach="material-0" color="#25124a" />
        <meshStandardMaterial attach="material-1" color="#25124a" />
        <meshStandardMaterial attach="material-2" color="#25124a" />
        <meshStandardMaterial attach="material-3" color="#25124a" />
      </mesh>
    </group>
  );
}

export default function ThreeDCard(props: any) {
  return (
    <Canvas camera={{ position: [0, 0, 19], fov: 25 }} style={{ width: "100%", height: "100%" }}>
      {/* Soft ambient and spotlights for metallic pop */}
      <ambientLight intensity={0.85} />
      <directionalLight position={[2, 6, 3]} intensity={0.85} color="#e9d6ff" />
      <pointLight position={[-6, 4, 5]} intensity={0.12} color="#9867e9" />
      <CardMesh {...props} />
      {/* Allow orbit controls for testing */}
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}
