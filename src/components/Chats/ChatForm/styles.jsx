import styled from "styled-components";
import { FlexBetweenBox, FlexCenterBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor.yellowGray};

  padding: 0.8rem 1rem 1.6rem 1rem;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  width: 100%;
  min-height: 5.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.lightGray};
`;
export const TextArea = styled.textarea`
  padding: 10px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  resize: none !important;
  outline: none !important;
`;
export const ButtonContainer = styled.div`
  ${FlexBetweenBox};
  padding: 0 10px;
`;
export const Buttons = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    width: 1px;
    height: 15px;
    margin-right: 10px;
    border-left: 1px solid ${(props) => props.theme.color.gray};
  }
  svg {
    margin-right: 15px;
    &:nth-child(3) {
      margin-right: 10px;
    }
  }
`;
export const Button = styled.button`
  ${FlexCenterBox};
  min-width: 6rem;
  background-color: ${(props) => props.theme.color.green};
  padding: 5px 8px;
  font-size: 1rem;
  border-radius: 5px;
  color: white;
  svg {
    margin-left: 7px;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.hoverGreen};
  }
`;
