import styled from "styled-components";

export const Title = styled.div`
  margin: auto;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const EmailDiv = styled.div`
  text-align: left;
  margin-left: 82px;
  padding-bottom: 3px;
  font-size: 0.8rem;
`;

export const Or = styled.p`
  margin-top: 60px;
  color: gray;
`;

export const FindPassword = styled.button`
  margin-left: 30px;
`;

export const PasswordDiv = styled.div`
  text-align: left;
  margin-left: 82px;
  margin-top: 10px;
  padding-bottom: 3px;
  font-size: 0.8rem;
`;

export const LoginInput = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 5%;
  text-align: center;
  font-weight: 600;
`;

export const Emailinput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 1px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

export const PasswordInput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 1px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

export const ButtonWrap = styled.div`
  width: 334px;
  height: 17px;
  margin: 30px auto auto auto;
`;

export const LoginButton = styled.button`
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

export const SocialButtonWrap = styled.div`
  width: 40%;
  margin: 30px auto auto auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
