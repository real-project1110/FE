import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/Common/Header/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import { Wrapper, Body } from "./styles";

const Main = () => {
  return (
    <Wrapper>
      <HomeHeader />
      <Body>
        <SideTeamBar />
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Main;
