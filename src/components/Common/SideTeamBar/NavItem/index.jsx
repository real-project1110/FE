import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { GroupImg, GroupItem, GroupName } from "./styles";

const NavItem = ({ group }) => {
  const groupMatch = useMatch(`/group/${group?.groupId}/*`);
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={`/group/${group?.groupId}`}>
      <GroupItem
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <GroupImg
          isFocus={groupMatch}
          src={`https://avatars.dicebear.com/api/identicon/wooncloud${group.groupId}.svg`}
          alt=""
        />
        {isHover && <GroupName>{group?.groupName}</GroupName>}
      </GroupItem>
    </Link>
  );
};

export default NavItem;
