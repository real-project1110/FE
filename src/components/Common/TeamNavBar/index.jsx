import React from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import FolderSvg from "../../../assets/svg/FolderSvg";
import PostSvg from "../../../assets/svg/PostSvg";
import { FlexAlignBox, FlexColumnBox } from "../../../shared/Styles/flex";

const TeamNavBar = () => {
  const calendarMatch = useMatch("/group/:id");
  const noticeMatch = useMatch("/group/:id/notice");
  const freeMatch = useMatch("/group/:id/free");
  return (
    <Wrapper as="aside">
      <GroupName>팀 스페이스명</GroupName>
      <GroupNav>
        <Link to={"/group/1"}>
          <GroupNavItem isFocus={calendarMatch}>
            <CalendarSvg />
            <strong>캘린더</strong>
          </GroupNavItem>
        </Link>
        <Link to={"/group/1/notice"}>
          <GroupNavItem isFocus={noticeMatch}>
            <PostSvg />
            <strong>공지 게시판</strong>
          </GroupNavItem>
        </Link>
        <Link to={"/group/1/free"}>
          <GroupNavItem isFocus={freeMatch}>
            <PostSvg />
            <strong>자유 게시판</strong>
          </GroupNavItem>
        </Link>
        <Link to={"#"}>
          <GroupNavItem>
            <FolderSvg />
            <strong>프로젝트</strong>
          </GroupNavItem>
        </Link>
      </GroupNav>
    </Wrapper>
  );
};

export default TeamNavBar;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.layoutColor.white};
  padding: 0 1rem;
`;

export const GroupName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 0rem;
`;

export const GroupNav = styled.ul`
  ${FlexColumnBox};
  padding: 1rem 0;
  a {
    margin-bottom: 0.5rem;
  }
`;

export const GroupNavItem = styled.li`
  ${FlexAlignBox};
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => (props.isFocus ? "#f4f4f4" : "inherit")};
  svg {
    margin-right: 1rem;
  }
  &:hover {
    background-color: #f4f4f4;
  }
`;
