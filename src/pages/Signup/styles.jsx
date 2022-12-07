import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox, FlexColumnBox } from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexCenterBox};
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 500px 450px 500px;
  justify-content: center;
`;

export const SignUpContainer = styled.div`
  ${FlexColumnBox};
  align-items: center;
  width: 500px;
  font-weight: 600;
  margin-bottom: 10vh;
`;

export const SignUpLogo = styled.div`
  ${FlexColumnBox};
  align-items: center;
`;

export const JoinForm = styled.form`
  ${FlexColumnBox};
  width: 22rem;
  align-items: center;
  margin-top: 30px;
`;

export const InputBox = styled.div`
  ${FlexColumnBox};
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  ${FlexAlignBox};
`;

export const AuthBtn = styled.button`
  position: absolute;
  right: 3px;
  min-width: 5.5rem;
  background-color: ${(props) => (props.isValid ? props.theme.color.lightGray : props.theme.color.gray)};
  color: white;

  padding: 0.6rem 0.5rem;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const Emailinput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1.3px solid ${(props) => props._border};
  border-radius: 5px;
  &:focus {
    border: none;
    box-shadow: 0px 0px 5px ${(props) => props._border};
  }
`;

export const Title = styled.div`
  margin: auto;
`;

export const StTitle = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

export const Join = styled.button`
  width: 100%;
  height: 43px;
  margin-top: 10%;
  background-color: ${(props) => (props.isValid ? props.theme.color.green : props.theme.color.gray)};
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;

export const NextButton = styled.button`
  width: 334px;
  padding: 0.7rem;
  margin-top: 10%;
  background-color: ${(props) => props.theme.color.gray};
  border-radius: 5px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: 1.1rem;
  cursor: auto;
`;

export const SuccessNextButton = styled(NextButton)`
  background-color: ${(props) => props.theme.color.green};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;
