import React, { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { SubmitBtn, PostButton, Posting, Wrapper, EditorWrapper } from "./styles";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { useSetRecoilState } from "recoil";
import { useMutation } from "react-query";
import { addPost } from "../../../apis/postApi";
import { queryClient } from "../../..";
import { useParams } from "react-router-dom";

function PostForm() {
  const { groupId } = useParams();
  const [images, setImages] = useState([]);
  const { mutate: addMutate } = useMutation(addPost, {
    onSuccess: () => queryClient.invalidateQueries(["freePosts", groupId]),
  });

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

  const Submit = () => {
    let content = editorRef.current.getRootElement().querySelector("p").innerText;
    // let image = editorRef.current.getRootElement().querySelectorAll("p > img")[0].currentSrc;
    // let arr = Object.values(image);
    // arr.pop();
    // let postImg = [];
    // for (let i = 0; i < arr.length; i++) {
    //   postImg.push(arr[i].currentSrc);
    // }
    const postData = {
      groupId,
      body: {
        content: content,
        image: images[0],
      },
    };
    addMutate(postData);
  };

  return (
    <Wrapper onClick={onCloseModal}>
      <EditorWrapper onClick={(e) => e.stopPropagation()}>
        <Editor
          placeholder="공유하고 싶은 소식이 있나요? 사소한 이야기라도 좋아요:)"
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          language="ko-KR"
          usageStatistics={false}
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike", "image", "link"],
          ]}
          ref={editorRef}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              setImages((prev) => [...prev, blob]);
              const fileBlob = URL.createObjectURL(blob);
              callback(fileBlob, "alt");
              // const formData = new FormData();
              // formData.append(blob);
              // const { data } = await axios.post(`${SERVER}/`, formData, {
              //   header: { "content-type": "multipart/formdata" },
              // });
              // callback(data, "파일 alt");
            },
          }}
        />
        <SubmitBtn onClick={Submit}>
          <Posting>게시</Posting>
          <PostButton>
            <PostButtonSvg />
          </PostButton>
        </SubmitBtn>
      </EditorWrapper>
    </Wrapper>
  );
}

export default PostForm;
