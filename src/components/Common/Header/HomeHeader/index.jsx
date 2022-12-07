import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { readInvites } from "../../../../apis/groupApi";
import { readUser } from "../../../../apis/userApi";
import BellSvg from "../../../../assets/svg/BellSvg";
import BigLogoSvg from "../../../../assets/svg/BigLogoSvg";

import QuestionSvg from "../../../../assets/svg/QuestionSvg";
import {
  editProfileModalAtom,
  headerMenuAtom,
} from "../../../../recoil/modalAtoms";
import { userAtom } from "../../../../recoil/userAtoms";
import { decodeUser } from "../../../../utils/decodeUser";
import { existCookie } from "../../../../utils/existCookie";
import { handleImgError } from "../../../../utils/handleImgError";
import AlertModal from "../../../Modals/AlertModal";
import ProfileEditModal from "../../../Modals/ProfileEditModal";
import HeaderMenu from "../HeaderMenu";
import { RightNav, Nav, Wrapper, FakeImg } from "./styles";

const HomeHeader = () => {
  const { userId } = decodeUser();
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuAtom);
  const [headerAlert, setHeaderAlert] = useState(false);
  const { data: user } = useQuery(["user", userId], readUser, {
    retry: 1,
  });
  const [editProfile, setEditProfile] = useRecoilState(editProfileModalAtom);
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  const { data: invites } = useQuery(["alerts"], readInvites, {
    staleTime: 3000,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  // 토큰이 존재하지 않을 시에 시작페이지로 이동
  useEffect(() => {
    const cookie = existCookie();
    if (!cookie) {
      return navigate("/");
    }
  }, [navigate]);

  // user 데이터를 recoil에 저장
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [setUser, user]);

  ///

  return (
    <Wrapper as="header">
      <Nav as="nav">
        <Link to={"/main"}>
          <BigLogoSvg />
        </Link>
        <RightNav>
          <li>
            <QuestionSvg />
          </li>
          <li onClick={() => setHeaderAlert(true)}>
            <BellSvg />
            {invites && invites.length > 0 && <span>{invites?.length}</span>}
          </li>
          <li onClick={() => setHeaderMenu(true)}>
            {user && user.avatarImg ? (
              <img
                src={user.avatarImg}
                alt={user.nickname}
                onError={handleImgError}
              />
            ) : (
              <FakeImg />
            )}

            {headerMenu && <HeaderMenu user={user} isMain={true} />}
          </li>
        </RightNav>
      </Nav>
      {headerAlert ? <AlertModal setHeaderAlert={setHeaderAlert} /> : null}
      {editProfile ? (
        <ProfileEditModal
          isMain={true}
          closeModal={setEditProfile}
          user={user}
        />
      ) : null}
    </Wrapper>
  );
};

export default HomeHeader;
