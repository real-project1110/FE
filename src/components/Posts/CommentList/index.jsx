import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "react-query";
import { addComment, useReadComments } from "../../../apis/commentApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import { handleImgError } from "../../../utils/handleImgError";
import { readGroupUser } from "../../../apis/groupUserApi";
import { CommentForm, CommentFormUserImg, CommentInput, CommentSubmit, CommentSubmitBtn, List, More } from "./styles";
import { FakeImg } from "../FreePostItem/styles";
import Comment from "../Comment";
import { useInView } from "react-intersection-observer";
import { queryClient } from "../../..";

function CommentList({ groupId, postId, setCommentCount, detailMode = false }) {
  const [pageSize, setPageSize] = useState(1);
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
  const { data: getComment, fetchNextPage, isSuccess, hasNextPage, refetch } = useReadComments(readCommentData);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // 댓글 작성
  const { mutate: addCommentMutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", postId]);
      setCommentCount((prev) => prev + 1);
    },
  });

  // 댓글 작성 form
  const Submit = (e) => {
    e.preventDefault();
    if (postComment === "") {
      toast.error("댓글을 작성해주세요", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const commentData = {
        groupId: groupId,
        postId: postId,
        body: {
          comment: postComment,
        },
      };
      addCommentMutate(commentData);
      setPostComment("");
    }
  };

  const onChange = (e) => {
    setPostComment(e.target.value);
  };

  // 더보기를 통한 무한스크롤
  const moreComments = () => {
    fetchNextPage();
    setPageSize((prev) => prev + 1);
    if (hasNextPage === false) {
      toast("마지막 댓글입니다", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <List>
      <ToastContainer />
      {isSuccess && getComment?.pages
        ? getComment?.pages?.slice(0, pageSize)?.map((page) => (
            <React.Fragment key={page.currentPage}>
              {page?.data?.map((comment) => {
                return (
                  <Comment
                    nowRef={ref}
                    key={comment.commentId}
                    groupId={groupId}
                    commentId={comment.commentId}
                    comment={comment}
                    refetch={refetch}
                    setCommentCount={setCommentCount}
                    detailMode={detailMode}
                  />
                );
              })}
            </React.Fragment>
          ))
        : null}
      {!detailMode ? <More onClick={moreComments}>더보기</More> : null}
      <CommentForm onSubmit={Submit}>
        {groupUser && groupUser.groupAvatarImg ? (
          <CommentFormUserImg src={groupUser.groupAvatarImg} alt={groupUser.groupUserNickname} onError={handleImgError} />
        ) : (
          <FakeImg />
        )}
        <CommentInput value={postComment} placeholder="댓글을 남겨주세요." type="text" onChange={onChange} />
        <CommentSubmit>
          <CommentPostSvg />
        </CommentSubmit>
      </CommentForm>
    </List>
  );
}
export default CommentList;
