import React from "react";
import { useRecoilValue } from "recoil";
import NoticeCarousel from "../../../components/Posts/NoticePosts";
import PostForm from "../../../components/Posts/PostForm";
import FreePosts from "../../../components/Posts/FreePosts";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { BoardWrap } from "./styles";

const Posts = () => {
  const showPostForm = useRecoilValue(PostFormModalAtom);
  return (
    <BoardWrap>
      <FreePosts />
      <NoticeCarousel />
      {showPostForm && <PostForm />}
    </BoardWrap>
  );
};

export default Posts;
