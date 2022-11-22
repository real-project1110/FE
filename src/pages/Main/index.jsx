import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { readUser } from "../../apis/userApi";
import HomeHeader from "../../components/Common/Header/HomeHeader";
import SideTeamBar from "../../components/Common/SideTeamBar";
import { Wrapper, Body } from "./styles";
import { existCookie } from "../../utils/existCookie";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../shared/Atoms/userAtoms";
const Main = () => {
  const { data: userData } = useQuery(["user"], readUser, {
    staleTime: 10000,
    retry: 3,
  });
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const cookie = existCookie();
    if (!cookie) {
      return navigate("/");
    }
  }, [navigate, pathname]);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [setUser, userData]);
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
