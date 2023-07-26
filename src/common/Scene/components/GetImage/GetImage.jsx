import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const GetImage = (props) => {
  const { image, setImage } = props;
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    if (image.click) {
      gl.render(scene, camera);
      let image = gl.domElement.toDataURL("image/png", 1);
      setImage({ click: false, image: image });
    }
  }, [image]);

  return null;
};
export default GetImage;
