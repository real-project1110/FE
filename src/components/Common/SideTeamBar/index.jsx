import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { readGroups } from "../../../apis/groupApi";
import PlusSvg from "../../../assets/svg/PlusSvg";
import NavItem from "./NavItem";
import { GroupList, PlusBtn, Wrapper } from "./styles";

const SideTeamBar = () => {
  const { data: groupsData } = useQuery(["groupList"], readGroups, {
    staleTime: 10000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper as="aside">
      <GroupList>
        {groupsData?.map((group) => (
          <NavItem key={group?.groupId} group={group} />
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
