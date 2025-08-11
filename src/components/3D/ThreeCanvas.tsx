import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingIcons from "./FloatingIcons";
import ParticleSystem from "./ParticleSystem";

export default function ThreeCanvas({ enabled = true, intensity = 1 }: { enabled?: boolean; intensity?: number }) {
  if (!enabled) return null;
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingIcons intensity={intensity} />
        <ParticleSystem />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
