import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexColumnBox};
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 660px;
  ${FlexColumnBox};
  align-items: center;
`;

export const Step = styled.span`
  margin-top: ${(props) => (props.isThree ? "23vh" : "30vh")};
  opacity: ${(props) => (props.isFour ? "0" : "1")};
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 11px;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 11px;
`;

export const SubTitle = styled.span`
  font-size: 1.2rem;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    box-shadow: 0px 0px 6px #58c08b;
  }
`;

export const Button = styled.button`
  margin-top: 49px;
  width: 13rem;
  height: 2.9rem;
  font-size: 1.2rem;
  ${FlexCenterBox};
  background: ${(props) =>
    props.isValid ? props.theme.color.green : props.theme.color.gray};
  border-radius: 5px;
  color: white;
`;

export const LaterButton = styled.span`
  margin-top: 49px;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray};
  transition: color 0.1s linear;
  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  button {
    position: absolute;
    right: 1rem;
    padding: 0.4rem 0.6rem;
    color: ${(props) => (props.isValid ? "inherit" : props.theme.color.gray)};
    font-weight: 400;
    font-size: 1rem;
    background-color: #fbfbfa;
    border: ${(props) =>
      props.isValid
        ? `2px solid ${props.theme.color.green}`
        : `1px solid rgba(0, 0, 0, 0.1)`};
    border-radius: 5px;
  }
`;

export const Emails = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 11px;
`;

export const Email = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.color.green};
  border-radius: 100px;
  margin-right: 1rem;
  margin-bottom: 11px;
  button {
    width: 1rem;
    margin-left: 9px;
    padding: 0;
    ${FlexCenterBox};
    svg {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const ImgLabel = styled.label`
  ${FlexCenterBox};
  width: 16rem;
  height: 16rem;
  background-color: #e9e9e9;
  background-image: url(${(props) => props._background});
  background-size: cover;
  background-position: center center;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    span {
      svg {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  span {
    ${FlexCenterBox};
    svg {
      width: 5rem;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const GroupImg = styled(ImgLabel)`
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const File = styled.input`
  display: none;
`;

export const DeleteImgBtn = styled.span`
  margin-top: 1rem;
  color: #4281db;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: #739bd4;
  }
`;
