import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { removePost } from "../../../apis/postApi";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import { PostDeleteModalAtom } from "../../../recoil/modalAtoms";
import { Wrapper } from "../PostForm/styles";
import { ButtonWrap, Cancel, Confirm, DeleteBox, Ok } from "./styles";

function DeleteModal() {
  const { groupId } = useParams();
  const showDeleteModal = useSetRecoilState(PostDeleteModalAtom);
  const detail = useRecoilValue(PostDetailAtom);

  const { mutate: removePostFn } = useMutation(removePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["freePosts", groupId]);
    },
  });

  // modal close
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      showDeleteModal(false);
    },
    [showDeleteModal]
  );

  // 게시글 삭제
  const onDeletePost = useCallback(
    (e) => {
      const removePostData = {
        groupId: groupId,
        postId: detail.postId,
      };
      removePostFn(removePostData);
      onCloseModal();
    },
    [detail.postId, groupId, removePostFn, onCloseModal]
  );

  return (
    <Wrapper
      onClick={onCloseModal}
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
    >
      <DeleteBox
        variants={modalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Confirm>글을 삭제할까요?</Confirm>
        <ButtonWrap>
          <Cancel onClick={onCloseModal}>취소</Cancel>
          <Ok onClick={onDeletePost}>확인</Ok>
        </ButtonWrap>
      </DeleteBox>
    </Wrapper>
  );
}

export default DeleteModal;

const modalAni = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.4)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};
