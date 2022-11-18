import React from "react";
import { UserContainer, UserImg } from "./styles";

const UserItem = ({ user }) => {
  return (
    <UserContainer>
      <UserImg>
        <img
          src={`https://avatars.dicebear.com/api/identicon/wooncloud${user.groupUserId}.svg`}
          alt={user.groupNickname}
        />
        {user.isLoggedIn ? <div /> : null}
      </UserImg>
      <span>{user.groupNickname}</span>
    </UserContainer>
  );
};

export default UserItem;
