import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { readGroups } from "../../../apis/groupApi";
import PlusSvg from "../../../assets/svg/PlusSvg";
import { groupListAtom } from "../../../recoil/groupAtoms";
import NavItem from "./NavItem";
import { GroupList, PlusBtn, Wrapper } from "./styles";

const SideTeamBar = () => {
  const setGroupList = useSetRecoilState(groupListAtom);
  const { data: groupList } = useQuery(["groupList"], readGroups, {
    staleTime: 10000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (groupList) {
      setGroupList(groupList);
    }
  }, [groupList, setGroupList]);

  return (
    <Wrapper as="aside">
      <GroupList>
        {groupList?.map((group) => (
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
