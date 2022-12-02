import axios from "axios";
import React, { useEffect } from "react";
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
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}auth/kakao`, kakaoResult.data, {
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
        console.error(e);
        window.location.replace("/");
        alert("이미 가입된 이메일 입니다.");
      }
    })();
  }, [code]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axios.get(`https://hyunjin9603.shop/auth/kakao?code=${code}`);
  //       console.log(res);
  //       const token = res.headers.authorization;
  //       window.localStorage.setItem("kakao", token);
  //       window.location.replace("/main/write");
  //     } catch (e) {
  //       console.error(e);
  //       // window.location.replace("/signin");
  //     }
  //   })();
  // }, []);

  //토큰 저장
  // const getKakaoToken = async () => {
  //   const authResponse = await axios.post(
  //     "https://kauth.kakao.com/oauth/token",
  //     `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   );
  //   if (authResponse.status !== 200) return alert("카카오 인증 실패!");
  //   const { access_token } = authResponse.data;
  //   if (access_token) {
  //     const kakaoResponse = await axios.post(
  //       "https://kapi.kakao.com/v2/user/me",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //           "Content-type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );
  //     if (kakaoResponse.status === 200) {
  //       console.log(kakaoResponse);
  //       const joinData = {
  //         email: kakaoResponse.data.kakao_account.email,
  //         nickname: kakaoResponse.data.properties.nickname,
  //         avatarImg: kakaoResponse.data.properties.profile_image,
  //         provider: "kakao",
  //       };
  //       const response = await axios.post("https://hyunjin9603.shop/users/signup/post", joinData);
  //       console.log("res", response);
  //       const {
  //         status,
  //         data: { accessToken, refreshToken, currentPage },
  //       } = response;
  //       if (status === 200 || status === 201) {
  //         setAccessToken(accessToken);
  //         localStorage.setItem("token", refreshToken);
  //         if (currentPage) {
  //           return window.location.replace(`/groups/${currentPage}`);
  //         } else {
  //           return window.location.replace("/main/write");
  //         }
  //       } else {
  //         return alert("어떻게 실패했는지 메세지 전해주세요 status 별로");
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (!location.search) return;
  //   getKakaoToken();
  // }, []);

  return <div>로그인 중입니당~</div>;
}

export default KakaoLogin;
