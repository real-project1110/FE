import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { addComment, readComments } from "../../../apis/commentApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import { handleImgError } from "../../../utils/handleImgError";
import { readGroupUser } from "../../../apis/groupUserApi";
import { CommentForm, CommentFormUserImg, CommentInput, CommentSubmitBtn, List, SendComment } from "./styles";
import { FakeImg } from "../FreePostItem/styles";
import Comment from "../Comment";
import { queryClient } from "../../..";

function CommentList({ groupId, postId, setCommentCount }) {
  // 현재 유저 이미지
  const { data: groupUser } = useQuery(["groupUser", `group ${groupId}`], () => readGroupUser(groupId), {
    retry: 1,
    staleTime: Infinity,
  });
  const [postComment, setPostComment] = useState("");

  // 댓글 조회
  const readCommentData = {
    groupId: groupId,
    postId: postId,
  };
  const { data: Comments, refetch } = useQuery(["comments", `post ${postId}`, `group ${groupId}`], () => readComments(readCommentData), {
    refetchOnWindowFocus: false,
    retry: 1,
  });

  // 댓글 작성
  const { mutate: addCommentMutate } = useMutation(addComment, {
    onSuccess: () => refetch(),
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

  useEffect(() => {
    if (Comments) {
      setCommentCount(Comments.length);
    }
  }, [Comments]);

  return (
    <List>
      {Comments &&
        Comments?.map((comment) => <Comment key={comment.commentId} groupId={groupId} commentId={comment.commentId} comment={comment} refetch={refetch} />)}
      <CommentForm onSubmit={Submit}>
        {groupUser && groupUser.groupAvatarImg ? (
          <CommentFormUserImg src={groupUser.groupAvatarImg} alt={groupUser.groupUserNickname} onError={handleImgError} />
        ) : (
          <FakeImg />
        )}
        <CommentInput value={postComment} placeholder="댓글을 남겨주세요." type="text" onChange={onChange} />
        <CommentSubmitBtn>
          <SendComment>보내기</SendComment>
          <CommentPostSvg />
        </CommentSubmitBtn>
      </CommentForm>
    </List>
  );
}
export default CommentList;
