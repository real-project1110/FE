import React from "react";
import { useRecoilState } from "recoil";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import { AllImg, BigImage, Image, ImageSlide, ImageWrap, StyledSlider } from "./styles";

function ImageModal() {
  const [detail, setDetail] = useRecoilState(PostDetailAtom);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <ImageWrap>
      <ImageSlide>
        <StyledSlider {...settings}>
          {detail?.postImg?.map((image) => (
            <BigImage key={image.postImg}>
              <img src={image.postImg} alt={image} />
            </BigImage>
          ))}
        </StyledSlider>
      </ImageSlide>
      <AllImg>
        {detail?.postImg?.map((image) => (
          <Image key={image.postImg}>
            <img src={image.postImg} alt={image} />
          </Image>
        ))}
      </AllImg>
    </ImageWrap>
  );
}

export default ImageModal;
