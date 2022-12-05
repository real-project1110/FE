import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
import FolderSvg from "../../../assets/svg/FolderSvg";
import PostSvg from "../../../assets/svg/PostSvg";
import {
  GroupConfig,
  GroupInfo,
  GroupNav,
  GroupNavItem,
  Wrapper,
} from "./styles";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";
import { useRecoilValue } from "recoil";
import { groupAtom } from "../../../recoil/groupAtoms";
import ConfigSvg from "../../../assets/svg/ConfigSvg";
import GroupEditModal from "../../Modals/GroupEditModal";

const TeamNavBar = () => {
  const group = useRecoilValue(groupAtom);
  const calendarMatch = useMatch(`/groups/${group?.groupId}`);
  const noticeMatch = useMatch(`/groups/${group?.groupId}/notice`);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <Wrapper as="aside">
      <Scrollbars autoHide>
        <GroupNav>
          <GroupInfo>
            <h3>{group && group.groupName}</h3>
            <GroupConfig onClick={() => setIsEdit(true)}>
              <ConfigSvg />
            </GroupConfig>
          </GroupInfo>

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
      {isEdit && <GroupEditModal setIsEdit={setIsEdit} group={group} />}
    </Wrapper>
  );
};

export default TeamNavBar;
