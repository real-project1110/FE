import React, { useEffect } from "react";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import FolderSvg from "../../../assets/svg/FolderSvg";
import PostSvg from "../../../assets/svg/PostSvg";
import { GroupName, GroupNav, GroupNavItem, Wrapper } from "./styles";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";
import { useQuery } from "react-query";
import { readGroup } from "../../../apis/groupApi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { groupAtom } from "../../../recoil/groupAtoms";

const TeamNavBar = () => {
  const { groupId } = useParams();
  const group = useRecoilValue(groupAtom);
  const navigate = useNavigate();

  const calendarMatch = useMatch(`/groups/${group?.groupId}`);
  const noticeMatch = useMatch(`/groups/${group?.groupId}/notice`);

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
          <Link to={`/groups/${group?.groupId}/posts`}>
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
