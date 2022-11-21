import React from "react";
import NoticeCarousel from "../../../components/Notice/NoticeCarousel";
import PostForm from "../../../components/Notice/PostForm";
import Search from "../../../components/Notice/Search";
import Posts from "../../../components/Notice/Posts";
import { NoticeWrap, BoardWrap } from "./styles";

const Notice = () => {
  return (
    <BoardWrap>
      <NoticeWrap>
        <Search />
        <PostForm />
        <Posts />
      </NoticeWrap>
      <NoticeCarousel />
    </BoardWrap>
  );
};

export default Notice;
