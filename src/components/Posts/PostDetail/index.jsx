import React, { useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { addComment, useReadComments } from "../../../apis/commentApi";
import { postLike } from "../../../apis/postApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import CommentSvg from "../../../assets/svg/CommentSvg";
import LikeSvg from "../../../assets/svg/LikeSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import { PostDetailModalAtom } from "../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import Comment from "../Comment";
import { CommentForm } from "../Comment/styles";
import {
  CommentFormUserImg,
  CommentInput,
  CommentSubmitBtn,
} from "../CommentList/styles";
import {
  CommentCount,
  Content,
  FakeImg,
  ImageWrap,
  PostComment,
  PostImgWrap,
  PostLike,
  PostLikeCount,
  PostResponse,
  UserImg,
} from "../FreePostItem/styles";
import {
  Cancel,
  DetailPost,
  DetailPostUserBox,
  DetailPostUserInfo,
  DetailWrapper,
  PostContent,
} from "./styles";
import CancelSvg from "../../../assets/svg/CancelSvg";

function PostDetail() {
  const { groupId } = useParams();
  const showDetail = useSetRecoilState(PostDetailModalAtom);
  const [detail, setDetail] = useRecoilState(PostDetailAtom);
  const [commentCount, setCommentCount] = useState(0);
  const groupUser = useRecoilValue(groupUserAtom);
  const [postComment, setPostComment] = useState("");

  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => {
      queryClient.invalidateQueries(["freePosts", groupId]);
    },
  });

  // 무한스크롤 데이터
  const readCommentData = {
    groupId: groupId,
    postId: detail.postId,
  };
  const {
    data: getComment,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useReadComments(readCommentData);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // Modal Close
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      showDetail(false);
      setDetail({});
    },
    [showDetail, setDetail]
  );

  // 댓글 작성
  const { mutate: addCommentMutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", detail.postId]);
      setCommentCount((prev) => prev + 1);
    },
  });

  // 댓글 작성 form
  const Submit = (e) => {
    e.preventDefault();
    const commentData = {
      groupId: groupId,
      postId: detail.postId,
      body: {
        comment: postComment,
      },
    };
    addCommentMutate(commentData);
    setPostComment("");
  };

  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: detail.postId,
    };
    likeFn(LikeData);
  }, [groupId, detail.postId, likeFn]);

  const onChange = (e) => {
    setPostComment(e.target.value);
  };

  // 엔터키도 가능하게
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      Submit(e);
    }
  };

  useEffect(() => {
    if (detail) {
      setCommentCount(detail.commentCount);
    }
  }, [detail]);

  return (
    <>
      <DetailPost onClick={onCloseModal}>
        <Scrollbars autoHide onScrollStop={fetchNextPage}>
          <DetailWrapper onClick={(e) => e.stopPropagation()}>
            <DetailPostUserBox>
              <UserImg>
                {detail.groupAvatarImg ? (
                  <img
                    src={detail.groupAvatarImg}
                    alt="profile"
                    onError={handleImgError}
                  />
                ) : (
                  <FakeImg />
                )}
              </UserImg>
              <DetailPostUserInfo>
                <strong>{detail.groupUserNickname}</strong>
                <span>{detail.createdAt.slice(0, 10)}</span>
              </DetailPostUserInfo>
              <Cancel onClick={onCloseModal}>
                <CancelSvg />
              </Cancel>
            </DetailPostUserBox>
            <PostContent>
              <PostImgWrap>
                {detail?.postImg?.map((Image) => (
                  <ImageWrap key={Image.postImg}>
                    <img
                      src={Image.postImg}
                      alt="postImg"
                      onError={handleImgError}
                    />
                  </ImageWrap>
                ))}
              </PostImgWrap>
              <Content>{detail.content}</Content>
              <PostResponse>
                <PostLike onClick={toggleLike}>
                  {detail.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
                  <PostLikeCount>{detail.likeCount}</PostLikeCount>
                </PostLike>
                <PostComment>
                  <CommentSvg />
                  <CommentCount>{commentCount}</CommentCount>
                </PostComment>
              </PostResponse>
            </PostContent>
            <CommentForm>
              {groupUser && groupUser.groupAvatarImg ? (
                <CommentFormUserImg
                  src={groupUser.groupAvatarImg}
                  alt={groupUser.groupUserNickname}
                  onError={handleImgError}
                />
              ) : (
                <FakeImg />
              )}
              <CommentInput
                value={postComment}
                placeholder="댓글을 남겨주세요."
                type="text"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              <CommentSubmitBtn onClick={Submit}>
                <CommentPostSvg />
              </CommentSubmitBtn>
            </CommentForm>
            {isSuccess && getComment?.pages
              ? getComment?.pages.map((page) => (
                  <React.Fragment key={page.currentPage}>
                    {page?.data.map((comment) => {
                      return (
                        <Comment
                          nowRef={ref}
                          key={comment.commentId}
                          groupId={groupId}
                          commentId={comment.commentId}
                          comment={comment}
                          refetch={refetch}
                          setCommentCount={setCommentCount}
                          detailMode={true}
                        />
                      );
                    })}
                  </React.Fragment>
                ))
              : null}
          </DetailWrapper>
        </Scrollbars>
      </DetailPost>
    </>
  );
}

export default PostDetail;
