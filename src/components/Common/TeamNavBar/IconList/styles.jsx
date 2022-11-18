import styled from "styled-components";
import { FlexCenterBox } from "../../../../shared/Styles/flex";

export const StatusIcons = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0 0.5rem;
  margin: 0.2rem 0 0.5rem 0;
`;

export const Icon = styled.li`
  ${FlexCenterBox};
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) =>
    props.isFocus
      ? `1px solid ${props.theme.color.green}`
      : `1px solid ${props.theme.color.lightGray}`};
  &:hover {
    background-color: ${(props) => props.theme.color.extraLightGray};
    box-shadow: none;
  }
`;

export const MessageModal = styled.form`
  width: 100%;
  height: 60px;
  input {
    width: 100%;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.color.lightGray};
    border: none;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid ${(props) => props.theme.color.lightGray};
    button {
      padding: 0.4rem;
      &:first-child {
        color: white;
        background-color: ${(props) => props.theme.color.green};
        &:hover {
          background-color: ${(props) => props.theme.color.green};
        }
      }
    }
  }
  margin-bottom: 0.5rem;
`;
