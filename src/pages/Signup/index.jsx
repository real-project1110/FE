import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkEmail, signup, checkEmailNum } from "../../apis/userApi";
import Input from "../../components/Common/Elements/Input";
import {
  SignUpLogo,
  Title,
  JoinForm,
  StTitle,
  Label,
  Emailinput,
  NextButton,
  Join,
  SuccessNextButton,
  Wrapper,
  SignUpContainer,
  InputBox,
  AuthBtn,
} from "./styles";
import { LogoBox, BigMent } from "../Login/styles";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import { ImageDiv } from "../Signin/styles";
import signinImage from "../../assets/image/signinImage.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  // 인증번호 전송 유/무에 의한 버튼 변경
  const [authEmailMode, setAuthEmailMode] = useState(false);

  // submit 시 이메일 인증 여부 체크
  const [isAuth, setIsAuth] = useState(false);
  const [checkIsAuth, setCheckIsAuth] = useState(false);

  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      if (isAuth === true) {
        delete data.confirm;
        delete data.emailNum;
        const response = await signup(data);
        if (response.status === 201) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/signin");
        } else {
          return toast.error("회원가입 실패", {
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
      } else {
        return toast.error("이메일 인증을 해주세요", {
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
    },
    [navigate, isAuth]
  );

  // 이메일 중복 검사 및 인증 번호 받기
  const emailAuth = async (e) => {
    e.preventDefault();
    const response = await checkEmail({ email: watch("email") });
    if (response.status === 200) {
      toast.success("인증번호 발송", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAuthEmailMode(true);
    } else if (response.status === 400) {
      return toast.error("이미 가입된 이메일 입니다.", {
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

  // 이메일 인증번호 보내기
  const checkEmailAuth = async (e) => {
    e.preventDefault();
    const response = await checkEmailNum({
      email: watch("email"),
      certificationNum: Number(watch("emailNum")),
    });
    if (response.status === 200) {
      toast.success("인증성공", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsAuth(true);
    } else {
      toast.error("인증번호를 확인해주세요!", {
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

  const nextStep = () => {
    setCheckIsAuth(true);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <SignUpContainer>
        <SignUpLogo>
          <LogoBox onClick={() => navigate("/")}>
            <BigLogoSvg />
          </LogoBox>
          <BigMent>나의 팀을 이해하는 곳</BigMent>
        </SignUpLogo>
        <Title>이메일로 시작하기</Title>
        <JoinForm onSubmit={handleSubmit(onSubmit)}>
          {checkIsAuth ? null : (
            <InputBox>
              <StTitle>이메일</StTitle>
              <Label>
                <Emailinput
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                      message: "올바른 이메일 형식을 입력해주세요.",
                    },
                  })}
                  _border={!watch("email") ? "#BBBBBB" : errors.email ? "#FF2D53" : "#5FCB94"}
                />
                {authEmailMode ? (
                  <>
                    <AuthBtn style={{ backgroundColor: "#58C08B", color: "#ffffff" }} isValid={errors.email} onClick={emailAuth}>
                      인증번호 재발송
                    </AuthBtn>
                  </>
                ) : (
                  <>
                    <AuthBtn style={{ backgroundColor: "#58C08B", color: "#ffffff" }} isValid={errors.email} onClick={emailAuth}>
                      인증번호 발송
                    </AuthBtn>
                  </>
                )}
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
            </InputBox>
          )}
          {authEmailMode ? (
            <>
              {checkIsAuth ? null : (
                <InputBox>
                  <Label>
                    <Input
                      register={{ ...register("emailNum") }}
                      type={"number"}
                      _border={!watch("emailNum") || watch("emailNum")?.length < 5 ? "#BBBBBB" : "#5FCB94"}
                      label={"인증번호"}
                    ></Input>
                    <AuthBtn
                      style={{
                        marginTop: "-6px",
                        backgroundColor: "#58C08B",
                        color: "#ffffff",
                      }}
                      onClick={checkEmailAuth}
                    >
                      인증번호 확인
                    </AuthBtn>
                  </Label>
                </InputBox>
              )}
            </>
          ) : null}
          {checkIsAuth ? (
            <>
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
                _border={!watch("nickname") ? "#BBBBBB" : errors.nickname ? "#FF2D53" : "#5FCB94"}
                label={"닉네임"}
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
                      value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      message: "영어, 숫자, 특수문자 포함 8~20자리 입니다.",
                    },
                  }),
                }}
                type={"password"}
                errors={errors}
                errorName={"password"}
                _border={!watch("password")?.length === 0 ? "#BBBBBB" : errors.password ? "#FF2D53" : "#5FCB94"}
                label={"비밀번호"}
              />
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
                _border={!watch("confirm")?.length === 0 ? "#BBBBBB" : errors.confirm ? "#FF2D53" : "#5FCB94"}
                label={"비밀번호 확인"}
              />
            </>
          ) : null}
          {checkIsAuth ? (
            <Join isValid={watch("nickname") && watch("password") && watch("confirm") && Object.values(errors).length === 0}>가입하기</Join>
          ) : (
            <>{isAuth ? <SuccessNextButton onClick={nextStep}>다음 단계</SuccessNextButton> : <NextButton disabled>다음 단계</NextButton>}</>
          )}
        </JoinForm>
      </SignUpContainer>
      <ImageDiv>
        <img src={signinImage} alt={signinImage} />
      </ImageDiv>
    </Wrapper>
  );
};

export default Signup;
