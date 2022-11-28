import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import {
  Wrapper,
  AllPost,
  PostImg,
  Post,
  PostContent,
  ContentBox,
  PostTitle,
  PostInfoWrap,
  PostInfo,
  PostWriter,
  Vector,
  PostDate,
  PostLike,
  LikeCount,
  Notice,
} from "./styles";
import Scrollbars from "react-custom-scrollbars-2";
import { useQuery } from "react-query";
import { readNoticePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { handleImgError } from "../../../utils/handleImgError";

function NoticePosts() {
  const { groupId } = useParams();
  const { data: noticePosts } = useQuery(
    ["noticePosts", groupId],
    () => readNoticePosts(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        // 데이터 state
      },
    }
  );

  if (noticePosts && !noticePosts.ok) return <div />;

  return (
    <Wrapper>
      <Notice>공지사항</Notice>
      <AllPost>
        <Scrollbars autoHide>
          {noticePosts &&
            noticePosts.data.map((post) => (
              <Post key={post.postId}>
                <PostImg
                  src={post.postImg[0].postImg}
                  alt={post.groupUserNickname}
                  onError={handleImgError}
                />
                <ContentBox>
                  <PostTitle>제목이 필요합니다.</PostTitle>
                  <PostContent>{post.content}</PostContent>
                  <PostInfoWrap>
                    <PostInfo>
                      <PostWriter>{post.groupUserNickname}</PostWriter>
                      <Vector>|</Vector>
                      <PostDate>{post.createdAt.slice(0, 10)}</PostDate>
                    </PostInfo>
                    <PostLike>
                      <SpaceLikeSvg />
                      <LikeCount>{post.commentCount}</LikeCount>
                    </PostLike>
                  </PostInfoWrap>
                </ContentBox>
              </Post>
            ))}
        </Scrollbars>
      </AllPost>
    </Wrapper>
  );
}

export default NoticePosts;
