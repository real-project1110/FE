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
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
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
