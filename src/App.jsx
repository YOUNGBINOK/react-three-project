import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { useRef, useState } from "react";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";
import "./App.css";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} wireframe={true} />
    </mesh>
  );
};

const Tours = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({ position, args }) => {
  const ref = useRef();

  const { color, radius } = useControls({
    color: "lightblue",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
  });

  useFrame((state, delta, frame) => {
    // ref.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...args]} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={3} color={color} />
    </mesh>
  );
};

const Scene = () => {
  const directionalLightRef = useRef();

  const { lightColor, lightIntensity } = useControls({
    lightColor: "#ffffff",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1,
    },
  });

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight ref={directionalLightRef} position={[0, 1, 2]} intensity={lightIntensity} color={lightColor} />
      <OrbitControls />
      <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"green"} />

      <TorusKnot args={[0.1, 1000, 50, 5]} position={[0, 0, 0]} />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
