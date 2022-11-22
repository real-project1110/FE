import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const Form = styled.form`
  width: 100%;
  margin: 4% auto 4% auto;
  ${FlexColumnBox};
  div {
    width: 100%;
    &:first-child {
      width: 100%;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 68px;
  height: 28px;
  margin-top: 0.5%;
  display: flex;
  position: relative;
  float: right;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 5px;
`;

export const Posting = styled.span`
  margin: 5px 0px 0px 5px;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.055em;
`;

export const PostButton = styled.div`
  margin: 6px 0px 0px 5px;
`;
