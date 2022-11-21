import { toast } from "@mobiscroll/react";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { checkEmail, signup, checkEmailNum } from "../../apis/userApi";
import Input from "../../components/Common/Elements/Input";
import { EmailAuthInput, Title, JoinForm, StTitle, Label, Emailinput } from "./styles";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  const [authEmailMode, setAuthEmailMode] = useState(false);

  const notify = () => toast("회원가입 성공!");

  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      delete data.confirm;
      const response = await signup(data);
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/");
      } else {
        return alert("회원가입 실패");
      }
    },
    [navigate]
  );

  // 이메일 중복 검사 및 인증 번호 받기
  const emailAuth = async (e) => {
    e.preventDefault();
    console.log(watch("email"));
    const response = await checkEmail({ email: watch("email") });
    if (response.status === 200) {
      alert("인증번호 발송");
      setAuthEmailMode(true);
    } else {
      return alert("이메일을 확인해주세요");
    }
  };

  // 이메일 인증번호 보내기
  const checkEmailAuth = async (e) => {
    e.preventDefault();
    console.log("클릭");
    const response = await checkEmailNum({
      email: watch("email"),
      certificationNum: Number(watch("emailNum")),
    });
    console.log(response);
    if (response.status === 200) {
      alert("인증성공");
    }
  };

  return (
    <EmailAuthInput>
      <Title>이메일로 시작하기</Title>
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />
        <StTitle>이메일</StTitle>
        <Label>
          {authEmailMode ? (
            <Emailinput {...register("emailNum")} type="number" />
          ) : (
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
          )}
          {authEmailMode ? <button onClick={checkEmailAuth}>인증 확인</button> : <button onClick={emailAuth}>인증번호 발송</button>}
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
        <StTitle>닉네임</StTitle>
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
        <StTitle>비밀번호</StTitle>
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
                message: "영어, 숫자, 특수문자 포함 8~20자리 입니다.",
              },
            }),
          }}
          type={"password"}
          errors={errors}
          errorName={"password"}
        />
        <StTitle>비밀번호 확인</StTitle>
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
        <button>가입</button>
      </JoinForm>
    </EmailAuthInput>
  );
};

export default Signup;
