import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { faXmark, faImage } from "@fortawesome/free-solid-svg-icons";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { addPost } from "../../../apis/postApi";
import { queryClient } from "../../..";
import {
  SubmitBtn,
  PostButton,
  Posting,
  Wrapper,
  EditorWrapper,
  Carousel,
  Editor,
  PhotoLabel,
  Preview,
  PreviewImg,
  ImgInput,
  PreviewBox,
  Delete,
  PostInput,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostForm() {
  const { groupId } = useParams();
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { mutate: addMutate } = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries(["freePosts", groupId]),
  });
  const [isHover, setIsHover] = useState(0);
  const [showImages, setShowImages] = useState([]);
  const [Image, setImage] = useState(null);
  const [textValue, setTextValue] = useState();

  console.log("IMAGE", Image);

  // 이미지 상대경로 저장 (미리보기)
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      alert("이미지는 5장까지 첨부가능합니다.");
      imageUrlLists = imageUrlLists.slice(0, 5);
    }
    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  // Modal Close
  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsForm(false);
  };

  // mouseOut시 textarea의 value를 textValue에 저장
  const onMouseOut = (e) => {
    setTextValue(e.currentTarget.value);
  };

  // input에 들어간 img state 저장
  const onLoadImg = (e) => {
    setImage(e.target.files);
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(Image);
    const postData = {
      groupId,
      body: {
        content: textValue,
        image: Image,
      },
    };
    addMutate(postData);
  };

  return (
    <Wrapper onClick={onCloseModal}>
      <EditorWrapper onClick={(e) => e.stopPropagation()}>
        <Editor onSubmit={Submit}>
          <Carousel>
            <PhotoLabel htmlFor="input-file" onChange={handleAddImages}>
              <FontAwesomeIcon icon={faImage} />
              <ImgInput
                type="file"
                id="input-file"
                multiple
                onChange={onLoadImg}
              />
            </PhotoLabel>
            <PreviewBox>
              {showImages.map((image, id) => (
                <Preview
                  key={id}
                  onMouseOver={() => setIsHover(1)}
                  onMouseOut={() => setIsHover(0)}
                >
                  <PreviewImg src={image} alt={`${image}-${id}`} />
                  {isHover ? (
                    <Delete onClick={() => handleDeleteImage(id)}>
                      <FontAwesomeIcon icon={faXmark} />
                    </Delete>
                  ) : null}
                </Preview>
              ))}
            </PreviewBox>
            <PostInput onMouseOut={onMouseOut} />
          </Carousel>
          <SubmitBtn>
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
