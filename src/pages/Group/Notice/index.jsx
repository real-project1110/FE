import React from "react";
import { useRecoilValue } from "recoil";
import NoticeCarousel from "../../../components/Notice/NoticeCarousel";
import PostForm from "../../../components/Notice/PostForm";
import Posts from "../../../components/Notice/Posts";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { BoardWrap } from "./styles";

const Notice = () => {
  const isForm = useRecoilValue(PostFormModalAtom);
  return (
    <BoardWrap>
      <Posts />
      <NoticeCarousel />
      {isForm && <PostForm />}
    </BoardWrap>
  );
};

export default Notice;
