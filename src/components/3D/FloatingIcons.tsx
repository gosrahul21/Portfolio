import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingIcons({ intensity = 1 }: { intensity?: number }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / (4 / Math.max(intensity, 0.1))) / 8;
      group.current.position.y = Math.sin(t / (2 / Math.max(intensity, 0.1))) / 4;
    }
  });

  const speed = 1.5 * intensity;
  const rot1 = 1 * intensity;
  const rot2 = 1.5 * intensity;
  const rot3 = 2 * intensity;
  const float1 = 2 * intensity;
  const float2 = 1.5 * intensity;
  const float3 = 2.5 * intensity;

  return (
    <group ref={group}>
      <Float speed={speed} rotationIntensity={rot1} floatIntensity={float1}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
      <Float speed={speed * 1.2} rotationIntensity={rot2} floatIntensity={float2}>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
      <Float speed={speed * 0.8} rotationIntensity={rot3} floatIntensity={float3}>
        <mesh position={[0, 1, 0]}>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}
