import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { Form, SubmitBtn, PostButton, Posting, Wrapper } from "./styles";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { useSetRecoilState } from "recoil";
import axios from "axios";

function PostForm() {
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const editorRef = useRef(null);

  // useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.getInstance().removeHook("addImageBlobHook");
  //     editorRef.current.getInstance().addHook("addImageBlobHook", (blob, callback) => {
  //       (async () => {
  //         const formData = new FormData();
  //         formData.append("file", blob);

  //         axios.defaults.withCredentials = true;
  //         const { data: url } = await axios.post("url", formData, {
  //           header: { "content-type": "multipart/formdata" },
  //         });
  //         callback(url, "alt text");
  //       })();

  //       return false;
  //     });
  //   }

  //   return () => {};
  // }, [editorRef]);

  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsForm(false);
  };

  const Submit = (e) => {
    e.preventDefault();
    const content = editorRef.current?.getInstance().wwEditor.el; // 안에 내용
    // const content = editorRef.current?.getInstance().getHTML();
    console.log(content);
  };

  return (
    <Wrapper onClick={onCloseModal}>
      <Form onSubmit={Submit} onClick={(e) => e.stopPropagation()}>
        <Editor
          placeholder="공유하고 싶은 소식이 있나요? 사소한 이야기라도 좋아요:)"
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          language="ko-KR"
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike", "image", "link"],
          ]}
          ref={editorRef}
          // hooks={{
          //   addImageBlobHook: async (blob, callback) => {
          //     const formData = new FormData();
          //     formData.append(blob);
          //     const { data: url } = await axios.post("url", formData, {
          //       header: { "content-type": "multipart/formdata" },
          //     });
          //     callback(url, "파일 alt");
          //   },
          // }}
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
