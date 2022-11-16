import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/Common/Elements/Input";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = (data) => {};

  const emailAuth = async (e) => {
    e.preventDefault();
  };

  return (
    <EmailAuthInput>
      <div style={{ margin: "auto" }}>이메일로 시작하기</div>
      <form style={{ marginTop: "30px" }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "left", marginLeft: "82px", paddingBottom: "3px", fontSize: "0.8rem" }}>이메일</div>
        <Label>
          <Emailinput
            aria-invalid={errors.email ? "#FF2D53" : "#35ad70"}
            placeholder="example@gmail.com"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: "올바른 이메일 형식을 입력해주세요.",
              },
            })}
          />
          <button onClick={emailAuth}>인증번호 발송</button>
        </Label>
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
        {/* <div style={{ textAlign: "left", marginLeft: "82px", marginTop: "10px", paddingBottom: "3px", fontSize: "0.8rem" }}>인증번호</div>
        <AuthNumber
          {...register("auth", {
            required: "인증번호를 입력해주세요",
          })}
        />
        <p
          style={{
            textAlign: "left",
            margin: "3px auto",
            width: "334px",
            color: "#FF2D53",
            fontSize: "0.8rem",
            fontWeight: "400",
          }}
        >
          {errors.auth?.message}
        </p> */}
        <div style={{ textAlign: "left", marginLeft: "82px", marginTop: "10px", paddingBottom: "3px", fontSize: "0.8rem" }}>닉네임</div>
        <Input
          register={{
            ...register("nickname", {
              required: "닉네임을 입력해주세요.",
              maxLength: {
                value: 10,
                message: "10자리 이하로 작성해주세요",
              },
              minLength: {
                value: 2,
                message: "2자리 이상으로 작성해주세요",
              },
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: "형식에 맞지 않는 이름 입니다.",
              },
            }),
          }}
          type={"nickname"}
          errors={errors}
          errorName={"nickname"}
        />
        <div style={{ textAlign: "left", marginLeft: "82px", marginTop: "10px", paddingBottom: "3px", fontSize: "0.8rem" }}>비밀번호</div>
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
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: "영어, 특수문자 포함 8~20자리 입니다.",
              },
            }),
          }}
          type={"password"}
          errors={errors}
          errorName={"password"}
        />
        <div style={{ textAlign: "left", marginLeft: "82px", marginTop: "10px", paddingBottom: "3px", fontSize: "0.8rem" }}>비밀번호 확인</div>
        <Input
          register={{
            ...register("confirm", {
              required: "비밀번호를 확인해주세요.",
              validate: {
                confirmPw: (v) => v === password || "비밀번호가 일치하지 않습니다.",
              },
            }),
          }}
          type={"password"}
          errors={errors}
          errorName={"confirm"}
        />
      </form>
    </EmailAuthInput>
  );
};

export default Join;

const EmailAuthInput = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
  font-weight: 600;
`;

const Label = styled.label`
  position: relative;

  button {
    position: absolute;
    top: -5px;
    right: 5px;
    width: 97px;
    height: 33px;

    font-size: 0.8rem;
    border: 2px solid ${(props) => props.theme.color.gray};

    border-radius: 5px;
    cursor: pointer;
  }
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
