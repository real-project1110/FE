import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { readUser } from "../../../../apis/userApi";
import BellSvg from "../../../../assets/svg/BellSvg";
import LogoSvg from "../../../../assets/svg/LogoSvg";
import QuestionSvg from "../../../../assets/svg/QuestionSvg";
import SearchSvg from "../../../../assets/svg/SearchSvg";
import {
  editProfileModalAtom,
  headerMenuAtom,
} from "../../../../shared/Atoms/modalAtoms";
import { decodeUser } from "../../../../utils/decodeUser";
import { existCookie } from "../../../../utils/existCookie";
import { handleImgError } from "../../../../utils/handleImgError";
import AlertModal from "../../../Modals/AlertModal";
import ProfileEditModal from "../../../Modals/ProfileEditModal";
import HeaderMenu from "../HeaderMenu";
import {
  RightNav,
  Nav,
  SearchForm,
  Wrapper,
  SearchInput,
  FakeImg,
} from "./styles";

const HomeHeader = () => {
  const { userId } = decodeUser();
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuAtom);
  const [headerAlert, setHeaderAlert] = useState(false);
  const { data: user } = useQuery(["user", userId], readUser, {
    retry: 1,
  });
  const [editProfile, setEditProfile] = useRecoilState(editProfileModalAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = existCookie();
    if (!cookie) {
      return navigate("/");
    }
  }, [navigate]);

  return (
    <Wrapper as="header">
      <Nav as="nav">
        <Link to={"/main"}>
          <LogoSvg />
        </Link>
        <SearchForm>
          <SearchSvg />
          <SearchInput
            type="text"
            placeholder="일정을 알고 싶은 팀원, 프로젝트를 검색해보세요"
          />
        </SearchForm>
        <RightNav>
          <li>
            <QuestionSvg />
          </li>
          <li onClick={() => setHeaderAlert(true)}>
            <BellSvg />
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
