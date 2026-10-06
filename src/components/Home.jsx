import React from "react";
import { Canvas } from "@react-three/fiber";

export const Home = () => {
  return (
    <div id="canvas-container">
      {/* Canvas sets up a Scene and a Camera */}
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
};
