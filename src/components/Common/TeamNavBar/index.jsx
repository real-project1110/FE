import React from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import FolderSvg from "../../../assets/svg/FolderSvg";
import PostSvg from "../../../assets/svg/PostSvg";
import { GroupName, GroupNav, GroupNavItem, Wrapper } from "./styles";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";
import { useQuery } from "react-query";
import { readGroup } from "../../../apis/groupApi";

const TeamNavBar = () => {
  const { groupId } = useParams();
  const { data: group } = useQuery(
    ["group", groupId],
    () => readGroup(groupId),
    {
      staleTime: 10000,
      retry: 1,
    }
  );
  const calendarMatch = useMatch(`/groups/${group?.groupId}`);
  const noticeMatch = useMatch(`/groups/${group?.groupId}/notice`);
  console.log(group);
  return (
    <Wrapper as="aside">
      <Scrollbars autoHide>
        <GroupNav>
          <GroupName>{group && group.groupName}</GroupName>
          <Link to={`/groups/${group?.groupId}`}>
            <GroupNavItem isFocus={calendarMatch}>
              <CalendarSvg />
              <strong>캘린더</strong>
            </GroupNavItem>
          </Link>
          <Link to={`/groups/${group?.groupId}/notice`}>
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
