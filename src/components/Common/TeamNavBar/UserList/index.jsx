import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { queryClient } from "../../../..";
import {
  editGroupUserState,
  readGroupUser,
  readGroupUsers,
} from "../../../../apis/groupUserApi";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import PlusSvg from "../../../../assets/svg/PlusSvg";
import { inviteModalAtom } from "../../../../shared/Atoms/modalAtoms";
import IconList from "../IconList";
import UserItem from "../UserItem";
import { AddUserBtn, ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const { groupId } = useParams();
  const [isFocus, setIsFocus] = useState(true);
  const [status, setStatus] = useState(0);
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);

  const { data: userList } = useQuery(
    ["groupUserList", groupId],
    () => readGroupUsers(groupId),
    { retry: 2 }
  );
  const { data: groupUser } = useQuery(
    ["groupUser", groupId],
    () => readGroupUser(groupId),
    { retry: 2 }
  );

  const { mutate: editStatusFn } = useMutation(editGroupUserState, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupUser", groupId]);
    },
  });

  const changeStatus = useCallback(
    async (num) => {
      if (status > 0) {
        const payload = {
          id: groupId,
          body: { status: 0, statusMessage: null },
        };
        editStatusFn(payload);
      }
      setStatus((prev) => (prev === 0 ? num : 0));
    },
    [status, groupId, editStatusFn]
  );

  useEffect(() => {
    if (groupUser) {
      setStatus(groupUser.status);
    }
  }, [groupUser]);
  return (
    <Wrapper>
      <ToggleUsers onClick={() => setIsFocus((prev) => !prev)}>
        <span>
          <ArrowSvg isActive={isFocus} />
        </span>
        <strong>다이렉트 메세지</strong>
      </ToggleUsers>
      {groupUser && (
        <UserItems>
          <UserItem user={groupUser} isMe={true} status={status} />
          <IconList
            user={groupUser}
            changeStatus={changeStatus}
            status={status}
            groupId={groupId}
            editStatusFn={editStatusFn}
          />
          {isFocus && (
            <>
              {userList &&
                groupUser &&
                userList
                  .filter((user) => user.groupUserId !== groupUser.groupUserId)
                  .map((user) => (
                    <UserItem key={user?.groupUserId} user={user} />
                  ))}
            </>
          )}
          <AddUserBtn onClick={() => setIsInviteModal(true)}>
            <PlusSvg />
            <span>팀원 추가하기</span>
          </AddUserBtn>
        </UserItems>
      )}
    </Wrapper>
  );
};

export default UserList;

const userData = [
  {
    groupUserId: 0,
    groupNickname: "문예진",
    isLoggedIn: true,
    status: 2,
    statusMessage: "피곤행...",
  },
  {
    groupUserId: 1,
    groupNickname: "한세준",
    isLoggedIn: false,
    status: 1,
    statusMessage: "피곤행...",
  },
  {
    groupUserId: 2,
    groupNickname: "안치영",
    isLoggedIn: false,
    status: 3,
    statusMessage: "피곤행...",
  },
  {
    groupUserId: 3,
    groupNickname: "김정현",
    isLoggedIn: false,
    status: 0,
    statusMessage: "",
  },
  { groupUserId: 4, groupNickname: "정현진", isLoggedIn: false },
  { groupUserId: 5, groupNickname: "유동희", isLoggedIn: false },
  { groupUserId: 6, groupNickname: "김장훈", isLoggedIn: false },
  { groupUserId: 7, groupNickname: "박장훈", isLoggedIn: false },
  { groupUserId: 8, groupNickname: "이장훈", isLoggedIn: false },
  { groupUserId: 9, groupNickname: "왕장훈", isLoggedIn: false },
  { groupUserId: 10, groupNickname: "정장훈", isLoggedIn: false },
  { groupUserId: 11, groupNickname: "윤장훈", isLoggedIn: false },
];
