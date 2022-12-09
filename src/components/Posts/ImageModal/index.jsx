import React from "react";
import { useRecoilValue } from "recoil";
import CancelSvg from "../../../assets/svg/CancelSvg";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import {
  AllImg,
  BigImage,
  Header,
  Image,
  ImageSlide,
  ImageWrap,
  StyledSlider,
  Wrapper,
} from "./styles";

function ImageModal({ layoutId, setShowImage }) {
  const detail = useRecoilValue(PostDetailAtom);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Wrapper
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <ImageWrap layoutId={layoutId} onClick={(e) => e.stopPropagation()}>
        <Header>
          <div />
          <div />
          <span onClick={() => setShowImage(null)}>
            <CancelSvg />
          </span>
        </Header>
        <ImageSlide>
          <StyledSlider {...settings}>
            {detail?.postImg?.map((image) => (
              <BigImage key={image.postImg}>
                <img src={image.postImg} alt={image} />
              </BigImage>
            ))}
          </StyledSlider>
        </ImageSlide>
      </ImageWrap>
    </Wrapper>
  );
}

export default ImageModal;

const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.6)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};
