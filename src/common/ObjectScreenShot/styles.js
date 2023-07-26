import styled from "styled-components";

export const OBJContainer = styled.div`
  width: 50%;
  margin: auto;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #318cfe;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  flex-direction: column;
  gap: 8px;
  h5 {
    color: #318cfe;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    text-align: center;
  }
  div {
    display: flex;
    gap: 6px;
  }
`;

export const Wrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 700px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 0;
  outline: 0;
`;
export const Flex = styled.div`
  display: flex;
  width: 140px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin: 20px 0;
  input {
    position: absolute;
    opacity: 0;
    z-index: -999;
  }
`;

export const Upload = styled.label`
  gap: 4px;
  width: 140px;
  text-align: center;
  padding: 8px 20px;
  border-radius: 100px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(164, 55, 219, 1) 0%,
    rgba(32, 129, 226, 1) 100%
  );
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  @media screen and (min-width: 1024px) {
    transition: all 0.4s ease-in;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(178, 93, 221, 1) 0%,
        rgba(62, 146, 231, 1) 100%
      );
    }
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    rgba(164, 55, 219, 1) 0%,
    rgba(32, 129, 226, 1) 100%
  );
  color: #fff;

  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  &:disabled {
    opacity: 0.7;
  }
  @media screen and (min-width: 1024px) {
    transition: all 0.4s ease-in;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(178, 93, 221, 1) 0%,
        rgba(62, 146, 231, 1) 100%
      );
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
`;
