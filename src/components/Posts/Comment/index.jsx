import React from "react";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
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

const Comment = ({ CommentModalOpen, openCommentModal }) => {
  return (
    <FreeComment>
      <CommentHeader>
        {/* 댓글 map 돌려야함 */}
        <CommentUserInfo>
          <CommentUserImg>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWgoKAG03+7AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
              alt="profile"
              onError={handleImgError}
            />
          </CommentUserImg>
          <Nickname>닉네임</Nickname>
        </CommentUserInfo>
        {/* 본인댓글만 보이게 */}
        <CommentMenu onClick={CommentModalOpen}>
          {openCommentModal ? (
            <MenuBox right={"1rem"} top={"1.5rem"}>
              <MenuList>
                <li>댓글 수정</li>
                <li>삭제</li>
              </MenuList>
            </MenuBox>
          ) : null}
          <PostOptionSvg />
        </CommentMenu>
      </CommentHeader>

      <CommentContent>
        내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글
      </CommentContent>
      <CommentResponse>
        <CommentLoadTime>1분전</CommentLoadTime>
        <CommentLike>
          <SpaceLikeSvg />
          <CommentLikeCount>5</CommentLikeCount>
        </CommentLike>
        <CommentLoadTime>답글쓰기</CommentLoadTime>
      </CommentResponse>
    </FreeComment>
  );
};

export default Comment;
