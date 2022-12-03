import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { postLike, removePost, togglePost } from "../../../apis/postApi";
import CommentSvg from "../../../assets/svg/CommentSvg";
import LikeSvg from "../../../assets/svg/LikeSvg";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { editPostAtom, PostDetailAtom } from "../../../recoil/groupAtoms";
import {
  PostDetailModalAtom,
  PostFormModalAtom,
} from "../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../recoil/userAtoms";
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

const FreePostItem = ({ post, refetch }) => {
  const { groupId } = useParams();
  const [CommentListOpen, setCommentOpen] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const setEditPost = useSetRecoilState(editPostAtom);
  const setDetailPost = useSetRecoilState(PostDetailAtom);
  const setShowPostModal = useSetRecoilState(PostFormModalAtom);
  const setShowPostDetail = useSetRecoilState(PostDetailModalAtom);
  const groupUser = useRecoilValue(groupUserAtom);
  const [commentCount, setCommentCount] = useState(0);

  const { mutate: removePostFn } = useMutation(removePost, {
    onSuccess: () => refetch(),
  });

  const { mutate: togglePostFn } = useMutation(togglePost, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries(["noticePosts", groupId]);
    },
  });

  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => refetch(),
  });

  // 좋아요
  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: post.postId,
    };
    likeFn(LikeData);
  }, [groupId, post.postId, likeFn]);

  // 메뉴 닫기
  const onCloseModal = useCallback(() => {
    setOpenPostMenu(false);
  }, []);

  // 게시글 메뉴 열기
  const modalOpen = useCallback((e) => {
    e.stopPropagation();
    setOpenPostMenu(true);
  }, []);

  // 댓글 여닫기
  const openComment = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);

  // 게시글 삭제
  const onDeletePost = useCallback(
    (e) => {
      e.stopPropagation();
      const removePostData = {
        groupId: groupId,
        postId: post.postId,
      };
      removePostFn(removePostData);
      onCloseModal();
    },
    [post, groupId, removePostFn, onCloseModal]
  );

  // 자유게시글을 공지글로 바꾸는 함수
  const onTogglePost = useCallback(
    (e) => {
      e.stopPropagation();
      togglePostFn({ postId: post.postId, groupId });
      onCloseModal();
    },
    [togglePostFn, onCloseModal, post, groupId]
  );

  // 글 수정 버튼 클릭 시
  const onEditPost = useCallback(
    (e) => {
      e.stopPropagation();
      setEditPost(post);
      setShowPostModal(true);
      onCloseModal();
    },
    [onCloseModal, post, setEditPost, setShowPostModal]
  );

  // 상세보기 클릭 시
  const viewDetail = useCallback(
    (e) => {
      e.stopPropagation();
      setShowPostDetail(true);
      onCloseModal();
      setDetailPost(post);
    },
    [onCloseModal, setShowPostDetail, setDetailPost, post]
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
        <FreePost>
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
              <Nickname>{post.groupUserNickname}</Nickname>
              <LoadTime>{post.createdAt.slice(0, 10)}</LoadTime>
            </PostUserInfo>
            {groupUser.groupUserId === post.groupUserId && (
              <PostOption onClick={modalOpen}>
                {openPostMenu ? (
                  <MenuBox right={"0rem"} top={"1.2rem"}>
                    <MenuList>
                      <li onClick={onEditPost}>글 수정</li>
                      <li onClick={onTogglePost}>공지로 등록</li>
                      <li onClick={viewDetail}>상세 보기</li>
                      <li onClick={onDeletePost}>삭제</li>
                    </MenuList>
                  </MenuBox>
                ) : null}
                <PostOptionSvg />
              </PostOption>
            )}
          </PostMenu>
          <PostContent>
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
