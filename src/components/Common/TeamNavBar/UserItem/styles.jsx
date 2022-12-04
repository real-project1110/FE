import styled, { keyframes } from "styled-components";
import { FlexAlignBox } from "../../../../shared/Styles/flex";

export const UserContainer = styled.li`
  ${FlexAlignBox};
  position: relative;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #f4f4f4;
  }
  span {
    ${FlexAlignBox};
    strong {
      margin-left: 0.7rem;
      color: ${(props) => props.theme.color.gray};
    }
  }
`;

export const UserImg = styled.div`
  margin-right: 0.5rem;
  position: relative;
  img {
    width: 1.3rem;
    height: 1.3rem;
    object-fit: cover;
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 50%;
  }
  div {
    position: absolute;
    right: -0.2rem;
    bottom: 0;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${(props) => props.theme.color.green};
    border: 2px solid white;
    border-radius: 50%;
  }
`;

export const UnReadBox = styled.div`
  padding: 0.2rem 0.5rem;
  background-color: ${(props) => props.theme.color.red};
  border-radius: 100px;
  color: white;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

export const Icon = styled.div`
  margin-left: 0.5rem;
  img {
    width: 1rem;
  }
`;

const ModalAni = keyframes`
  0%{
    opacity: 0;
  }
  99%{
    opacity:0;
  }
  100%{
    opacity: 1;
  }
`;

export const UserStatusModal = styled.p`
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  z-index: 1000;
  border: 1px solid ${(props) => props.theme.color.gray};
  padding: 0.5rem;
  border-radius: 5px;
  animation: ${ModalAni} 0.5s linear;
`;
