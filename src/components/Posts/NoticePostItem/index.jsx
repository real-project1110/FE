import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { postLike } from "../../../apis/postApi";
import LikeSvg from "../../../assets/svg/LikeSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { handleImgError } from "../../../utils/handleImgError";
import {
  ContentBox,
  LikeCount,
  Post,
  PostContent,
  PostDate,
  PostImg,
  PostInfo,
  PostInfoWrap,
  PostLike,
  PostTitle,
  PostWriter,
  Vector,
} from "./styles";

function NoticePostItem({ groupId, ref, notice, refetch }) {
  //공지 게시글 좋아요
  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => refetch(),
  });

  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: notice.postId,
    };
    likeFn(LikeData);
  }, [groupId, notice.postId, likeFn]);

  return (
    <Post newRef={ref} key={notice.postId}>
      {notice?.postImg[0] && (
        <PostImg
          src={notice.postImg[0].postImg}
          alt={notice.groupUserNickname}
          onError={handleImgError}
        />
      )}
      <ContentBox>
        <PostTitle>제목이 필요합니다.</PostTitle>
        <PostContent>{notice.content}</PostContent>
        <PostInfoWrap>
          <PostInfo>
            <PostWriter>{notice.groupUserNickname}</PostWriter>
            <Vector>|</Vector>
            <PostDate>{notice.createdAt.slice(0, 10)}</PostDate>
          </PostInfo>
          <PostLike onClick={toggleLike}>
            {notice.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
            <LikeCount>{notice?.likeCount}</LikeCount>
          </PostLike>
        </PostInfoWrap>
      </ContentBox>
    </Post>
  );
}

export default NoticePostItem;
