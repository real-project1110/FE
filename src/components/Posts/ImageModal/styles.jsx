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
  padding: 2rem;
`;
export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  align-items: center;
  h3 {
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    ${FlexCenterBox};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 18px;
      height: 18px;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
      svg {
        color: ${(props) => props.theme.gray};
      }
    }
  }
`;
export const Image = styled.div`
  & > img {
    width: 70px;
    height: 70px;
    margin-right: 2rem;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const AllImg = styled.div`
  width: 100%;
  margin-top: 10%;
  justify-content: center;
  display: flex;
`;

export const ImageSlide = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const StyledSlider = styled(Slider)`
  width: 80%;
  height: 500px;
  .slick-prev:before {
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
  margin-left: 31.3%;
  ${FlexCenterBox}
  & > img {
    position: absolute;
    top: 10%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
