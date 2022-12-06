import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox, FlexColumnBox } from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexCenterBox};
  width: 100%;
  height: 100vh;
`;
export const LoginBox = styled.div`
  ${FlexColumnBox};
  align-items: center;
  width: 802px;
`;
export const Logo = styled.div`
  ${FlexColumnBox};
  align-items: center;
`;

export const LogoBox = styled.div`
  width: 12rem;
  cursor: pointer;
`;

export const Info = styled.div`
  text-align: center;
`;

export const BigMent = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 2rem 0 3rem 0;
`;

export const SmallMent = styled.p`
  margin-bottom: 1rem;
  color: #aaaaaa;
  font-size: 15px;
  font-weight: 400;
`;

export const Ment = styled.div`
  ${FlexColumnBox};
  align-items: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  div {
    ${FlexAlignBox};
    strong {
      font-weight: 600;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 330px;
  ${FlexColumnBox};
  margin-top: 3rem;
`;
export const LoginButton = styled.div`
  ${FlexCenterBox};
  width: 100%;
  height: 2.9rem;
  background-color: ${(props) => props.theme.color.green};
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  margin: 2rem 0;
`;

export const EmailLogin = styled.div`
  position: relative;
  ${FlexAlignBox};
  width: 100%;
  height: 2.9rem;
  border: 1px solid ${(props) => props.theme.color.gray};
  padding: 0 2rem;
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.extraLightGray};
  }
  svg {
    color: ${(props) => props.theme.color.gray};
    font-size: 1.2rem;
  }
  span {
    position: absolute;
    left: 0;
    width: 100%;
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const EasyJoin = styled.span`
  ${FlexCenterBox};
  color: rgba(0, 0, 0, 0.6);
  margin: 2rem 0 1.5rem 0;
`;

export const SocialList = styled.ul`
  width: 100%;
  ${FlexColumnBox};
`;

export const SocialItem = styled(EmailLogin)`
  color: white;
  border: none;
  box-shadow: 0px 2px 3px ${(props) => props.theme.color.lightGray};
  margin-bottom: 0.6rem;
  .naver {
    height: 30px;
    border-radius: 50%;
    outline: 2.5px solid #dcffc7;
  }
  .kakao {
    height: 30px;
    border-radius: 50%;
    outline: 2.5px solid #fff9c4;
  }
  .google {
    height: 30px;
    border-radius: 50%;
    outline: 2.5px solid #ffffff;
    outline-offset: -2px;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  &:first-child {
    background-color: #02c75a;
  }
  &:nth-child(2) {
    color: inherit;
    background-color: #ffe80f;
  }
  &:last-child {
    color: #ffffff;
    background-color: #5383ec;
  }
`;
