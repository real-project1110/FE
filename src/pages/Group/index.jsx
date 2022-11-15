import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/Common/Header/HomeHeader/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import TeamNavBar from "../../components/Common/TeamNavBar";
import { Wrapper, Body } from "./styles";

const Group = () => {
  return (
    <Wrapper>
      <HomeHeader />
      <Body>
        <SideTeamBar />
        <TeamNavBar />
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Group;
