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
      <div style={{ margin: "auto" }}>로그인</div>
      <form style={{ marginTop: "30px" }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "left", marginLeft: "82px", paddingBottom: "3px", fontSize: "0.8rem" }}>이메일</div>
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
        <div style={{ textAlign: "left", marginLeft: "82px", marginTop: "10px", paddingBottom: "3px", fontSize: "0.8rem" }}>비밀번호</div>
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
          <button style={{ marginLeft: "30px" }}>비밀번호 찾기</button>
        </ButtonWrap>
        <LoginButton className={isActive ? "activeLoginBtn" : "loginBtn"}>로그인</LoginButton>
        <p style={{ marginTop: "60px", color: "gray" }}>또는</p>
        <SocialButtonWrap>
          <img src={NaverLogin} alt="kakaoLogin" width="32px" height="32px" />
          <img src={kakaoLogin} alt="kakaoLogin" width="32px" height="32px" />
          <img src={GoogleLogin} alt="kakaoLogin" width="32px" height="32px" />
        </SocialButtonWrap>
      </form>
    </LoginInput>
  );
}

export default Signin;

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
