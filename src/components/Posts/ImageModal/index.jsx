import React from "react";
// import { useState } from "react";
// import { useRecoilValue } from "recoil";
import CancelSvg from "../../../assets/svg/CancelSvg";
// import { PostDetailAtom } from "../../../recoil/groupAtoms";
import {
  BigImage,
  // Blur,
  // BlurBackground,
  Header,
  ImageSlide,
  ImageWrap,
  StyledSlider,
  Wrapper,
} from "./styles";

function ImageModal({ layoutId, setShowImage, detail }) {
  //const detail = useRecoilValue(PostDetailAtom);
  // const [currentImage, setCurrentImage] = useState(
  //   detail?.postImg?.map((x) => x.postImg)
  // );
  // console.log(currentImage[0]);
  // detail?.postImg?.map((x)=> x.postImg)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
      {/* <BlurBackground>
        <Blur currentImage={currentImage[0]} />
      
      </BlurBackground> */}
    </Wrapper>
  );
}

export default ImageModal;

const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.6)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};
