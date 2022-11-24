import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexCenterBox}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const EditorWrapper = styled.div`
  width: 800px;
  margin: 4% auto 4% auto;
  z-index: 9999;
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
