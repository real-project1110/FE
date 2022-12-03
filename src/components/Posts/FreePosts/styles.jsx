import styled from "styled-components";

export const PostHeader = styled.div`
  width: 100%;
  height: 46px;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`;

export const PostPreview = styled.div`
  width: 100%;
  padding: 0 2rem;
  cursor: pointer;
`;

export const PostButtonTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
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
  height: 37px;
  padding: 0.7rem 1rem 0 1rem;
  background-color: ${(props) => props.theme.color.lightGray};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ButtonContent = styled.div`
  height: 142px;
  padding: 1rem 1rem;
  color: gray;
  background-color: ${(props) => props.theme.color.extraLightGray};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const AllFreePost = styled.div`
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
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
  cursor: pointer;
  line-height: 44px;
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
  margin: 5px 0px 0px 5px;
  color: #1c1c1c;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.055em;
`;
