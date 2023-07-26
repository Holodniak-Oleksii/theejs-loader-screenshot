import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadGLTF = (props) => {
  const { url } = props;
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
};

export default LoadGLTF;
