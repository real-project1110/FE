import React from "react";
import { Link } from "react-router-dom";
import BellSvg from "../../../../assets/svg/BellSvg";
import LogoSvg from "../../../../assets/svg/LogoSvg";
import SearchSvg from "../../../../assets/svg/SearchSvg";
import { RightNav, Nav, SearchForm, Wrapper } from "./styles";

const HomeHeader = () => {
  return (
    <Wrapper as="header">
      <Nav as="nav">
        <Link to={"/main"}>
          <LogoSvg />
        </Link>
        <SearchForm>
          <SearchSvg />
          <input
            type="text"
            placeholder="일정을 알고 싶은 팀원, 프로젝트를 검색해보세요"
          />
        </SearchForm>
        <RightNav>
          <li>
            <BellSvg />
          </li>
          <li>
            <img
              src={"https://avatars.dicebear.com/api/identicon/wooncloud5.svg"}
              alt=""
            />
          </li>
        </RightNav>
      </Nav>
    </Wrapper>
  );
};

export default HomeHeader;
