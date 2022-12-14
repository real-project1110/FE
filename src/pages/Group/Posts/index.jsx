import React from "react";
import { useRecoilValue } from "recoil";
import NoticeCarousel from "../../../components/Posts/NoticePosts";
import PostForm from "../../../components/Posts/PostForm";
import FreePosts from "../../../components/Posts/FreePosts";
import {
  PostDeleteModalAtom,
  PostDetailModalAtom,
  PostFormModalAtom,
} from "../../../recoil/modalAtoms";
import { BoardWrap } from "./styles";
import PostDetail from "../../../components/Posts/PostDetail";
import DeleteModal from "../../../components/Posts/DeleteModal";
import { AnimatePresence } from "framer-motion";
const Posts = () => {
  const showPostForm = useRecoilValue(PostFormModalAtom);
  const showDetail = useRecoilValue(PostDetailModalAtom);
  const showDeleteModal = useRecoilValue(PostDeleteModalAtom);
  return (
    <BoardWrap>
      <FreePosts />
      <NoticeCarousel />
      <AnimatePresence>
        {showPostForm && <PostForm />}
        {showDetail && <PostDetail />}
        {showDeleteModal && <DeleteModal />}
      </AnimatePresence>
    </BoardWrap>
  );
};

export default Posts;
