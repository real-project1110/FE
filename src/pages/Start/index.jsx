import React from "react";
import styled from "styled-components";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";

import { FlexBetweenBox, FlexColumnBox } from "../../shared/Styles/flex";

const Start = () => {
  return (
    <Wrapper>
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
      <Main as="main">
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </Main>
    </Wrapper>
  );
};

export default Start;

// padding 0 10w;
export const Wrapper = styled.div`
  ${FlexColumnBox};
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export const Header = styled.div`
  width: 100%;
  position: fixed;
  ${FlexBetweenBox};
  align-items: center;
  padding: 0 10vw;
  background-color: #fafafa;
`;

export const Logo = styled.div`
  svg {
    width: 93px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
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

export const Main = styled.div`
  width: 100%;
  ${FlexColumnBox};
`;
export const Section1 = styled.div`
  width: 100%;
  height: 524px;
  background-color: red;
`;
export const Section2 = styled.div``;
export const Section3 = styled.div``;
