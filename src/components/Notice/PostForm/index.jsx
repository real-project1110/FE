import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { addPost } from "../../../apis/postApi";
import { queryClient } from "../../..";
import { SubmitBtn, PostButton, Posting, Wrapper, EditorWrapper, Carousel, Editor, PhotoLabel, Preview, PreviewImg, ImgInput, PreviewBox } from "./styles";

function PostForm() {
  const { groupId } = useParams();
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { mutate: addMutate } = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries(["freePosts", groupId]),
  });

  const [showImages, setShowImages] = useState([]);
  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
  // setImages((prev) => [...prev, blob]);
  //             const fileBlob = URL.createObjectURL(blob);

  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsForm(false);
  };

  const Submit = () => {
    // const postData = {
    //   groupId,
    //   body: {
    //     content: content,
    //     image: images[0],
    //   },
    // };
    // addMutate(postData);
  };

  // const settings = {
  //   arrows: true,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <Wrapper onClick={onCloseModal}>
      <EditorWrapper onClick={(e) => e.stopPropagation()}>
        <Editor>
          <Carousel>
            <PhotoLabel htmlFor="input-file" onChange={handleAddImages}>
              이미지 업로드
              <ImgInput type="file" id="input-file" multiple />
            </PhotoLabel>
            <PreviewBox>
              {showImages.map((image, id) => (
                <Preview key={id}>
                  <PreviewImg src={image} alt={`${image}-${id}`} />
                  <button onClick={() => handleDeleteImage(id)}>삭제</button>
                </Preview>
              ))}
            </PreviewBox>
          </Carousel>
          <SubmitBtn onClick={Submit}>
            <Posting>게시</Posting>
            <PostButton>
              <PostButtonSvg />
            </PostButton>
          </SubmitBtn>
        </Editor>
      </EditorWrapper>
    </Wrapper>
  );
}

export default PostForm;
