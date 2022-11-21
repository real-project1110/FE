import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import kakaoLogin from "../../assets/image/kakaotalk-icon.png";
import NaverLogin from "../../assets/image/btnG_아이콘원형.png";
import GoogleLogin from "../../assets/image/icons8-구글-로고-48.png";
import {
  LoginInput,
  Title,
  Form,
  EmailDiv,
  PasswordDiv,
  FindPassword,
  Or,
  Emailinput,
  PasswordInput,
  ButtonWrap,
  LoginButton,
  SocialButtonWrap,
} from "./styles";
import { signin } from "../../apis/userApi";
import { setAccessToken } from "../../shared/Cookie/Cookie";
import { LogoBox, BigMent } from "../Login/styles";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  // currentPage가 있으면 currentPage로 이동시키기

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const email = watch("email");
  const password = watch("password");

  const ActiveIsPassedLogin = () => {
    return email.includes("@") && password.length >= 8 && !errors.password ? setIsActive(true) : setIsActive(false);
  };

  const onSubmit = async (data) => {
    const response = await signin(data);
    console.log(response);
    if (response.status === 200) {
      setAccessToken(response.data.accessToken);
      navigate("/main");
    }
  };
  return (
    <LoginInput>
      <LogoBox>
        <BigLogoSvg />
      </LogoBox>
      <BigMent>Manage all the statuses of your team.</BigMent>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <EmailDiv>이메일</EmailDiv>
        <Emailinput
          aria-invalid={errors.email ? "#FF2D53" : "#35ad70"}
          placeholder="이메일 입력"
          onKeyUp={ActiveIsPassedLogin}
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "올바른 이메일 형식을 입력해주세요.",
            },
          })}
        />
        <p
          style={{
            textAlign: "left",
            margin: "7px auto",
            width: "334px",
            color: "#FF2D53",
            fontSize: "0.8rem",
            fontWeight: "400",
          }}
        >
          {errors.email?.message}
        </p>
        <PasswordDiv>비밀번호</PasswordDiv>
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onKeyUp={ActiveIsPassedLogin}
          aria-invalid={errors.password ? "#FF2D53" : "#35ad70"}
          {...register("password", {
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
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              message: "영어, 특수문자 포함 8~20자리 입니다.",
            },
          })}
        />
        <p
          style={{
            textAlign: "left",
            margin: "7px auto",
            width: "334px",
            color: "#FF2D53",
            fontSize: "0.8rem",
            fontWeight: "400",
          }}
        >
          {errors.password?.message}
        </p>
        <ButtonWrap>
          <button>계정 찾기</button>
          <FindPassword>비밀번호 찾기</FindPassword>
        </ButtonWrap>
        <LoginButton className={isActive ? "activeLoginBtn" : "loginBtn"}>로그인</LoginButton>
        <Or>또는</Or>
        <SocialButtonWrap>
          <img src={NaverLogin} alt="kakaoLogin" width="32px" height="32px" />
          <img src={kakaoLogin} alt="kakaoLogin" width="32px" height="32px" />
          <img src={GoogleLogin} alt="kakaoLogin" width="32px" height="32px" />
        </SocialButtonWrap>
      </Form>
    </LoginInput>
  );
}

export default Signin;
