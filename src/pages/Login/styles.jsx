import styled from "styled-components";

export const LoginBox = styled.div`
  width: 500px;
  margin: auto;
`;

export const LoginButton = styled.div`
  width: 244px;
  height: 43px;
  margin: auto;
  background-color: ${(props) => props.theme.color.green};

  border: none;
  border-radius: 5px;

  text-align: center;
  line-height: 43px;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;

  :hover {
    background-color: #35ad70;
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
    cursor: pointer;
    opacity: 50;
  }
`;

export const EmailLogin = styled.div`
  width: 100%;
  height: 43px;
  margin: 25% auto auto 23%;

  font-weight: 600;
  line-height: 43px;

  cursor: pointer;
`;

export const SocialBox = styled.div`
  width: 300px;
  margin-left: 130px;
`;

export const KakaoLogin = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

export const GoogleLogin = styled.div`
  cursor: pointer;
`;

export const NaverLogin = styled.div`
  cursor: pointer;
`;
