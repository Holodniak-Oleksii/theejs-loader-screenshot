import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 6;
`;

export const Progress = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 7;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 10px;
`;

export const Spinner = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #676767 #0000;
  animation: spinner-animation 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #f24c3d #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }

  @keyframes spinner-animation {
    100% {
      transform: rotate(1turn);
    }
  }
`;
