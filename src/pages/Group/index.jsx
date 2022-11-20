import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import HomeHeader from "../../components/Common/Header/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import TeamNavBar from "../../components/Common/TeamNavBar";
import InviteModal from "../../components/Modals/InviteModal";
import { inviteModalAtom } from "../../shared/Atoms/groupModal";
import { Wrapper, Body } from "./styles";

const Group = () => {
  const isInviteModal = useRecoilValue(inviteModalAtom);
  console.log(isInviteModal);
  return (
    <Wrapper>
      <HomeHeader />
      <Body>
        <SideTeamBar />
        <TeamNavBar />
        <Outlet />
        {isInviteModal ? <InviteModal /> : null}
      </Body>
    </Wrapper>
  );
};

export default Group;
