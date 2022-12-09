import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: fixed;
  ${FlexCenterBox};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: 50px;
  margin-left: 320px;
  z-index: 10000;
`;

export const ImageWrap = styled(motion.div)`
  ${FlexColumnBox};
  position: relative;
  width: 100%;
  max-width: 1000px;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
  z-index: 9999;
`;

// export const BlurBackground = styled.div`
//   width: 50vw;
//   height: 50vw;
//   position: absolute;
//   border-radius: 15px;
//   overflow: hidden;
// `;

// export const Blur = styled.div`
//   position: absolute;
//   width: 50vw;
//   height: 50vw;
//   filter: blur(10px);
//   background: ${(props) => `url(${props.currentImage})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position-y: center;
//   background-color: white;
// `;

export const Header = styled.div`
  width: 100%;
  ${FlexAlignBox};
  justify-content: flex-end;
  padding: 1rem 2.1rem;
  position: absolute;
  z-index: 10000;
  span {
    ${FlexCenterBox};
    z-index: 10001;
    width: 25px;
    height: 25px;
    color: #ffffff;
    background-color: ${(props) => props.theme.color.green};
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
      svg {
        color: ${(props) => props.theme.color.white};
      }
    }
  }
`;

export const ImageSlide = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  width: 80%;
  height: 100%;
  .slick-prev:before {
    margin-left: -10px;
    color: black;
    font-size: 30px;
  }

  .slick-next:before {
    color: black;
    font-size: 30px;
  }
`;

export const BigImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    object-fit: scale-down;
    border-radius: 8px;
    transform: translate(-50%, -50%);
  }
`;
