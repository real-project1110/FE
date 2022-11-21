import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { LoginBox, LoginButton, EmailLogin, LogoBox, Info, BigMent, SmallMent, Ment, EasyJoin } from "./styles";
import { SocialButtonWrap } from "../Signin/styles";
import kakaoLogin from "../../assets/image/kakaotalk-icon.png";
import NaverLogin from "../../assets/image/btnG_아이콘원형.png";
import GoogleLogin from "../../assets/image/icons8-구글-로고-48.png";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import LogoSvg from "../../assets/svg/LogoSvg";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginBox>
      <LogoBox>
        <BigLogoSvg />
      </LogoBox>
      <Info>
        <BigMent>Manage all the statuses of your team.</BigMent>
        <Ment>
          <SmallMent>일을 잘하는 것만큼 내 팀의 상태를 파악하는 것도 중요하죠.</SmallMent>
          <LogoSvg />는 일일이 물어보지 않아도 실시간 팀원, 프로젝트의 일정 상태를 한눈에 확인할 수 있는 곳입니다.
        </Ment>
      </Info>
      <LoginButton
        onClick={() => {
          navigate(`/signin`);
        }}
      >
        로그인하기
      </LoginButton>
      <EmailLogin
        onClick={() => {
          navigate(`/signup`);
        }}
      >
        <FontAwesomeIcon style={{ width: "50px" }} icon={faEnvelope} />
        <span>이메일로 시작하기</span>
      </EmailLogin>
      <EasyJoin>간편하게 가입하세요!</EasyJoin>
      <SocialButtonWrap>
        <img src={NaverLogin} alt="kakaoLogin" width="32px" height="32px" />
        <img src={kakaoLogin} alt="kakaoLogin" width="32px" height="32px" />
        <img src={GoogleLogin} alt="kakaoLogin" width="32px" height="32px" />
      </SocialButtonWrap>
    </LoginBox>
  );
};

export default Login;
