import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { addComment, useReadComments } from "../../../apis/commentApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import { handleImgError } from "../../../utils/handleImgError";
import { readGroupUser } from "../../../apis/groupUserApi";
import {
  CommentForm,
  CommentFormUserImg,
  CommentInput,
  CommentSubmitBtn,
  List,
  More,
} from "./styles";
import { FakeImg } from "../FreePostItem/styles";
import Comment from "../Comment";
import { useInView } from "react-intersection-observer";

function CommentList({ groupId, postId, setCommentCount }) {
  // 현재 유저 이미지
  const { data: groupUser } = useQuery(
    ["groupUser", `group ${groupId}`],
    () => readGroupUser(groupId),
    {
      retry: 1,
      staleTime: Infinity,
    }
  );
  const [postComment, setPostComment] = useState("");

  // 댓글 조회
  const readCommentData = {
    groupId: groupId,
    postId: postId,
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

  // 댓글 작성
  const { mutate: addCommentMutate } = useMutation(addComment, {
    onSuccess: () => {
      refetch();
      setCommentCount((prev) => prev + 1);
    },
  });

  // 댓글 작성 form
  const Submit = (e) => {
    e.preventDefault();
    const commentData = {
      groupId: groupId,
      postId: postId,
      body: {
        comment: postComment,
      },
    };
    addCommentMutate(commentData);
    setPostComment("");
    alert("작성 완료!😁");
  };

  const onChange = (e) => {
    setPostComment(e.target.value);
  };

  return (
    <List>
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
                  />
                );
              })}
            </React.Fragment>
          ))
        : null}
      {hasNextPage ? <More onClick={fetchNextPage}>더보기</More> : null}
      <CommentForm onSubmit={Submit}>
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
        />
        <CommentSubmitBtn>
          <CommentPostSvg />
        </CommentSubmitBtn>
      </CommentForm>
    </List>
  );
}
export default CommentList;
