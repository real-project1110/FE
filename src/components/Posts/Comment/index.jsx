import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { editComment, removeComment } from "../../../apis/commentApi";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import { MenuBox } from "../../Modals/Menu";
import {
  CommentContent,
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

function Comment({ comment, refetch, groupId, commentId }) {
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const groupUser = useRecoilValue(groupUserAtom);

  // 댓글 수정 query
  const { mutate: editMutate } = useMutation(editComment, {
    onSuccess: () => refetch(),
  });

  // 댓글 삭제 query
  const { mutate: removeMutate } = useMutation(removeComment, {
    onSuccess: () => refetch(),
  });

  // 코멘트 메뉴 열기
  const CommentModalOpen = useCallback(() => {
    setOpenCommentModal(true);
  }, []);

  // 댓글 삭제 onClick
  const remove = useCallback(() => {
    const removeCommentData = {
      groupId: groupId,
      commentId: commentId,
    };
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      removeMutate(removeCommentData);
      alert("삭제되었습니다");
    } else {
      return;
    }
  }, [commentId, groupId, removeMutate]);

  return (
    <>
      <FreeComment>
        <CommentHeader>
          <CommentUserInfo>
            <CommentUserImg>
              <img
                src={comment.groupAvatarImg}
                alt="profile"
                onError={handleImgError}
              />
            </CommentUserImg>
            <Nickname>{comment.groupUserNickname}</Nickname>
          </CommentUserInfo>
          {/* 본인댓글만 메뉴 보이게 */}
          {groupUser.groupUserId === comment.groupUserId && (
            <CommentMenu onClick={CommentModalOpen}>
              {openCommentModal ? (
                <MenuBox right={"1rem"} top={"1.5rem"}>
                  <MenuList>
                    <li>댓글 수정</li>
                    <li onClick={remove}>삭제</li>
                  </MenuList>
                </MenuBox>
              ) : null}
              <PostOptionSvg />
            </CommentMenu>
          )}
        </CommentHeader>
        <CommentContent>{comment.comment}</CommentContent>
        <CommentResponse>
          <CommentLoadTime>1분전</CommentLoadTime>
          <CommentLike>
            <SpaceLikeSvg />
            <CommentLikeCount>5</CommentLikeCount>
          </CommentLike>
          <CommentLoadTime>답글쓰기</CommentLoadTime>
        </CommentResponse>
      </FreeComment>
    </>
  );
}

export default Comment;
