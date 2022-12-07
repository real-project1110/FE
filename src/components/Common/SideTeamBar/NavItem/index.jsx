import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { handleImgError } from "../../../../utils/handleImgError";
import { FakeImg, GroupImg, GroupItem, GroupName } from "./styles";

const NavItem = ({ group }) => {
  const groupMatch = useMatch(`/groups/${group?.groupId}/*`);
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={`/groups/${group?.groupId}`}>
      <GroupItem
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {group.groupImg ? (
          <GroupImg
            isFocus={groupMatch}
            src={group?.groupImg}
            alt={group?.groupName}
            onError={handleImgError}
          />
        ) : (
          <FakeImg isFocus={groupMatch} />
        )}

        {isHover && <GroupName>{group?.groupName}</GroupName>}
      </GroupItem>
    </Link>
  );
};

export default NavItem;
