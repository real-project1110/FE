import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { commentLike, editComment, removeComment } from "../../../apis/commentApi";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import LikeSvg from "../../../assets/svg/LikeSvg";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import { MenuBox } from "../../Modals/Menu";
import { CommentFormUserImg, CommentInput, CommentSubmitBtn } from "../CommentList/styles";
import { CloseContainer, FakeImg } from "../FreePostItem/styles";
import { SendComment } from "../FreePosts/styles";
import {
  CommentContainer,
  CommentContent,
  CommentForm,
  CommentHeader,
  CommentLike,
  CommentLikeCount,
  CommentLoadTime,
  CommentMenu,
  CommentResponse,
  CommentUserImg,
  CommentUserInfo,
  FreeComment,
  MenuList,
  Nickname,
} from "./styles";
import getTime from "../../../utils/getTime";

function Comment({ comment, refetch, groupId, commentId, setCommentCount, detailMode }) {
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [editMyComment, setEditMyComment] = useState(false);
  const [textValue, setTextValue] = useState("");

  const groupUser = useRecoilValue(groupUserAtom);

  // 좋아요
  const { mutate: likeFn } = useMutation(commentLike, {
    onSuccess: () => refetch(),
  });

  // 댓글 수정 query
  const { mutate: editMutate } = useMutation(editComment, {
    onSuccess: () => refetch(),
  });

  // 댓글 삭제 query
  const { mutate: removeMutate } = useMutation(removeComment, {
    onSuccess: () => {
      refetch();
      setCommentCount((prev) => prev - 1);
    },
  });

  // 모달 닫기
  const onCloseModal = useCallback((e) => {
    e.stopPropagation();
    setOpenCommentModal(false);
  }, []);

  // 코멘트 메뉴 열기
  const CommentModalOpen = useCallback(() => {
    setOpenCommentModal(true);
  }, []);

  // 댓글 수정시 나오는 input onChange
  const onChangeText = useCallback((e) => {
    setTextValue(e.target.value);
  }, []);

  // 댓글 수정 onClick
  const edit = useCallback(
    (e) => {
      setEditMyComment((prev) => !prev);
      setTextValue(comment.comment);
      onCloseModal(e);
    },
    [comment.comment, onCloseModal]
  );

  // 댓글 수정 저장
  const editSave = useCallback(() => {
    const commentData = {
      groupId,
      commentId: comment.commentId,
      body: {
        comment: textValue,
      },
    };
    editMutate(commentData);
    setEditMyComment(false);
  }, [textValue, editMutate, comment.commentId, groupId]);

  // 댓글 삭제 onClick
  const remove = useCallback(() => {
    const removeCommentData = {
      groupId: groupId,
      commentId: commentId,
    };
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      removeMutate(removeCommentData);
      toast.success("삭제되었습니다", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      return;
    }
  }, [commentId, groupId, removeMutate]);

  // 좋아요
  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      commentId: comment.commentId,
    };
    likeFn(LikeData);
  }, [comment.commentId, groupId, likeFn]);

  // 수정 엔터키도 활용 가능
  const onKeyPress = (e) => {
    if (e.key === "Enter") editSave();
  };

  if (!comment) return <div></div>;
  return (
    <>
      <ToastContainer />
      {openCommentModal && <CloseContainer onClick={onCloseModal} />}
      <FreeComment detailMode={detailMode}>
        <CommentUserImg>
          <img src={comment.groupAvatarImg} alt="profile" onError={handleImgError} />
        </CommentUserImg>
        <CommentContainer>
          <CommentHeader>
            <CommentUserInfo>
              <Nickname>{comment.groupUserNickname}</Nickname>
              {groupUser.groupUserId === comment.groupUserId && (
                <CommentMenu onClick={CommentModalOpen}>
                  {openCommentModal ? (
                    <MenuBox right={"1rem"} top={"1.5rem"}>
                      <MenuList>
                        <li onClick={edit}>댓글 수정</li>
                        <li onClick={remove}>삭제</li>
                      </MenuList>
                    </MenuBox>
                  ) : null}
                  <PostOptionSvg />
                </CommentMenu>
              )}
            </CommentUserInfo>
          </CommentHeader>
          <CommentContent>{comment.comment}</CommentContent>
          <CommentResponse>
            <CommentLoadTime>{getTime(comment.createdAt)}</CommentLoadTime>
            <CommentLike onClick={toggleLike}>
              {comment.commentLike ? <LikeSvg /> : <SpaceLikeSvg />}
              <CommentLikeCount>{comment.likeCount}</CommentLikeCount>
            </CommentLike>
          </CommentResponse>
        </CommentContainer>
      </FreeComment>
      {editMyComment ? (
        <CommentForm>
          {groupUser && groupUser.groupAvatarImg ? (
            <CommentFormUserImg src={groupUser.groupAvatarImg} alt={groupUser.groupUserNickname} onError={handleImgError} />
          ) : (
            <FakeImg />
          )}
          <CommentInput onKeyPress={onKeyPress} onChange={onChangeText} value={textValue} required />
          <CommentSubmitBtn>
            <SendComment onClick={() => setEditMyComment(false)}>
              <FontAwesomeIcon icon={faBan} />
            </SendComment>
            <SendComment onClick={editSave}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </SendComment>
          </CommentSubmitBtn>
        </CommentForm>
      ) : null}
    </>
  );
}

export default Comment;
