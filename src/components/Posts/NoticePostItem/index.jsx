import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { postLike, removePost, togglePost } from "../../../apis/postApi";
import LikeSvg from "../../../assets/svg/LikeSvg";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import { PostDetailModalAtom } from "../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../recoil/userAtoms";
import getTime from "../../../utils/getTime";
import { handleImgError } from "../../../utils/handleImgError";
import { MenuBox } from "../../Modals/Menu";
import { CloseContainer, MenuList, PostOption } from "../FreePostItem/styles";
import { ContentBox, LikeCount, Post, PostContent, PostDate, PostImg, PostInfo, PostInfoWrap, PostLike, PostWriter, TitleWrap, Vector } from "./styles";

function NoticePostItem({ groupId, ref, notice, refetch }) {
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const setShowPostDetail = useSetRecoilState(PostDetailModalAtom);
  const setDetailPost = useSetRecoilState(PostDetailAtom);
  const groupUser = useRecoilValue(groupUserAtom);

  const { mutate: removePostFn } = useMutation(removePost, {
    onSuccess: () => refetch(),
  });

  const { mutate: togglePostFn } = useMutation(togglePost, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries(["freePosts", groupId]);
    },
  });

  // 메뉴 닫기
  const onCloseModal = useCallback(() => {
    setOpenPostMenu(false);
  }, []);

  // 게시글 메뉴 열기
  const modalOpen = useCallback((e) => {
    e.stopPropagation();
    setOpenPostMenu(true);
  }, []);

  //공지 게시글 좋아요
  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => refetch(),
  });

  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: notice.postId,
    };
    likeFn(LikeData);
  }, [groupId, notice.postId, likeFn]);

  // 게시글 삭제
  const onDeletePost = useCallback(
    (e) => {
      e.stopPropagation();
      const removePostData = {
        groupId: groupId,
        postId: notice.postId,
      };
      removePostFn(removePostData);
      onCloseModal();
    },
    [notice.postId, groupId, removePostFn, onCloseModal]
  );

  // 자유게시글을 공지글로 바꾸는 함수
  const onTogglePost = useCallback(
    (e) => {
      e.stopPropagation();
      togglePostFn({ postId: notice.postId, groupId });
      onCloseModal();
    },
    [togglePostFn, onCloseModal, notice.postId, groupId]
  );

  // 상세보기 클릭 시
  const viewDetail = useCallback(
    (e) => {
      e.stopPropagation();
      setShowPostDetail(true);
      onCloseModal();
      setDetailPost(notice);
    },
    [onCloseModal, setShowPostDetail, setDetailPost, notice]
  );

  return (
    <>
      {openPostMenu && <CloseContainer onClick={onCloseModal} />}
      <Post newRef={ref} key={notice.postId}>
        {notice?.postImg[0] && <PostImg src={notice.postImg[0].postImg} alt={notice.groupUserNickname} onError={handleImgError} />}
        <ContentBox>
          <TitleWrap>
            <PostContent onClick={viewDetail}>{notice.content}</PostContent>
            <PostOption onClick={modalOpen}>
              {openPostMenu ? (
                <MenuBox right={"1rem"} top={"1.2rem"}>
                  {groupUser.groupUserId === notice.groupUserId ? (
                    <MenuList>
                      <li onClick={onTogglePost}>자유글로 등록</li>
                      <li onClick={viewDetail}>상세 보기</li>
                      <li onClick={onDeletePost}>삭제</li>
                    </MenuList>
                  ) : (
                    <MenuList>
                      <li onClick={viewDetail}>상세 보기</li>
                    </MenuList>
                  )}
                </MenuBox>
              ) : null}
              <PostOptionSvg />
            </PostOption>
          </TitleWrap>
          <PostInfoWrap>
            <PostInfo>
              <PostWriter>{notice.groupUserNickname}</PostWriter>
              <Vector>|</Vector>
              <PostDate>{getTime(notice.createdAt)}</PostDate>
            </PostInfo>
            <PostLike onClick={toggleLike}>
              {notice.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
              <LikeCount>{notice?.likeCount}</LikeCount>
            </PostLike>
          </PostInfoWrap>
        </ContentBox>
      </Post>
    </>
  );
}

export default NoticePostItem;
