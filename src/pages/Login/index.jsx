import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import kakaoLogin from "../../assets/image/kakao_login_medium_narrow.png";
import googleLogin from "../../assets/image/btn_google_signin_light_normal_web@2x.png";
import naverLogin from "../../assets/image/btnG_완성형.png";
import { useNavigate } from "react-router-dom";
import { LoginBox, LoginButton, EmailLogin, SocialBox, KakaoLogin, NaverLogin, GoogleLogin } from "./styles";

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
