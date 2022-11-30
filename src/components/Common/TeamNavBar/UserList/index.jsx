import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { queryClient } from "../../../..";
import {
  editGroupUserState,
  readGroupUser,
  readGroupUsers,
} from "../../../../apis/groupUserApi";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import PlusSvg from "../../../../assets/svg/PlusSvg";
import { inviteModalAtom } from "../../../../recoil/modalAtoms";
import { groupUserListAtom } from "../../../../recoil/userAtoms";
import IconList from "../IconList";
import UserItem from "../UserItem";
import { AddUserBtn, ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const { groupId } = useParams();
  const [isFocus, setIsFocus] = useState(true);
  const [status, setStatus] = useState(0);
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);
  const setGroupUserList = useSetRecoilState(groupUserListAtom);

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

  useEffect(() => {
    if (groupUserList) setGroupUserList(groupUserList);
  }, [groupUserList, setGroupUserList]);

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
              {groupUserList &&
                groupUser &&
                groupUserList
                  .filter((user) => user.groupUserId !== groupUser.groupUserId)
                  .map((user) => (
                    <Link
                      to={`/groups/${groupId}/chats/${user.groupUserId}`}
                      key={user?.groupUserId}
                    >
                      <UserItem user={user} />
                    </Link>
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
