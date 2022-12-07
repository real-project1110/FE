import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  //background-color: #ffffff;
  border-radius: 5px;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  ${FlexAlignBox};
  input {
    width: 98%;
    padding: 1rem 1.1rem;
    background-color: ${(props) => props.theme.color.white};
    border: none;
    border-radius: 5px;
    &::placeholder {
      color: #aaaaaa;
      font-size: 14px;
    }
  }
  svg {
    position: absolute;
    right: calc(1.1rem + 1vw);
    color: #aaaaaa;
  }
  margin-bottom: 1rem;
`;

export const PostHeader = styled.div`
  width: 98%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const FreePostTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const PostPreview = styled.div`
  width: 98%;
  padding: 0;
  cursor: pointer;
`;

export const PostButtonTitle = styled.h3`
  width: 100%;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const PostButton = styled.div`
  width: 100%;
  height: 179px;
  border-radius: 8px;
  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonBar = styled.div`
  ${FlexAlignBox};
  height: 37px;
  padding: 0 26px;
  background-color: ${(props) => props.theme.color.extraLightGray};
  //background-color: #f8f8f8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ButtonContent = styled.div`
  position: relative;
  height: 142px;
  padding: 1rem 1rem;
  color: #aaaaaa;
  background-color: ${(props) => props.theme.color.white};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const FakeBtn = styled.div`
  width: 68px;
  height: 28px;
  ${FlexCenterBox};
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: ${(props) => props.theme.color.green};
  border: none;
  border-radius: 5px;
  span {
    margin-right: 6px;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const AllFreePost = styled.div`
  height: 100%;
  width: 98%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const WritePost = styled.div`
  width: 50%;
  display: flex;
`;

export const Post = styled.div`
  height: 46px;
  margin-left: 10px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -5.5%;
  line-height: 46px;
  cursor: pointer;
`;

export const New = styled.div`
  & > span {
    cursor: pointer;
  }
`;

export const Newest = styled.span`
  margin-right: 13px;
  font-size: 14px;
  font-weight: 700;
`;

export const NewestComment = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray};
`;

export const SendComment = styled.div`
  width: 100%;
  margin: 5px 5px 0px 5px;
  color: #1c1c1c;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.055em;
`;
