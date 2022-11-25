import styled from "styled-components";

export const PostHeader = styled.div`
  width: 100%;
  height: 46px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`;

export const WritePost = styled.div`
  width: 50%;
  display: flex;
  padding-left: 1%;
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
  padding-right: 2%;
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

export const FreePost = styled.div`
  width: 90%;
  height: auto;
  margin: 3% auto auto auto;
  padding: 10px 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PostMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PostUserInfo = styled.div`
  width: 100%;
  display: flex;
`;

export const UserImg = styled.div`
  & > img {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const Nickname = styled.div`
  margin-left: 5px;
  line-height: 37px;
  letter-spacing: -0.3px;
  font-size: 14px;
  font-weight: 600;
`;

export const LoadTime = styled.div`
  margin-left: 5px;
  line-height: 37px;
  letter-spacing: -0.3px;
  font-size: 12px;
  font-weight: 400;
`;

export const PostOption = styled.div`
  line-height: 40px;
  padding-right: 10px;
  position: relative;
  cursor: pointer;
`;

export const MenuList = styled.ul`
  width: 100px;
  text-align: center;
  & > li {
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }
`;

export const PostContent = styled.div`
  width: 100%;
  height: auto;
  margin: 1.5% auto auto auto;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 1.4;
`;

export const Content = styled.div``;

export const ImageWrap = styled.div`
  height: 200px;
`;

export const PostResponse = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PostComment = styled.div`
  margin-top: -1.2px;
  margin-left: 5%;
  cursor: pointer;
`;

export const FreeComment = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  padding: 10px 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.extraLightGray};
`;

export const CommentCount = styled.span`
  margin-left: 5px;
  margin-top: 3px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const CommentMenu = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  border-bottom: none;
  border-radius: 8px;
  justify-content: space-between;
`;

export const CommentContent = styled.div`
  width: 100%;
  height: auto;
  margin: 1.5% auto auto auto;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 1.4;
`;

export const CommentLoadTime = styled.div`
  line-height: 10px;
  letter-spacing: -0.3px;
  font-size: 12px;
  font-weight: 400;
`;

export const CommentLike = styled.span`
  margin: -2px 5% 0px 2%;
  cursor: pointer;
`;

export const PostLikeCount = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  position: absolute;
  font-weight: 300;
  font-size: 12px;
  color: #1c1c1c;
`;

export const FreePostComment = styled.form`
  width: 90%;
  height: auto;
  margin: 0 auto 3% auto;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CommentUserImg = styled.div`
  & > img {
    width: 26px;
    height: 26px;
    margin-top: 2px;
    border: none;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  margin: 0 5%;
  padding-left: 2%;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 10px;
  font-size: 12px;
  letter-spacing: -1px;
`;

export const CommentSubmitBtn = styled.button`
  width: 15%;
  height: 28px;
  display: flex;
  vertical-align: middle;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
`;

export const SendComment = styled.div`
  width: 100%;
  margin: 5px 0px 0px 5px;
  color: #1c1c1c;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.055em;
`;

export const PostCommentButton = styled.div`
  margin: 5px 0px 0px 5px;
`;
