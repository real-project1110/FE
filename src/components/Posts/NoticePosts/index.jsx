import React, { useEffect } from "react";
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
import { useReadNoticePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { handleImgError } from "../../../utils/handleImgError";
import { useInView } from "react-intersection-observer";

function NoticePosts() {
  const { groupId } = useParams();

  const { getNotice, fetchNextPage, isSuccess, hasNextPage, refetch } = useReadNoticePosts(groupId);

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Wrapper>
      <Notice>공지사항</Notice>
      <AllPost>
        <Scrollbars autoHide onScrollStop={fetchNextPage}>
          {isSuccess && getNotice?.pages
            ? getNotice?.pages.map((page) => (
                <React.Fragment key={page.currentPage}>
                  {page?.data.map((notice) => (
                    <Post newRef={ref} key={notice.postId}>
                      {notice?.postImg[0] && <PostImg src={notice.postImg[0].postImg} alt={notice.groupUserNickname} onError={handleImgError} />}
                      <ContentBox>
                        <PostTitle>제목이 필요합니다.</PostTitle>
                        <PostContent>{notice.content}</PostContent>
                        <PostInfoWrap>
                          <PostInfo>
                            <PostWriter>{notice.groupUserNickname}</PostWriter>
                            <Vector>|</Vector>
                            <PostDate>{notice.createdAt.slice(0, 10)}</PostDate>
                          </PostInfo>
                          <PostLike>
                            <LikeCount>{notice?.likeCount}</LikeCount>
                          </PostLike>
                        </PostInfoWrap>
                      </ContentBox>
                    </Post>
                  ))}
                </React.Fragment>
              ))
            : null}
        </Scrollbars>
      </AllPost>
    </Wrapper>
  );
}

export default NoticePosts;
