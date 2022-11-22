import React from "react";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { readGroup } from "../../apis/groupApi";
import HomeHeader from "../../components/Common/Header/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import TeamNavBar from "../../components/Common/TeamNavBar";

import InviteModal from "../../components/Modals/InviteModal";
import { inviteModalAtom } from "../../shared/Atoms/modalAtoms";
import { Wrapper, Body } from "./styles";

const Group = () => {
  const { groupId } = useParams();
  const { data: group } = useQuery(
    ["group", groupId],
    () => readGroup(groupId),
    {
      staleTime: 10000,
      retry: 1,
    }
  );
  const isInviteModal = useRecoilValue(inviteModalAtom);

  return (
    <Wrapper>
      <HomeHeader />
      <Body>
        <SideTeamBar />
        <TeamNavBar group={group} />
        <Outlet />
        {isInviteModal ? <InviteModal /> : null}
      </Body>
    </Wrapper>
  );
};

export default Group;
