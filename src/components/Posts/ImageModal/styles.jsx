import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: fixed;
  ${FlexCenterBox};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000;
`;

export const ImageWrap = styled(motion.div)`
  ${FlexColumnBox};
  width: 100%;
  max-width: 1000px;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
  z-index: 9999;
`;

export const BlurBackground = styled.div`
  width: 70vw;
  height: 70vh;
  position: absolute;
  border-radius: 15px;
  overflow: hidden;
`

export const Blur = styled.div`
  position: absolute;
  width: 70vw;
  height: 70vh;
  filter: blur(10px);
  background: ${props => `url(${props.currentImage})`};
  background-repeat : no-repeat;
  background-size : cover;
  background-position-y: center;
  background-color: #ffffff;
`

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  align-items: center;
  padding: 1rem 1rem;
  span {
    ${FlexCenterBox};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10001;
    background-color: ${props => props.theme.color.green};
    color: #ffffff;
    svg {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
      color: #000000;
      svg {
        color: ${(props) => props.theme.gray};
      }
    }
  }
`;

export const ImageSlide = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const StyledSlider = styled(Slider)`
  width: 80%;
  height: 100%;
  .slick-prev:before {
    color: black;
    font-size: 30px;
    margin-left: -10px;
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
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    object-fit: cover;
    border-radius: 8px;
  }
`;
