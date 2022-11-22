import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  max-height: ${(props) => props.theme.bodyHeight.normal};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 1.5%;
  font-weight: 700;
  font-size: 14px;
`;

export const NoticeTitle = styled.div`
  height: 46px;
  padding-left: 2%;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -5.5%;
  line-height: 46px;
`;

export const AllPost = styled.div`
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const PostImg = styled.img`
  width: 170px;
  height: 103.15px;
  border: none;
  border-radius: 8px;
`;

export const Post = styled.div`
  width: 90%;
  height: 127px;
  margin: 3% auto 3% auto;
  padding: 10px 10px 10px 10px;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
`;

export const ContentBox = styled.div`
  margin-left: 3%;
  width: 70%;
`;

export const PostTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export const PostContent = styled.div`
  width: 100%;
  height: 61px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.055em;
  color: ${(props) => props.theme.color.gray};
  overflow-y: hidden;
`;

export const PostInfoWrap = styled.div`
  width: 100%;
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
`;

export const PostInfo = styled.div`
  width: 200px;
`;

export const PostWriter = styled.span`
  width: 33.24px;
  height: 12px;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;

export const Vector = styled.span`
  margin-left: 14%;
  margin-right: 14%;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;
export const PostDate = styled.span`
  width: 64.41px;
  height: 12px;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.color.gray};
`;
export const PostLike = styled.span`
  margin-right: 15px;
  cursor: pointer;
`;

export const LikeCount = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
`;
