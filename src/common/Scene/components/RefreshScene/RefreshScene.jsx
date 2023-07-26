import { useBounds } from "@react-three/drei";
import { useEffect } from "react";

const RefreshScene = (props) => {
  const { url } = props;
  const bounds = useBounds();
  useEffect(() => {
    bounds.refresh();
    bounds.clip();
    bounds.fit();
  }, [url]);
  return null;
};
export default RefreshScene;
