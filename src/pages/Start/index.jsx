import React from "react";
import styled from "styled-components";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";

import { FlexBetweenBox, FlexColumnBox } from "../../shared/Styles/flex";

const Start = () => {
  return (
    <Wrapper as="main">
      <Header as="header">
        <Logo>
          <BigLogoSvg />
        </Logo>
        <Nav>
          <span>문의하기</span>
          <span>로그인하기</span>
          <button>Status 무료 가입</button>
        </Nav>
      </Header>
    </Wrapper>
  );
};

export default Start;

export const Wrapper = styled.div`
  ${FlexColumnBox};
  width: 100%;
`;

export const Header = styled.div`
  ${FlexBetweenBox};
  align-items: center;

  padding: 1.7rem 10vw;
`;

export const Logo = styled.div`
  svg {
    width: 93px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    padding: 0 2.5rem;
    &:first-child {
      border-right: 1px solid ${(props) => props.theme.color.lightGray};
    }
    &:hover {
      color: ${(props) => props.theme.color.gray};
    }
  }
  button {
    padding: 0.5rem 1.3rem;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;

    background-color: ${(props) => props.theme.color.green};
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;
