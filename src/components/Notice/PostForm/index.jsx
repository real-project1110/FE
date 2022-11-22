import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { Form, SubmitBtn, PostButton, Posting, Wrapper } from "./styles";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { useSetRecoilState } from "recoil";

function PostForm() {
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsForm(false);
  };
  return (
    <Wrapper onClick={onCloseModal}>
      <Form onClick={(e) => e.stopPropagation()}>
        <Editor
          placeholder="공유하고 싶은 소식이 있나요? 사소한 이야기라도 좋아요:)"
          previewStyle="vertical"
          height="300px"
          initialEditType="wysiwyg"
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike", "image", "link"],
          ]}
        />
        <SubmitBtn>
          <Posting>게시</Posting>
          <PostButton>
            <PostButtonSvg />
          </PostButton>
        </SubmitBtn>
      </Form>
    </Wrapper>
  );
}

export default PostForm;
