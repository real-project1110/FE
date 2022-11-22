import React from "react";
import NoticeCarousel from "../../../components/Notice/NoticeCarousel";
import PostForm from "../../../components/Notice/PostForm";
import Search from "../../../components/Notice/Search";
import Posts from "../../../components/Notice/Posts";
import { BoardWrap, NoticeWrap } from "./styles";

const Notice = () => {
  return (
    <BoardWrap>
      <NoticeWrap>
        <Search />
        <PostForm />
        <Posts />
      </NoticeWrap>
      <div style={{ paddingRight: "3%" }}>
        <NoticeCarousel />
      </div>
    </BoardWrap>
  );
};

export default Notice;
