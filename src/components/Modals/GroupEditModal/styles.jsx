import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";
import { motion } from "framer-motion";

export const EditModalBg = styled(motion.div)`
  ${FlexCenterBox};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const EditModal = styled(motion.div)`
  ${FlexColumnBox};
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
`;

export const EditModalHeader = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  margin-bottom: 3rem;
  h4 {
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
  }
  span {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.gray};
    }
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  margin: 0 auto;
  div,
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  }
  label {
    position: absolute;
    right: -0.6rem;
    bottom: -0.6rem;
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

export const GroupInfoForm = styled.form`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    margin-bottom: 0.6rem;
    font-weight: 500;
    font-size: 1rem;
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
