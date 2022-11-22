import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { Form, SubmitBtn, PostButton, Posting } from "./styles";
import { Title } from "../NoticeCarousel/styles";

function PostForm() {
  return (
    <Form>
      <Title style={{ marginBottom: "1%" }}>새 글 작성</Title>
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
  );
}

export default PostForm;
