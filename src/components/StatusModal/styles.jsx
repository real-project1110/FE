import styled from "styled-components";
import { FlexBetweenBox, FlexCenterBox } from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexCenterBox}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Status = styled.form`
  width: 500px;
  ${FlexCenterBox}
  padding: 3rem 3rem;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Title = styled.p``;

export const ColorPicker = styled.div`
  width: 100%;
  display: grid;
  margin: 2rem 0;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 20px 0;
`;

export const StatusInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 1rem 1rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;
  letter-spacing: -0.3px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin-top: 2rem;

  ${FlexCenterBox}
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.isAdd ? props.theme.color.green : "rgba(0, 0, 0, 0.2)")};
  margin: 0 1rem;
  border: none;
  border-radius: 4px;
  line-height: 30px;
  font-size: 1.1rem;
  color: white;
  &:hover {
    background-color: ${(props) => (props.isAdd ? props.theme.color.hoverGreen : props.theme.color.gray)};
  }
`;

export const Color = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.value};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
    transition: 0.4s;
    scale: 1.1;
  }
  outline: ${(props) => (props.isFocus ? `3px solid ${props.value}` : "none")};
  outline-offset: 3px;
`;

export const SelectedColor = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 27px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.value};
  position: relative;
`;

export const InputWrap = styled.label`
  width: 100%;
  display: flex;
`;
