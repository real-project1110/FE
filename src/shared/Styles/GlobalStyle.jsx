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
  }
  button{
    border:none;
    background-color: inherit;
    cursor: pointer;
    outline: none;
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
`;
