import React from "react";
import { Link, useMatch } from "react-router-dom";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import FolderSvg from "../../../assets/svg/FolderSvg";
import PostSvg from "../../../assets/svg/PostSvg";
import { GroupName, GroupNav, GroupNavItem, Wrapper } from "./styles";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";

const TeamNavBar = () => {
  const calendarMatch = useMatch("/group/:id");
  const noticeMatch = useMatch("/group/:id/notice");
  const freeMatch = useMatch("/group/:id/free");

  return (
    <Wrapper as="aside">
      <Scrollbars autoHide>
        <GroupNav>
          <GroupName>팀 스페이스명</GroupName>
          <Link to={"/group/1"}>
            <GroupNavItem isFocus={calendarMatch}>
              <CalendarSvg />
              <strong>캘린더</strong>
            </GroupNavItem>
          </Link>
          <Link to={"/group/1/notice"}>
            <GroupNavItem isFocus={noticeMatch}>
              <PostSvg />
              <strong>게시판</strong>
            </GroupNavItem>
          </Link>
          <Link to={"#"}>
            <GroupNavItem>
              <FolderSvg />
              <strong>프로젝트</strong>
            </GroupNavItem>
          </Link>
        </GroupNav>
        <UserList />
      </Scrollbars>
    </Wrapper>
  );
};

export default TeamNavBar;
