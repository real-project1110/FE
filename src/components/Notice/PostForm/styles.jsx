import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin: 4% auto 4% auto;
`;

export const SubmitBtn = styled.button`
  width: 68px;
  height: 28px;
  margin-top: 0.5%;
  margin-right: 0px;
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
