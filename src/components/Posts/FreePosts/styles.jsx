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
