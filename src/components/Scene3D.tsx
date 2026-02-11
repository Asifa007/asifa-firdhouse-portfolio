import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ wireframe: true, color: "#06d6f0", transparent: true, opacity: 0.2 }),
    []
  );
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.2, 1), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <FloatingIcosahedron />
      </Canvas>
    </div>
  );
};

export default Scene3D;
