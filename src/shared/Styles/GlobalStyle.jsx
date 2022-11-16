import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  html{
    font-size: 15px;
  }
  *{
    box-sizing: border-box;
  }
  body{
    background-color: ${(props) => props.theme.boardColor.lightGray};
    height:100vh;
    overflow-y: hidden;
    color:#1C1C1C;
    transition: color 0.1s linear;
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
    	 -webkit-box-shadow: 0 0 0px 1000px white inset !important;
   }
`;
