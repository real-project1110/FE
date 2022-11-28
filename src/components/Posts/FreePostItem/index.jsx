import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { editPost, removePost } from "../../../apis/postApi";
import CommentSvg from "../../../assets/svg/CommentSvg";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { handleImgError } from "../../../utils/handleImgError";
import { MenuBox } from "../../Modals/Menu";
import CommentList from "../CommentList";
import {
  CloseContainer,
  CommentCount,
  Content,
  FakeImg,
  FreePost,
  FreePostItemContainer,
  ImageWrap,
  LoadTime,
  MenuList,
  Nickname,
  PostComment,
  PostContent,
  PostImgWrap,
  PostLike,
  PostLikeCount,
  PostMenu,
  PostOption,
  PostResponse,
  PostUserInfo,
  UserImg,
} from "./styles";

const FreePostItem = ({ groupId, post, refetch }) => {
  const [CommentListOpen, setCommentOpen] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  // 글 수정
  const { mutate: editMutate } = useMutation(editPost, {
    onSuccess: () => refetch(),
  });

  // 글 삭제
  const { mutate: removeMutate } = useMutation(removePost, {
    onSuccess: () => refetch(),
  });

  // 메뉴 닫기
  const onCloseModal = (e) => {
    e.stopPropagation();
    setOpenPostMenu(false);
  };

  // 게시글 메뉴 열기
  const modalOpen = (e) => {
    e.stopPropagation();
    setOpenPostMenu(true);
  };

  // 댓글 여닫기
  const openComment = () => {
    setCommentOpen((prev) => !prev);
  };

  useEffect(() => {
    if (post) {
      setCommentCount(post.commentCount);
    }
  }, [post]);

  if (!post) return <div />;

  return (
    <>
      {openPostMenu && <CloseContainer onClick={onCloseModal} />}
      <FreePostItemContainer onClick={onCloseModal}>
        <FreePost>
          <PostMenu>
            <PostUserInfo>
              <UserImg>{post.groupAvatarImg ? <img src={post.groupAvatarImg} alt="profile" onError={handleImgError} /> : <FakeImg />}</UserImg>
              <Nickname>{post.groupUserNickname}</Nickname>
              <LoadTime>1분전</LoadTime>
            </PostUserInfo>
            {/* 본인게시글만 보이게 */}
            <PostOption onClick={modalOpen}>
              {openPostMenu ? (
                <MenuBox right={"1rem"} top={"1.2rem"}>
                  <MenuList>
                    <li>글 수정</li>
                    <li>공지로 등록</li>
                    <li>북마크</li>
                    <li>삭제</li>
                  </MenuList>
                </MenuBox>
              ) : null}
              <PostOptionSvg />
            </PostOption>
          </PostMenu>
          <PostContent>
            <PostImgWrap>
              {post.postImg?.map((Image) => (
                <ImageWrap key={Image.postImg}>
                  <img src={Image.postImg} alt="postImg" onError={handleImgError} />
                </ImageWrap>
              ))}
            </PostImgWrap>
            <Content>{post.content}</Content>
          </PostContent>
          <PostResponse>
            <PostLike>
              <SpaceLikeSvg />
              <PostLikeCount>5</PostLikeCount>
            </PostLike>
            <PostComment onClick={() => openComment()}>
              <CommentSvg />
              <CommentCount>{commentCount}</CommentCount>
            </PostComment>
          </PostResponse>
        </FreePost>
        {CommentListOpen ? <CommentList postId={post.postId} groupId={groupId} setCommentCount={setCommentCount} /> : null}
      </FreePostItemContainer>
    </>
  );
};

export default FreePostItem;
