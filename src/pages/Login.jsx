import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import kakaoLogin from "../assets/kakao_login_medium_narrow.png";
import googleLogin from "../assets/btn_google_signin_light_normal_web@2x.png";
import naverLogin from "../assets/btnG_완성형.png";

const Login = () => {
  return (
    <LoginBox>
      <LoginButton>로그인하기</LoginButton>
      <EmailLogin>
        <FontAwesomeIcon style={{ width: "50px" }} icon={faEnvelope} />
        <span style={{ marginLeft: "21px" }}>이메일로 시작하기</span>
      </EmailLogin>
      <div style={{ marginLeft: "177.5px", marginTop: "20px" }}>간편하게 가입하세요!</div>
      <SocialBox>
        <KakaoLogin>
          <img src={kakaoLogin} alt="kakaoLogin" width="80%" height="50px" />
        </KakaoLogin>
        <NaverLogin>
          <img src={naverLogin} alt="naverLogin" width="80%" height="50px" />
        </NaverLogin>
        <GoogleLogin>
          <img src={googleLogin} alt="googleLogin" width="80%" height="50px" />
        </GoogleLogin>
      </SocialBox>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  width: 500px;
  margin: 20% auto;
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
    background-color: #01df74;
    box-shadow: 0 5px 20px ${(props) => props.theme.color.gray};
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
