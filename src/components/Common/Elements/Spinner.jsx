import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FlexCenterBox } from "../../../shared/Styles/flex";
const Spinner = () => {
  return (
    <Wrapper
      variants={spinnerAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween" }}
    >
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          fill="#dedede"
        />
        <path
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          className="spinner_z9k8"
          fill="#b8b8b8"
        />
      </Svg>
    </Wrapper>
  );
};

const spinnerAni = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default Spinner;
const rotateAni = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;
const Wrapper = styled(motion.div)`
  ${FlexCenterBox}
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
`;

const Svg = styled.svg`
  width: 3rem;
  height: 3rem;
  z-index: 100;
  color: white;
  animation: ${rotateAni} 1.7s linear infinite;
`;
