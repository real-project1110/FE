import axios from "axios";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAccessToken } from "../../shared/Cookie/Cookie";

function KakaoLogin() {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const kakaoResult = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        if (kakaoResult.status !== 200) return;
        const token = kakaoResult.data.access_token;
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}auth/kakao`,
          kakaoResult.data,
          {
            headers: {
              Authorization: token,
            },
          }
        );
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
        console.error(e);
        window.location.replace("/");
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
    })();
  }, [code]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default KakaoLogin;
