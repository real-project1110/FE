import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  LoginBox,
  LoginButton,
  EmailLogin,
  LogoBox,
  Info,
  BigMent,
  SmallMent,
  Ment,
  EasyJoin,
  Logo,
  Wrapper,
  ButtonContainer,
  Line,
  SocialItem,
  SocialList,
} from "./styles";
import kakaoLogin from "../../assets/image/kakaotalk-icon.png";
import NaverLogin from "../../assets/image/btnG_아이콘원형.png";
import GoogleLogin from "../../assets/image/icons8-구글-로고-48.png";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import LogoSvg from "../../assets/svg/LogoSvg";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const LoginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LoginBox>
        <Logo>
          <LogoBox>
            <BigLogoSvg />
          </LogoBox>
          <Info>
            <BigMent>Manage all the statuses of your team.</BigMent>
            <Ment>
              <SmallMent>일을 잘하는 것만큼 내 팀의 상태를 파악하는 것도 중요하죠.</SmallMent>
              <div>
                <LogoSvg />는 일일이 물어보지 않아도 실시간 <strong>팀원, 프로젝트의 일정 상태</strong>를 한눈에 확인할 수 있는 곳입니다.
              </div>
            </Ment>
          </Info>
        </Logo>
        <ButtonContainer>
          <LoginButton
            onClick={() => {
              navigate(`/signin`);
            }}
          >
            로그인하기
          </LoginButton>
          <Line />
          <EmailLogin
            onClick={() => {
              navigate(`/signup`);
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>이메일로 시작하기</span>
          </EmailLogin>
          <EasyJoin>간편하게 가입하세요!</EasyJoin>
          <SocialList>
            <SocialItem>
              <img src={NaverLogin} alt="kakaoLogin" width="32px" height="32px" />
              <span>네이버 로그인</span>
            </SocialItem>
            <SocialItem onClick={LoginWithKakao}>
              <img src={kakaoLogin} alt="kakaoLogin" width="32px" height="32px" />
              <span>카카오톡 로그인</span>
            </SocialItem>
            <SocialItem>
              <img src={GoogleLogin} alt="kakaoLogin" width="32px" height="32px" />
              <span>구글 로그인</span>
            </SocialItem>
          </SocialList>
        </ButtonContainer>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
