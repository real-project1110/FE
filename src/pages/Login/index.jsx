import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import GoogleLoginImage from "../../assets/image/구글.png";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import login from "../../assets/image/login.png";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { setAccessToken } from "../../shared/Cookie/Cookie";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const LoginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = async (res) => {
    console.log(res);
    try {
      const token = res.accessToken;
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}auth/google`, res, {
        headers: {
          Authorization: token,
        },
      });
      const {
        status,
        data: { accessToken, refreshToken, currentPage },
      } = response;
      if (status !== 200) return;
      setAccessToken(accessToken);
      localStorage.setItem("token", refreshToken);

      if (currentPage) {
        return window.location.replace(`/groups/${currentPage}`);
      } else {
        return window.location.replace("/main/write");
      }
    } catch (e) {
      // window.location.replace("/login");
      toast.error("이미 가입된 이메일 입니다.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onFailure = (err) => {
    console.log("에러", err);
  };

  const navigate = useNavigate();
  return (
    <Wrapper style={{ backgroundImage: `url(${login})` }}>
      <LoginBox>
        <Logo>
          <LogoBox onClick={navigate("/")}>
            <BigLogoSvg />
          </LogoBox>
          <Info>
            <BigMent>나의 팀을 이해하는 곳</BigMent>
            <Ment>
              <SmallMent>일을 잘하는 것만큼 내 팀의 상태를 파악하는 것도 중요하죠.</SmallMent>
              <SmallMent>스테이터스로 팀원의 일정과 상태를 체크하세요.</SmallMent>
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
              <div className="naver">
                <img src={NaverLogin} alt="kakaoLogin" width="32px" height="32px" />
              </div>
              <span>네이버 로그인</span>
            </SocialItem>
            <SocialItem onClick={LoginWithKakao}>
              <div className="kakao">
                <img src={kakaoLogin} alt="kakaoLogin" width="32px" height="32px" />
              </div>
              <span>카카오톡 로그인</span>
            </SocialItem>
            <SocialItem>
              <div className="google">
                <img src={GoogleLoginImage} alt="kakaoLogin" width="32px" height="32px" />
              </div>
              <span>구글 로그인</span>
              <GoogleLogin icon={false} onSuccess={onSuccess} onFailure={onFailure} clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="" />
            </SocialItem>
          </SocialList>
        </ButtonContainer>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
