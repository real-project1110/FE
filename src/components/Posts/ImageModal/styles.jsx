import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const ImageWrap = styled.div`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 9999;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Image = styled.div`
  & > img {
    width: 70px;
    height: 70px;
    margin-right: 2rem;
    border-radius: 8px;
    object-fit: cover;
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
