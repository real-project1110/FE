import React from "react";
import NoticeCarousel from "../../../components/Notice/NoticeCarousel";
import Posts from "../../../components/Notice/Posts";
import { NoticeWrap, BoardWrap } from "./styles";

const Notice = () => {
  return (
    <BoardWrap>
      <NoticeWrap>
        <Posts />
      </NoticeWrap>
      <div>
        <NoticeCarousel />
      </div>
    </BoardWrap>
  );
};

export default Notice;
