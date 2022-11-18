import React, { useState } from "react";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import UserItem from "../UserItem";
import { ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const [isFocus, setIsFocus] = useState(true);

  return (
    <Wrapper>
      <ToggleUsers onClick={() => setIsFocus((prev) => !prev)}>
        <span>
          <ArrowSvg isActive={isFocus} />
        </span>
        <strong>다이렉트 메세지</strong>
      </ToggleUsers>
      {isFocus && (
        <UserItems>
          <UserItem user={userData[0]} />

          {userData.slice(1).map((user) => (
            <UserItem key={user?.id} user={user} />
          ))}
        </UserItems>
      )}
    </Wrapper>
  );
};

export default UserList;

const userData = [
  { groupUserId: 0, groupNickname: "문예진", isLoggedIn: true },
  { groupUserId: 1, groupNickname: "한세준", isLoggedIn: false },
  { groupUserId: 2, groupNickname: "안치영", isLoggedIn: false },
  { groupUserId: 3, groupNickname: "김정현", isLoggedIn: false },
  { groupUserId: 4, groupNickname: "정현진", isLoggedIn: false },
  { groupUserId: 5, groupNickname: "유동희", isLoggedIn: false },
  { groupUserId: 6, groupNickname: "김장훈", isLoggedIn: false },
  { groupUserId: 7, groupNickname: "박장훈", isLoggedIn: false },
  { groupUserId: 8, groupNickname: "이장훈", isLoggedIn: false },
  { groupUserId: 9, groupNickname: "왕장훈", isLoggedIn: false },
  { groupUserId: 10, groupNickname: "정장훈", isLoggedIn: false },
  { groupUserId: 11, groupNickname: "윤장훈", isLoggedIn: false },
];
