import styled from "styled-components";

export const Form = styled.form`
  margin-top: 4%;
`;

export const PostTextArea = styled.textarea`
  width: 1062px;
  height: 142px;
  margin-top: 1%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.5px;
  letter-spacing: -0.3px;
  resize: none;
`;

export const Property = styled.div`
  margin: -25px 18px 0px 18px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const FontProperty = styled.div`
  display: flex;
  width: 300px;
  cursor: pointer;
`;

export const Tilt = styled.div`
  margin-left: 7px;
`;

export const UnderLine = styled.div`
  margin-left: 10px;
`;

export const SubmitBtn = styled.button`
  width: 68px;
  height: 28px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 5px;
  display: flex;
  margin-top: -10px;
  margin-right: -10px;
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

export const Vector = styled.span`
  margin-top: 2px;
  margin-left: 5%;
  margin-right: 5%;
  font-weight: 300;
  font-size: 14px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;
