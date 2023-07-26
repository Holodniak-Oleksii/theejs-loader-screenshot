import { Bounds, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Vector3 } from "three";
import { GetImage, LoadGLTF, RefreshScene, SpinLoader } from "./components";

const Scene = (props) => {
  const { url, image, setImage } = props;

  return (
    <Canvas
      onScroll={(e) => e.stopPropagation()}
      style={{ pointerEvents: "visible" }}
      shadows
    >
      <OrbitControls makeDefault position={new Vector3(0, 0, 100)} />
      <ambientLight intensity={1.3} />
      <directionalLight intensity={0.4} castShadow />
      <Suspense fallback={<SpinLoader />}>
        <Bounds fit clip damping={6} margin={1.2}>
          <Center center>
            <LoadGLTF url={url} />
            <RefreshScene url={url} />
            <GetImage image={image} setImage={setImage} />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
