import { Html, useProgress } from "@react-three/drei";
import React, { useEffect } from "react";
import { Container, Progress, Spinner } from "./styles";

const SpinLoader = (props) => {
  const { setProgress } = props;
  const { progress, active } = useProgress();

  useEffect(() => {
    if (typeof setProgress === "function") {
      setProgress(!active);
    }
  }, [active]);

  return (
    <Html center zIndexRange={9}>
      <Container>
        <Progress>{progress.toFixed(0)}</Progress>
        <Spinner />
      </Container>
    </Html>
  );
};

export default SpinLoader;
