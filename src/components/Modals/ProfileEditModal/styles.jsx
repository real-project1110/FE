import styled from "styled-components";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const SideContainer = styled.div`
  ${FlexColumnBox};
  position: absolute;
  right: 0;
  width: 25rem;
  height: 100%;
  background-color: ${(props) => props.theme.boardColor.lightGray};
`;

export const TitleBox = styled.div`
  ${FlexAlignBox};
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.white};
  span {
    ${FlexCenterBox};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 1.5rem;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
    }
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  /* padding-top: 20%;
  padding: 20% 10% 0 10%; */
`;
export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  div,
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  label {
    position: absolute;
    right: 0.2rem;
    bottom: 0;
    height: 2.8rem;
    background-color: ${(props) => (props) => props.theme.color.green};
    border-radius: 50%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    ${FlexCenterBox}
    width: 2.8rem;
    svg {
      width: 1.5rem;
      color: white;
    }
    input {
      display: none;
    }
    &:hover {
      background-color: ${(props) => (props) => props.theme.color.hoverGreen};
    }
  }
`;

export const Switch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const SwitchBtn = styled.button`
  width: 9rem;
  height: 2.4rem;
  margin: 0 1rem;
  color: ${(props) => (props.focus ? "white" : props.theme.color.black)};
  border: ${(props) => (props.focus ? "0px" : "1px")} solid
    ${(props) => props.theme.color.gray};
  border-radius: 5px;
  background-color: ${(props) =>
    props.focus ? props.theme.color.green : "inherit"};
`;

export const UserInfoForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  div {
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 1.3rem;
    border-radius: 5px;

    input {
      width: 100%;
      padding: 0.7rem 1rem;
      color: ${(props) => props.theme.color.black};
      font-size: 1.1rem;
      border: 1px solid ${(props) => props.theme.color.gray};
      border-radius: 5px 0px 0px 5px;
      &:focus-within {
        border: 1px solid ${(props) => props.theme.color.green};
      }
    }
    button {
      width: 5rem;
      color: white;
      font-size: 1rem;
      background-color: ${(props) => props.theme.color.green};
      border-radius: 0px 3px 3px 0px;
      &:hover {
        background-color: ${(props) => props.theme.color.hoverGreen};
      }
    }
    span {
      padding: 1rem 1rem;
      font-size: 0.8rem;
    }
  }
  svg {
    position: absolute;
    right: 1rem;
    bottom: 0.7rem;
    width: 1.5rem;
    transform: rotateZ(270deg);
  }
`;

export const Location = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    svg {
      color: white;
    }
  }
`;

export const PasswordForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  input {
    width: 100%;
    margin-bottom: 1.3rem;
    padding: 0.7rem 1rem;
    color: ${(props) => props.theme.color.black};
    font-size: 1.1rem;

    border: 1px solid ${(props) => props.theme.color.lightGray};
    border-radius: 5px;
    &:focus {
      border: 1px solid ${(props) => props.theme.color.green};
    }
  }
  span {
    margin-top: -10px;
    margin-bottom: 10px;
    color: #fb3131;
    font-size: 0.8rem;
  }
`;

export const PasswordBtn = styled.button`
  background-color: ${(props) =>
    props.focus ? props.theme.color.green : "none"};
  color: ${(props) => (props.focus ? "white" : props.theme.color.gray)};
  width: 100%;
  height: 41px;
  padding: 0.7rem 1rem;
  border: ${(props) => (props.focus ? "0px" : "1px")} solid
    ${(props) => props.theme.color.gray};
  border-radius: 5px;
`;
