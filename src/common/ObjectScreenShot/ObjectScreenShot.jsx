import React, { useState } from "react";
import Scene from "./../Scene/Scene";
import {
  Button,
  Choose,
  Container,
  Flex,
  Image,
  OBJContainer,
  Upload,
  Wrapper,
} from "./styles";

const ObjectScreenShot = () => {
  const [file, setFile] = useState({ url: null, file: null, send: false });
  const [image, setImage] = useState({
    image: null,
    click: false,
    send: false,
  });

  const handlerClick = () => {
    setImage((prev) => ({ ...prev, click: true, send: true }));
  };

  const handlerDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = image.image;
    downloadLink.download = "download-screenshot";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handlerChange = (e) => {
    let ext = e.target.value.match(/\.([^\.]+)$/)[1];
    if (ext === "glb") {
      if (e.target.files[0]) {
        setFile({
          url: URL.createObjectURL(e.target.files[0]),
          file: e.target.files[0],
          send: true,
        });
      }
    } else {
      alert("This file format is not supported");
    }
  };

  return (
    <Container>
      <Wrapper>
        <OBJContainer haveError={!file.file && file.send}>
          {file.url ? (
            <Scene url={file.url} image={image} setImage={setImage} />
          ) : (
            <Choose>
              <h5>Choose file</h5>
              <div>
                <Button>.glb</Button>
              </div>
            </Choose>
          )}
        </OBJContainer>
        <OBJContainer haveError={!image.image && image.send}>
          {image.image ? (
            <Image src={image.image} alt='Photo Image' />
          ) : (
            <Choose>
              <h5>Download the 3D model and take a photo for preview</h5>
            </Choose>
          )}
        </OBJContainer>
      </Wrapper>
      <Flex>
        <Button disabled={!file.file} type={"button"} onClick={handlerClick}>
          Take a photo
        </Button>
        <Upload htmlFor='file'>{!file.file ? "Upload" : "Replace"}</Upload>
        <input
          id='file'
          type='file'
          accept='.glb'
          onChange={handlerChange}
          value={file?.file?.filename}
          name='file3D'
        />
        <Button
          disabled={!image.image}
          type={"button"}
          onClick={handlerDownload}
        >
          Download
        </Button>
      </Flex>
    </Container>
  );
};

export default ObjectScreenShot;
