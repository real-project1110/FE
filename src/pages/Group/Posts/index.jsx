import React from "react";
import { useRecoilValue } from "recoil";
import NoticeCarousel from "../../../components/Posts/NoticePosts";
import PostForm from "../../../components/Posts/PostForm";
import FreePosts from "../../../components/Posts/FreePosts";
import {
  PostDetailModalAtom,
  PostFormModalAtom,
} from "../../../recoil/modalAtoms";
import { BoardWrap } from "./styles";
import PostDetail from "../../../components/Posts/PostDetail";

const Posts = () => {
  const showPostForm = useRecoilValue(PostFormModalAtom);
  const showDetail = useRecoilValue(PostDetailModalAtom);
  return (
    <BoardWrap>
      <FreePosts />
      <NoticeCarousel />
      {showPostForm && <PostForm />}
      {showDetail && <PostDetail />}
    </BoardWrap>
  );
};

export default Posts;
