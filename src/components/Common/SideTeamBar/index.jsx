import React from "react";
import { Link } from "react-router-dom";
import PlusSvg from "../../../assets/svg/PlusSvg";
import NavItem from "./NavItem";
import { GroupList, PlusBtn, Wrapper } from "./styles";

const SideTeamBar = () => {
  return (
    <Wrapper as="aside">
      <GroupList>
        {[1, 2, 3].map((item) => (
          <NavItem key={item} groupId={item} />
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
