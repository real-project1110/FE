import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { readGroupUser } from "../../../../apis/groupUserApi";
import BellSvg from "../../../../assets/svg/BellSvg";
import LogoSvg from "../../../../assets/svg/LogoSvg";
import QuestionSvg from "../../../../assets/svg/QuestionSvg";
import SearchSvg from "../../../../assets/svg/SearchSvg";
import { headerMenuAtom } from "../../../../shared/Atoms/modalAtoms";
import { existCookie } from "../../../../utils/existCookie";
import AlertModal from "../../../Modals/AlertModal";
import HeaderMenu from "../HeaderMenu";
import { RightNav, Nav, SearchForm, Wrapper, SearchInput } from "./styles";

const GroupHeader = () => {
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuAtom);
  const [headerAlert, setHeaderAlert] = useState(false);
  const { groupId } = useParams();
  const navigate = useNavigate();
  const { data: groupUser } = useQuery(
    ["groupUser", `group ${groupId}`],
    () => readGroupUser(groupId),
    {
      retry: 1,
    }
  );

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
            <img
              src={`https://avatars.dicebear.com/api/identicon/wooncloud${groupUser?.groupUserId}.svg`}
              alt=""
            />
            {headerMenu && <HeaderMenu user={groupUser} />}
          </li>
        </RightNav>
      </Nav>
      {headerAlert ? <AlertModal setHeaderAlert={setHeaderAlert} /> : null}
    </Wrapper>
  );
};

export default GroupHeader;
