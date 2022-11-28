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
  margin: -15px auto;
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
  margin-right: 88.8%;
  position: relative;
  top: 36px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 4px;
  line-height: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Preview = styled.div`
  margin-top: 2%;
  position: relative;
  &:hover {
    transition: 0.3s;
    scale: 1.1;
  }
`;

export const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 0.5rem;
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
  padding: 1rem 1rem;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.green};
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PostInput = styled.textarea`
  width: 100%;
  height: 360px;
  padding: 1rem 1rem;
  border: 1px solid ${(props) => props.theme.color.green};
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  resize: none;
  font-family: "Pretendard";
  font-weight: 400;
  letter-spacing: -1px;
`;

export const SubmitBtn = styled.button`
  width: 68px;
  height: 28px;
  margin-top: 3%;
  display: flex;
  position: relative;
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
