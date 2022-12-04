import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
  }
  
  html{
    font-size: 15px;
  }

  *{
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.boardColor.yellowGray};
    height: 100vh;
    max-height: 100vh;
    color:#1C1C1C;
    transition: color 0.1s linear;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  button{
    border:none;
    background-color: inherit;
    cursor: pointer;
    outline: none;
    transition: background-color 0.15s linear;
  }

  input{
    outline: none;
  }

  textarea{
    outline: none;
    border: none;
  }

  a{
    color:inherit;
    text-decoration: none;
  }

  input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	 	 transition: background-color 5000s ease-in-out 0s;
		 -webkit-transition: background-color 9999s ease-out;
    	 //-webkit-box-shadow: 0 0 0px 1000px white inset !important;
   }
`;
