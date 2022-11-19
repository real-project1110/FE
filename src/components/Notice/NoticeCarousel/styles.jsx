import styled from "styled-components";

export const Title = styled.p`
  margin-top: 1.5%;
  font-weight: 700;
  font-size: 14px;
`;

export const Carousel = styled.div`
  width: 1062px;
  max-height: 132px;
  margin: 1% auto auto auto;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Slide = styled.div`
  width: 960px;
  max-height: 132px;
  padding: 12px;
  display: flex !important;
  border: none;
  border-radius: 8px;
`;

export const PostImg = styled.img`
  width: 327px;
  height: 108px;
  border: none;
  border-radius: 8px;
`;

export const Post = styled.div`
  width: 700px;
  height: 108px;
  margin-left: 10px;
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
  margin-top: 1.5px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
`;
