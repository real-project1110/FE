import styled from "styled-components";
import {
  FlexAlignBox,
  FlexBetweenBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 500px 500px 500px;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100vw;

    & > div:first-child {
      display: none;
    }
  }
`;

export const LoginContainer = styled.div`
  ${FlexColumnBox};
  align-items: center;
  width: 500px;
  z-index: 100;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-left: -15%;
  & > img {
    position: absolute;
    bottom: 5%;
    width: 370px;
    object-fit: scale-down;
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const SignInLogo = styled.div``;

export const BigMent = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin: 2rem 0 3rem 0;
`;

export const LogoBox = styled.div`
  width: 172px;
  height: 58px;
  margin: auto;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: 500;
  margin: 5vh 0 3vh 0;
`;

export const Form = styled.form`
  ${FlexColumnBox};
  align-items: center;
  width: 70%;
`;

export const Label = styled.label`
  ${FlexColumnBox};
  width: 100%;
  margin-bottom: 1.3rem;
  span {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0.7rem;
  border: 1.3px solid ${(props) => props._border};
  border-radius: 5px;
  &:focus {
    border: none;
    box-shadow: 0px 0px 5px ${(props) => props._border};
  }
`;

export const ErrorMessage = styled.p`
  ${FlexAlignBox};
  margin-top: 0.4rem;
  width: 100%;
  color: ${(props) => props.theme.color.red};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 2rem 0 3rem 0;
  &.activeLoginBtn {
    background-color: ${(props) => props.theme.color.green};
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
  &.loginBtn {
    background-color: ${(props) => props.theme.color.gray};
  }
`;

export const Or = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  background-color: tomato;
  margin-bottom: 2rem;
  span {
    ${FlexCenterBox};
    position: absolute;
    right: 50%;
    left: 50%;
    width: 4rem;
    color: ${(props) => props.theme.color.gray};
    background-color: ${(props) => props.theme.boardColor.yellowGray};
    transform: translate(-50%, -50%);
  }
`;

export const SocialButtonWrap = styled.div`
  ${FlexBetweenBox};
  width: 60%;
  cursor: pointer;
  .kakao {
    width: 37px;
    height: 37px;
    background-color: #fff9c4;
    border-radius: 50%;
  }
  .naver {
    width: 37px;
    height: 37px;
    background-color: #dcffd7;
    border-radius: 50%;
  }
  .google {
    width: 37px;
    height: 37px;
    background-color: #f7fcff;
    border-radius: 50%;
  }

  img {
    margin-top: 6%;
    margin-left: 7%;
    border-radius: 50%;
  }
`;
