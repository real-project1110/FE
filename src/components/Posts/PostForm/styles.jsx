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
  margin: 4% auto 4% auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 50px;
`;

export const Carousel = styled.div`
  width: 600px;
  max-width: 600px;
  height: 100vh;
  max-height: 500px;
  padding: 0rem 1rem;
`;

export const Editor = styled.form`
  width: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export const PhotoLabel = styled.label`
  border: none;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  & > div {
    width: 100%;
    height: 30px;
    padding: 0 1rem;
    line-height: 30px;
    background-color: ${(props) => props.theme.color.extraLightGray};
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Preview = styled.div`
  &:hover {
    transition: 0.3s;
    scale: 1.1;
  }
`;

export const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  object-fit: cover;
`;

export const Delete = styled.button`
  top: 10px;
  left: 80px;
  position: absolute;
`;

export const PreviewBox = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid gray;
`;

export const PostInput = styled.textarea`
  width: 100%;
  height: 360px;
  border: 1px solid gray;
  resize: none;
  font-family: "Pretendard";
  font-weight: 400;
  letter-spacing: -1px;
`;

export const SubmitBtn = styled.button`
  width: 68px;
  height: 28px;
  display: flex;
  float: right;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Posting = styled.span`
  margin: 4px 0px 0px 5px;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.055em;
`;

export const PostButton = styled.div`
  margin: 5.5px 0px 0px 5px;
`;
