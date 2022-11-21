import React, { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import PlusSvg from "../../../../assets/svg/PlusSvg";
import { inviteModalAtom } from "../../../../shared/Atoms/modalAtoms";
import IconList from "../IconList";
import UserItem from "../UserItem";
import { AddUserBtn, ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [status, setStatus] = useState(userData[0].status);
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);
  const changeStatus = useCallback((num) => {
    setStatus((prev) => (prev === 0 ? num : 0));
  }, []);
  return (
    <Wrapper>
      <ToggleUsers onClick={() => setIsFocus((prev) => !prev)}>
        <span>
          <ArrowSvg isActive={isFocus} />
        </span>
        <strong>다이렉트 메세지</strong>
      </ToggleUsers>

      <UserItems>
        <UserItem user={userData[0]} isMe={true} status={status} />
        <IconList
          user={userData[0]}
          changeStatus={changeStatus}
          status={status}
        />
        {isFocus && (
          <>
            {userData.slice(1).map((user) => (
              <UserItem key={user?.groupUserId} user={user} />
            ))}
          </>
        )}
        <AddUserBtn onClick={() => setIsInviteModal(true)}>
          <PlusSvg />
          <span>팀원 추가하기</span>
        </AddUserBtn>
      </UserItems>
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
