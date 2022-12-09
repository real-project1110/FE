import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import { useCallback } from "react";
import { toast } from "react-toastify";

const TeamNavBar = () => {
  const group = useRecoilValue(groupAtom);
  const calendarMatch = useMatch(`/groups/${group?.groupId}`);
  const noticeMatch = useMatch(`/groups/${group?.groupId}/notice`);
  const [isEdit, setIsEdit] = useState(false);
  const user = useMemo(() => decodeUser(), []);

  const onMelong = useCallback(() => {
    toast.error("제작 중에 있는 기능 입니다. 🤑", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);
  return (
    <Wrapper as="aside">
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
          <GroupNavItem onClick={onMelong}>
            <MySvg />
            <strong>MY</strong>
          </GroupNavItem>
        </Link>
      </GroupNav>
      <Scrollbars autoHide>
        <UserList />
      </Scrollbars>
      <AnimatePresence>
        {isEdit && (
          <GroupEditModal
            key="GroupEditModal"
            setIsEdit={setIsEdit}
            group={group}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default TeamNavBar;
