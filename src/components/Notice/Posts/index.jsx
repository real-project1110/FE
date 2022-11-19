import React from "react";
import { Title } from "../NoticeCarousel/styles";
import { PostHeader, New, Newest, NewestComment } from "./styles";

function Posts() {
  return (
    <>
      <PostHeader>
        <Title>게시글</Title>
        <New>
          <Newest>최신순</Newest>
          <NewestComment>최근댓글순</NewestComment>
        </New>
      </PostHeader>
    </>
  );
}

export default Posts;
