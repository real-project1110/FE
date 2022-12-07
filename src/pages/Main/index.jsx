import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeHeader from "../../components/Common/Header/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import { Wrapper, Body } from "./styles";
import { existCookie } from "../../utils/existCookie";

const Main = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const cookie = existCookie();
    if (!cookie) {
      return navigate("/");
    }
  }, [navigate, pathname]);

  return (
    <Wrapper>
      <HomeHeader isMain={true} />
      <Body>
        <SideTeamBar />
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Main;
