import React, { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../../..";
import { editGroupUserState } from "../../../../apis/groupUserApi";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import PlusSvg from "../../../../assets/svg/PlusSvg";
import { inviteModalAtom } from "../../../../recoil/modalAtoms";
import {
  groupUserAtom,
  groupUserListAtom,
  onlineListAtom,
} from "../../../../recoil/userAtoms";
import IconList from "../IconList";
import UserItem from "../UserItem";
import { AddUserBtn, ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const { groupId } = useParams();
  const [isFocus, setIsFocus] = useState(true);
  const [status, setStatus] = useState(0);
  const groupUser = useRecoilValue(groupUserAtom);
  const groupUserList = useRecoilValue(groupUserListAtom);
  const onlineList = useRecoilValue(onlineListAtom);
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);
  const [unreads, setUnreads] = useState({});

  // 나의 상태와 메시지를 변경하는 함수
  const { mutate: editStatusFn } = useMutation(editGroupUserState, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupUser", groupId]);
    },
  });

  // 유저 상태와 메시지를 바꾸는 함수
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

  const hasUnReadUser = useMemo(() => {
    const keys = Object.keys(unreads);
    const values = Object.values(unreads);

    return keys.filter((_, idx) => values[idx] > 0);
  }, [unreads]);

  // 마운트 되었을 때 나의 상태와 메시지를 저장하는 함수
  useEffect(() => {
    if (groupUser) {
      setStatus(groupUser.status);
    }
  }, [groupUser]);

  // 현재 그룹에 로그인한 유저의 그륩유저아이디 배열
  useEffect(() => {
    if (onlineList) {
    }
  }, [onlineList]);

  return (
    <Wrapper>
      <ToggleUsers onClick={() => setIsFocus((prev) => !prev)}>
        <span>
          <ArrowSvg isActive={isFocus} />
        </span>
        <strong>다이렉트 메세지</strong>
      </ToggleUsers>
      <AddUserBtn onClick={() => setIsInviteModal(true)}>
        <PlusSvg />
        <span>팀원 추가하기</span>
      </AddUserBtn>
      {groupUser && (
        <UserItems>
          <UserItem
            user={groupUser}
            isMe={true}
            status={status}
            groupId={groupId}
            isLoggedIn={onlineList.includes(groupUser?.groupUserId)}
            unreads={unreads}
            setUnreads={setUnreads}
          />
          <IconList
            user={groupUser}
            changeStatus={changeStatus}
            status={status}
            groupId={groupId}
            editStatusFn={editStatusFn}
          />
          <>
            {isFocus && (
              <>
                {groupUserList &&
                  groupUser &&
                  groupUserList
                    .filter(
                      (user) => user.groupUserId !== groupUser.groupUserId
                    )
                    .sort((a, b) =>
                      hasUnReadUser.includes(a.groupUserId + "") ? -1 : 1
                    )
                    .sort((a, b) =>
                      onlineList.includes(a.groupUserId) ? -1 : 1
                    )
                    .map((user) => (
                      <UserItem
                        user={user}
                        key={user.groupUserId}
                        myUserData={groupUser}
                        groupId={groupId}
                        isLoggedIn={onlineList.includes(user.groupUserId)}
                        unreads={unreads}
                        setUnreads={setUnreads}
                      />
                    ))}
              </>
            )}
          </>
        </UserItems>
      )}
    </Wrapper>
  );
};

export default UserList;
