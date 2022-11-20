import React from "react";
import { Link } from "react-router-dom";
import PlusSvg from "../../../assets/svg/PlusSvg";
import NavItem from "./NavItem";
import { GroupList, PlusBtn, Wrapper } from "./styles";

const SideTeamBar = () => {
  return (
    <Wrapper as="aside">
      <GroupList>
        {groups.map((group) => (
          <NavItem key={group.groupId} group={group} />
        ))}
      </GroupList>
      <Link to="/main/write">
        <PlusBtn>
          <PlusSvg />
        </PlusBtn>
      </Link>
    </Wrapper>
  );
};

export default SideTeamBar;

const groups = [
  { groupId: 0, groupName: "항해 99팀" },
  { groupId: 1, groupName: "항해99 프론트엔드" },
  { groupId: 2, groupName: "항해99 백엔드" },
];
