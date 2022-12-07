import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { readGroup } from "../../apis/groupApi";
import { readGroupUser, readGroupUsers } from "../../apis/groupUserApi";
import GroupHeader from "../../components/Common/Header/GroupHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import TeamNavBar from "../../components/Common/TeamNavBar";

import InviteModal from "../../components/Modals/InviteModal";
import useSocket from "../../hooks/useSocket";
import { groupAtom } from "../../recoil/groupAtoms";
import { inviteModalAtom } from "../../recoil/modalAtoms";
import {
  groupUserAtom,
  groupUserListAtom,
  onlineListAtom,
} from "../../recoil/userAtoms";
import { Wrapper, Body } from "./styles";
import { AnimatePresence } from "framer-motion";

const Group = () => {
  const { groupId } = useParams();
  const isInviteModal = useRecoilValue(inviteModalAtom);
  const setGroupUserList = useSetRecoilState(groupUserListAtom);
  const setGroupUser = useSetRecoilState(groupUserAtom);
  const setOnlineList = useSetRecoilState(onlineListAtom);
  const setGroup = useSetRecoilState(groupAtom);
  const [socket, disconnect] = useSocket(groupId);

  const { data: groupUserList } = useQuery(
    ["groupUserList", groupId],
    () => readGroupUsers(groupId),
    { retry: 1 }
  );

  const { data: groupUser } = useQuery(
    ["groupUser", groupId],
    () => readGroupUser(groupId),
    { retry: 1 }
  );

  const { data: group } = useQuery(
    ["group", groupId],
    () => readGroup(groupId),
    {
      staleTime: 10000,
      retry: 1,
    }
  );

  // 그룹 유저 리스트를 recoil에 저장
  useEffect(() => {
    if (groupUserList) setGroupUserList(groupUserList);
  }, [groupUserList, setGroupUserList]);

  // 나의 그룹 유저 정보를 recoil에 저장
  useEffect(() => {
    if (groupUser) setGroupUser(groupUser);
  }, [groupUser, setGroupUser]);

  // 현재 그룹의 정보를 recoil에 저장
  useEffect(() => {
    if (group) setGroup(group);
  }, [group, setGroup]);

  // // 그룹 입장시에 로그인 이벤트 보내기
  useEffect(() => {
    if (groupId && groupUser && socket) {
      socket.emit("joinGroup", {
        groupUserId: groupUser.groupUserId,
      });
    }
  }, [groupUser, socket, groupId]);

  // groupId가 바뀌면 소켓 연결 끊기
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [groupId, disconnect]);

  useEffect(() => {
    socket?.on("onlineList", (data) => {
      setOnlineList(data);
    });
    return () => {
      socket.off("onlineList");
    };
  }, [socket, setOnlineList]);

  return (
    <Wrapper>
      <GroupHeader />
      <Body>
        <SideTeamBar />
        <TeamNavBar />
        <Outlet />
        <AnimatePresence>
          {isInviteModal ? <InviteModal /> : null}
        </AnimatePresence>
      </Body>
    </Wrapper>
  );
};

export default Group;
