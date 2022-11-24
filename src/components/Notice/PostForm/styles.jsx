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
  width: 900px;
  margin: 4% auto 4% auto;
`;

export const Carousel = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;

export const Editor = styled.form`
  width: 100%;
  height: 600px;
  padding: 1rem 1rem;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export const PhotoLabel = styled.label`
  padding: 6px 25px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 4px;
  line-height: 30px;
  color: white;
  cursor: pointer;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Preview = styled.div`
  margin-top: 2%;
`;

export const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const PreviewBox = styled.div`
  width: 100%;
  display: flex;
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
