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
  height: 300px;
  padding: 1rem 1rem;
  text-align: center;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
`;

export const Title = styled.p``;

export const ColorPicker = styled.div`
  width: 80%;
  margin: 4% auto auto auto;
`;

export const StatusInput = styled.input`
  width: 80%;
  height: 50px;
  margin: 5% auto auto auto;
  padding: 1rem 1rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;
  letter-spacing: -0.3px;
`;

export const High = styled.div`
  ${FlexBetweenBox}
`;

export const Low = styled.div`
  ${FlexBetweenBox}
  margin-top: 8%;
`;

export const ButtonWrap = styled.div`
  width: 30%;
  margin: 5% auto auto auto;
  ${FlexBetweenBox}
`;

export const AddStatus = styled.button`
  width: 50px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 4px;
  line-height: 30px;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CancelAdd = styled.button`
  width: 50px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 4px;
  line-height: 30px;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
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
  display: flex;
`;
