import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const Wrapper = styled(motion.div)`
  ${FlexCenterBox}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const EditorWrapper = styled(motion.div)`
  //margin: 4% auto 4% auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 50px;
`;

export const Cancel = styled.div`
  width: 20px;
  height: 20px;
  line-height: 60px;
  margin-left: 90%;
  cursor: pointer;
`;

export const Carousel = styled.div`
  position: relative;
  ${FlexColumnBox};
  width: 600px;
  max-width: 600px;
  max-height: 11rem;
  height: 100%;
  max-height: 500px;

  padding-bottom: 3.7rem;
`;

export const Editor = styled.form`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export const PhotoLabel = styled.label`
  ${FlexAlignBox};
  color: black;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  width: 100%;
  height: 38px;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.color.extraLightGray};
`;

export const ImgInput = styled.input`
  display: none;
`;

export const Preview = styled.div`
  padding: 1rem;
  position: relative;
  &:hover {
    transition: 0.3s;
    scale: 1.05;
    button {
      visibility: visible;
    }
  }
`;

export const PreviewImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const Delete = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  ${FlexCenterBox};
  border-radius: 50%;
  top: 10px;
  right: 1.6rem;
  position: absolute;
  padding: 0.3rem;
  background-color: white;
  box-shadow: 0px 2px 5px ${(props) => props.theme.color.gray};
  visibility: hidden;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const PreviewBox = styled.div`
  width: 100%;
  display: flex;
`;

export const PostInput = styled.textarea`
  width: 100%;
  margin: 0 auto;
  min-height: 300px;
  padding: 1rem;
  resize: none;
  /* &:focus {
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 8px;
  } */
`;

export const SubmitBtn = styled.button`
  ${FlexCenterBox};
  width: 68px;
  height: 28px;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 5px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Posting = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  margin-right: 5px;
`;

export const PostButton = styled.div``;
