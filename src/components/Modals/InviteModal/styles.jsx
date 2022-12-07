import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FlexAlignBox,
  FlexBetweenBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const Wrapper = styled(motion.div)`
  position: fixed;
  ${FlexCenterBox};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const InviteForm = styled(motion.form)`
  ${FlexColumnBox};
  justify-content: space-between;
  width: 30vw;
  min-width: 25rem;
  max-width: 30rem;
  height: 23rem;
  padding: 2rem 1.5rem;
  transform: translateY(-80px);
  background-color: ${(props) => props.theme.layoutColor.white};
  border-radius: 10px;
  z-index: 9999;
  margin-top: -20vh;
`;

export const FormWrapper = styled.div`
  ${FlexColumnBox};
  height: 100%;
`;

export const FormHeader = styled.div`
  ${FlexBetweenBox};
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TeamName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ModalOutBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const Label = styled.label`
  ${FlexColumnBox};
  span {
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const InputBox = styled.div`
  ${FlexBetweenBox};
  align-items: center;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.7rem;
  input {
    width: 100%;
    padding: 0.5rem 0.5rem;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 5px 0px 0px 5px;
    &:focus {
      border: 1px solid ${(props) => props.theme.color.green};
    }
  }
  button {
    width: 5rem;
    height: 100%;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.green};
    border-radius: 0px 5px 5px 0px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;

export const InviteList = styled.ul`
  ${FlexColumnBox};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

export const InviteItem = styled.li`
  ${FlexAlignBox};
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 0.6rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 5px;
  span {
    margin-right: 0.8rem;
    color: ${(props) => props.theme.color.gray};
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.red};
    }
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.green};
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;
