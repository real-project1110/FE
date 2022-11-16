import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import kakaoLogin from "../assets/image/kakaotalk-icon.png";
import NaverLogin from "../assets/image/btnG_아이콘원형.png";
import GoogleLogin from "../assets/image/icons8-구글-로고-48.png";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const [isActive, setIsActive] = useState(false);

  const email = watch("email");
  const password = watch("password");

  const ActiveIsPassedLogin = () => {
    return email.includes("@") && password.length >= 8 && !errors.password ? setIsActive(true) : setIsActive(false);
  };

  const onSubmit = (data) => {};
  return (
    <LoginInput>
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

const Title = styled.div`
  margin: auto;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const EmailDiv = styled.div`
  text-align: left;
  margin-left: 82px;
  padding-bottom: 3px;
  font-size: 0.8rem;
`;

const Or = styled.p`
  margin-top: 60px;
  color: gray;
`;

const FindPassword = styled.button`
  margin-left: 30px;
`;

const PasswordDiv = styled.div`
  text-align: left;
  margin-left: 82px;
  margin-top: 10px;
  padding-bottom: 3px;
  font-size: 0.8rem;
`;

const LoginInput = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
  font-weight: 600;
`;

const Emailinput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

const PasswordInput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

const ButtonWrap = styled.div`
  width: 334px;
  height: 17px;
  margin: 30px auto auto auto;
`;

const LoginButton = styled.button`
  width: 213px;
  height: 43px;
  margin-top: 90px;
  border-radius: 5px;
  color: #ffffff;

  font-size: 1.2rem;
  font-weight: 700;

  &.activeLoginBtn {
    background-color: #35ad70;
  }

  &.loginBtn {
    background-color: ${(props) => props.theme.color.gray};
  }
`;

const SocialButtonWrap = styled.div`
  width: 40%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;
