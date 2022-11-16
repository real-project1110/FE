import React from "react";
import { UserImg, UserItem, Wrapper } from "./styles";

const UserList = () => {
  return (
    <Wrapper>
      {userData.map((user) => (
        <UserItem key={user.groupUserId}>
          <UserImg>
            <img
              src={`https://avatars.dicebear.com/api/identicon/wooncloud${user.groupUserId}.svg`}
              alt={user.groupNickname}
            />
            {user.isLoggedIn ? <div /> : null}
          </UserImg>
          <span>{user.groupNickname}</span>
        </UserItem>
      ))}
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
];
