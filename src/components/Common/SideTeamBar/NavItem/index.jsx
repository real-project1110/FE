import React from "react";
import { Link, useMatch } from "react-router-dom";
import { GroupItem } from "./styles";

const NavItem = ({ groupId }) => {
  const groupMatch = useMatch(`/group/${groupId}`);
  return (
    <Link to={`/group/${groupId}`}>
      <GroupItem
        isFocus={groupMatch}
        src={`https://avatars.dicebear.com/api/identicon/wooncloud${groupId}.svg`}
        alt=""
      />
    </Link>
  );
};

export default NavItem;
