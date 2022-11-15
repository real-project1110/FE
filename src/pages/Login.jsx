import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import kakaoLogin from "../assets/image/kakao_login_medium_narrow.png";
import googleLogin from "../assets/image/btn_google_signin_light_normal_web@2x.png";
import naverLogin from "../assets/image/btnG_완성형.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginBox>
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
        <span style={{ marginLeft: "21px" }}>이메일로 시작하기</span>
      </EmailLogin>
      <div style={{ marginLeft: "177.5px", marginTop: "20px" }}>간편하게 가입하세요!</div>
      <SocialBox>
        <KakaoLogin>
          <img src={kakaoLogin} alt="kakaoLogin" width="80%" height="55px" />
        </KakaoLogin>
        <NaverLogin>
          <img src={naverLogin} alt="naverLogin" width="80%" height="55px" />
        </NaverLogin>
        <GoogleLogin>
          <img src={googleLogin} alt="googleLogin" width="80%" height="55px" />
        </GoogleLogin>
      </SocialBox>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  width: 500px;
  margin: auto;
`;

const LoginButton = styled.div`
  width: 244px;
  height: 43px;
  margin: auto;
  background-color: ${(props) => props.theme.color.green};

  border: none;
  border-radius: 5px;

  text-align: center;
  line-height: 43px;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;

  :hover {
    cursor: pointer;
    background-color: #35ad70;
    opacity: 50;
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

const EmailLogin = styled.div`
  width: 100%;
  height: 43px;
  margin: 25% auto auto 23%;

  font-weight: 600;
  line-height: 43px;

  cursor: pointer;
`;

const SocialBox = styled.div`
  width: 300px;
  margin-left: 130px;
`;

const KakaoLogin = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const GoogleLogin = styled.div`
  cursor: pointer;
`;

const NaverLogin = styled.div`
  cursor: pointer;
`;
