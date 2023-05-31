import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import kakaoLogin from "../../assets/image/kakaotalk-icon.png";
import NaverLogin from "../../assets/image/btnG_아이콘원형.png";
import GoogleLogin from "../../assets/image/icons8-구글-로고-48.png";
import signinImage from "../../assets/image/signinImage.webp";
import {
  LoginContainer,
  Title,
  Form,
  Or,
  ButtonWrap,
  LoginButton,
  SocialButtonWrap,
  SignInLogo,
  Wrapper,
  BigMent,
  LogoBox,
  ImageDiv,
} from "./styles";
import Input from "../../components/Common/Elements/Input";
import { signin } from "../../apis/userApi";
import { setAccessToken } from "../../shared/Cookie/Cookie";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import { useNavigate } from "react-router-dom";
import CustomHelmet from "../../components/Common/Elements/CustomHelmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const LoginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  // currentPage가 있으면 currentPage로 이동시키기

  const [isActive, setIsActive] = useState(false);

  const email = watch("email");
  const password = watch("password");

  const ActiveIsPassedLogin = () => {
    return email.includes("@") && password.length >= 8 && !errors.password
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onSubmit = async (data) => {
    try {
      const response = await signin(data);
      if (!response.data) return alert("회원 정보를 찾을 수 없습니다.");
      const {
        status,
        data: { accessToken, refreshToken, currentPage },
      } = response;

      if (status === 200) {
        setAccessToken(accessToken);
        localStorage.setItem("token", refreshToken);
        if (currentPage) {
          return window.location.replace(`/groups/${currentPage}`);
        } else {
          return window.location.replace("/main/write");
        }
      }
    } catch (err) {
      toast.error(err.response.data.errorMessage, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Wrapper>
      <CustomHelmet title={"로그인"} />
      <div></div>
      <LoginContainer>
        <SignInLogo>
          <LogoBox onClick={() => navigate("/")}>
            <BigLogoSvg />
          </LogoBox>
          <BigMent>나의 팀을 이해하는 곳</BigMent>
        </SignInLogo>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={{
              ...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "올바른 이메일 형식을 입력해주세요.",
                },
              }),
            }}
            type={"email"}
            placeholder="이메일 입력"
            onKeyUp={ActiveIsPassedLogin}
            _border={
              !watch("email") ? "#BBBBBB" : errors.email ? "#FF2D53" : "#5FCB94"
            }
            label={"이메일"}
            errors={errors}
            errorName={"email"}
          />
          <Input
            register={{
              ...register("password", {
                required: "비밀번호를 입력해주세요.",
                maxLength: {
                  value: 20,
                  message: "20자리 이하로 작성해주세요",
                },
                minLength: {
                  value: 8,
                  message: "8자리 이상으로 작성해주세요",
                },
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message: "영어, 특수문자 포함 8~20자리 입니다.",
                },
              }),
            }}
            type={"password"}
            placeholder="비밀번호 입력"
            onKeyUp={ActiveIsPassedLogin}
            _border={
              !watch("password")
                ? "#BBBBBB"
                : errors.password
                ? "#FF2D53"
                : "#5FCB94"
            }
            label={"비밀번호"}
            errors={errors}
            errorName={"password"}
          />
          <ButtonWrap>
            <button>계정 찾기</button>
            <button>비밀번호 찾기</button>
          </ButtonWrap>
          <LoginButton className={isActive ? "activeLoginBtn" : "loginBtn"}>
            로그인
          </LoginButton>
          <Or>
            <span>또는</span>
          </Or>
          <SocialButtonWrap>
            <div className="naver">
              <img
                src={NaverLogin}
                alt="NaverLogin"
                width="32px"
                height="32px"
              />
            </div>
            <div className="kakao">
              <img
                src={kakaoLogin}
                alt="kakaoLogin"
                width="32px"
                height="32px"
                onClick={LoginWithKakao}
              />
            </div>
            <div className="google">
              <img
                src={GoogleLogin}
                alt="GoogleLogin"
                width="32px"
                height="32px"
              />
            </div>
          </SocialButtonWrap>
        </Form>
      </LoginContainer>
      <ImageDiv>
        <img src={signinImage} alt={signinImage} />
      </ImageDiv>
      <ToastContainer />
    </Wrapper>
  );
}

export default Signin;
