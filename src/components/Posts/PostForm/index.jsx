import React, { useState, useEffect, useCallback } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { faXmark, faImage } from "@fortawesome/free-solid-svg-icons";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { editPostAtom } from "../../../shared/Atoms/groupAtoms";
import { addPost, editPost } from "../../../apis/postApi";
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
import { handleImgError } from "../../../utils/handleImgError";

function PostForm() {
  const { groupId } = useParams();
  const showForm = useSetRecoilState(PostFormModalAtom);
  const [editPostData, setEditPostData] = useRecoilState(editPostAtom);

  const { mutate: addPostFn } = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries(["freePosts", groupId]),
  });
  const { mutate: editPostFn } = useMutation(editPost, {
    onSuccess: () => queryClient.invalidateQueries(["freePosts", groupId]),
  });
  const [isHover, setIsHover] = useState(0);
  const [imagePreview, setImagePreview] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [textValue, setTextValue] = useState();
  const [editMode, setEditMode] = useState(false);

  // 이미지 저장 및 이미지 프리뷰 저장
  const handleAddImages = useCallback(
    (event) => {
      const imageLists = event.target.files;
      setImageFiles((prev) => [...prev, ...Array.from(imageLists)]);
      for (let i = 0; i < imageLists.length; i++) {
        const blobImage = URL.createObjectURL(imageLists[i]);
        setImagePreview((prev) => [...prev, blobImage]);
      }
      if (imagePreview.length > 5) {
        alert("이미지는 5장까지 첨부가능합니다.");
        setImagePreview((prev) => prev.slice(0, 5));
      }
    },
    [imagePreview]
  );

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = useCallback((idx) => {
    setImagePreview((prev) => prev.filter((_, index) => index !== idx));
    setImageFiles((prev) => prev.filter((_, index) => index !== idx));
  }, []);

  // Modal Close
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      showForm(false);
      setEditPostData({});
    },
    [setEditPostData, showForm]
  );

  // 추가 혹은 수정 요청
  const Submit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("image", imageFiles[i]);
      }
      formData.append("content", textValue);
      const postData = {
        groupId,
        body: formData,
      };
      // 수정 모드일 때 코드
      if (editMode) {
        postData.postId = editPostData.postId;
        setEditMode(false);
        setEditPostData({});
        editPostFn(postData);
      } else {
        // 일반 게시글 추가 일 때 코드
        addPostFn(postData);
      }
      showForm(false);
    },
    [
      addPostFn,
      editMode,
      groupId,
      imageFiles,
      setEditPostData,
      showForm,
      textValue,
      editPostFn,
      editPostData,
    ]
  );

  // text가 변경될 때 onChange 함수
  const onChangeText = useCallback((e) => {
    setTextValue(e.target.value);
  }, []);

  // 마운트 되었을 때 수정 게시글의 데이터가 있다면 값을 state에 넣어준다.
  useEffect(() => {
    if (Object.entries(editPostData).length) {
      setTextValue(editPostData.content);
      setImageFiles(editPostData.postImg?.map((img) => img.postImg));
      setImagePreview(editPostData.postImg?.map((img) => img.postImg));
      setEditMode(true);
    }
  }, [editPostData, setEditPostData, setEditMode, editMode]);

  return (
    <Wrapper onClick={onCloseModal}>
      <EditorWrapper onClick={(e) => e.stopPropagation()}>
        <Editor onSubmit={Submit}>
          <Carousel>
            <PhotoLabel htmlFor="input-file">
              <FontAwesomeIcon icon={faImage} />
              <ImgInput
                type="file"
                id="input-file"
                multiple
                accept="image/*"
                onChange={handleAddImages}
              />
            </PhotoLabel>
            <PreviewBox>
              {imagePreview?.map((image, idx) => (
                <Preview
                  key={idx}
                  onMouseOver={() => setIsHover(1)}
                  onMouseOut={() => setIsHover(0)}
                >
                  <PreviewImg
                    src={image}
                    alt={`${image}-${idx}`}
                    onError={handleImgError}
                  />
                  {isHover ? (
                    <Delete
                      onClick={(event) => {
                        event.preventDefault();
                        handleDeleteImage(idx);
                      }}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </Delete>
                  ) : null}
                </Preview>
              ))}
            </PreviewBox>
            <PostInput onChange={onChangeText} value={textValue} />
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
