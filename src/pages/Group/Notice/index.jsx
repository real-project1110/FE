import React from "react";
import NoticeCarousel from "../../../components/Notice/NoticeCarousel";
import PostForm from "../../../components/Notice/PostForm";
import Search from "../../../components/Notice/Search";
import Posts from "../../../components/Notice/Posts";
import { NoticeWrap } from "./styles";

const Notice = () => {
  return (
    <NoticeWrap>
      <Search />
      <NoticeCarousel />
      <PostForm />
      <Posts />
    </NoticeWrap>
  );
};

export default Notice;
