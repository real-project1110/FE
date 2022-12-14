import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { postLike, togglePost } from "../../../apis/postApi";
import ArrowSvg from "../../../assets/svg/ArrowSvg";
import CommentSvg from "../../../assets/svg/CommentSvg";
import LikeSvg from "../../../assets/svg/LikeSvg";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { editPostAtom, PostDetailAtom } from "../../../recoil/groupAtoms";
import {
  PostDeleteModalAtom,
  PostDetailModalAtom,
  PostFormModalAtom,
} from "../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../recoil/userAtoms";
import getTime from "../../../utils/getTime";
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
  PostUserDetail,
  PostUserInfo,
  SpreadBtn,
  UserImg,
} from "./styles";

const FreePostItem = ({ post, refetch }) => {
  const { groupId } = useParams();
  const [CommentListOpen, setCommentOpen] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const setEditPost = useSetRecoilState(editPostAtom);
  const setDetailPost = useSetRecoilState(PostDetailAtom);
  const setShowPostModal = useSetRecoilState(PostFormModalAtom);
  const setShowPostDetail = useSetRecoilState(PostDetailModalAtom);
  const setShowDeleteModal = useSetRecoilState(PostDeleteModalAtom);
  const groupUser = useRecoilValue(groupUserAtom);
  const [commentCount, setCommentCount] = useState(0);

  const { mutate: togglePostFn } = useMutation(togglePost, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries(["noticePosts", groupId]);
    },
  });

  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => refetch(),
  });

  // ?????????
  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: post.postId,
    };
    likeFn(LikeData);
  }, [groupId, post.postId, likeFn]);

  // ?????? ??????
  const onCloseModal = useCallback(() => {
    setOpenPostMenu(false);
  }, []);

  // ????????? ?????? ??????
  const modalOpen = useCallback((e) => {
    e.stopPropagation();
    setOpenPostMenu(true);
  }, []);

  // ?????? ?????????
  const openComment = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);

  // ?????????????????? ???????????? ????????? ??????
  const onTogglePost = useCallback(
    (e) => {
      e.stopPropagation();
      togglePostFn({ postId: post.postId, groupId });
      onCloseModal();
    },
    [togglePostFn, onCloseModal, post, groupId]
  );

  // ??? ?????? ?????? ?????? ???
  const onEditPost = useCallback(
    (e) => {
      e.stopPropagation();
      setEditPost(post);
      setShowPostModal(true);
      onCloseModal();
    },
    [onCloseModal, post, setEditPost, setShowPostModal]
  );

  // ???????????? ?????? ???
  const viewDetail = useCallback(
    (e) => {
      e.stopPropagation();
      setShowPostDetail(true);
      onCloseModal();
      setDetailPost(post);
    },
    [onCloseModal, setShowPostDetail, setDetailPost, post]
  );

  // ?????? ????????????
  const deleteModalOpen = useCallback(
    (e) => {
      e.stopPropagation();
      setShowDeleteModal(true);
      onCloseModal();
      setDetailPost(post);
    },
    [setShowDeleteModal, onCloseModal, post, setDetailPost]
  );

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
        <FreePost layout>
          <PostMenu>
            <PostUserInfo>
              <UserImg>
                {post.groupAvatarImg ? (
                  <img
                    src={post.groupAvatarImg}
                    alt="profile"
                    onError={handleImgError}
                  />
                ) : (
                  <FakeImg />
                )}
              </UserImg>
              <PostUserDetail>
                <Nickname>{post.groupUserNickname}</Nickname>
                <LoadTime>{getTime(post.createdAt)}</LoadTime>
              </PostUserDetail>
            </PostUserInfo>
            <PostOption onClick={modalOpen}>
              {openPostMenu ? (
                <MenuBox right={"0rem"} top={"1.2rem"}>
                  {groupUser.groupUserId === post.groupUserId ? (
                    <MenuList>
                      <li onClick={onEditPost}>??? ??????</li>
                      <li onClick={onTogglePost}>????????? ??????</li>
                      <li onClick={viewDetail}>?????? ??????</li>
                      <li onClick={deleteModalOpen}>??????</li>
                    </MenuList>
                  ) : (
                    <MenuList>
                      <li onClick={viewDetail}>?????? ??????</li>
                    </MenuList>
                  )}
                </MenuBox>
              ) : null}
              <PostOptionSvg />
            </PostOption>
          </PostMenu>
          <PostContent onClick={viewDetail}>
            <PostImgWrap>
              {post?.postImg?.map((Image) => (
                <ImageWrap key={Image.postImg}>
                  <img
                    src={Image.postImg}
                    alt="postImg"
                    onError={handleImgError}
                  />
                </ImageWrap>
              ))}
            </PostImgWrap>
            <Content>{post.content}</Content>
          </PostContent>
          <PostResponse>
            <PostLike onClick={toggleLike}>
              {post.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
              <PostLikeCount>{post.likeCount}</PostLikeCount>
            </PostLike>
            <PostComment onClick={() => openComment()}>
              <CommentSvg />
              <CommentCount>{commentCount}</CommentCount>
            </PostComment>
            <SpreadBtn onClick={() => openComment()} isSpread={CommentListOpen}>
              <ArrowSvg />
            </SpreadBtn>
          </PostResponse>
        </FreePost>
        {CommentListOpen ? (
          <CommentList
            postId={post.postId}
            groupId={groupId}
            setCommentCount={setCommentCount}
          />
        ) : null}
      </FreePostItemContainer>
    </>
  );
};

export default FreePostItem;
