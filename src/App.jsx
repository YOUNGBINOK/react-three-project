import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, CameraControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import { House } from "./component/House";
import "./App.css";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Environment files="/images/studio_country_hall_4k.hdr" background backgroundBlurriness={0.5} />
      <House />
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
