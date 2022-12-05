import React, { useState } from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import CalendarSvg from "../../../assets/svg/CalendarSvg";
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
import MySvg from "../../../assets/svg/MySvg";
import { decodeUser } from "../../../utils/decodeUser";
import { useMemo } from "react";

const TeamNavBar = () => {
  const group = useRecoilValue(groupAtom);
  const calendarMatch = useMatch(`/groups/${group?.groupId}`);
  const noticeMatch = useMatch(`/groups/${group?.groupId}/notice`);
  const [isEdit, setIsEdit] = useState(false);
  const user = useMemo(() => decodeUser(), []);
  return (
    <Wrapper as="aside">
      <Scrollbars autoHide>
        <GroupNav>
          <GroupInfo>
            <h3>{group && group.groupName}</h3>
            {user && group && user.userId === group.onerId && (
              <GroupConfig onClick={() => setIsEdit(true)}>
                <ConfigSvg />
              </GroupConfig>
            )}
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
              <MySvg />
              <strong>MY</strong>
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
