"use client";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function CardMesh({ front, back }: { front: string; back: string }) {
  const frontTexture = useLoader(TextureLoader, front);
  const backTexture = useLoader(TextureLoader, back);

  useFrame((state) => {
    if (state.mesh) {
      state.mesh.rotation.y += 0.01;
    }
  });

  return (
    <mesh>
      <boxGeometry args={[9.9264, 6.25, 0.1]} />
      <meshBasicMaterial attach="material-4" map={frontTexture} />
      <meshBasicMaterial attach="material-5" map={backTexture} />
      <meshBasicMaterial attach="material-0" color="#25124a" />
      <meshBasicMaterial attach="material-1" color="#25124a" />
      <meshBasicMaterial attach="material-2" color="#25124a" />
      <meshBasicMaterial attach="material-3" color="#25124a" />
    </mesh>
  );
}

export default function ThreeDCard({ front, back }: { front: string; back: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CardMesh front={front} back={back} />
    </Canvas>
  );
} 