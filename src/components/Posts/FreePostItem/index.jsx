import React, { useState } from "react";
import { useMutation } from "react-query";
import { editPost, removePost } from "../../../apis/postApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import CommentSvg from "../../../assets/svg/CommentSvg";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { handleImgError } from "../../../utils/handleImgError";
import { MenuBox } from "../../Modals/Menu";
import Comment from "../Comment";
import {
  CloseContainer,
  CommentCount,
  CommentForm,
  CommentInput,
  CommentList,
  CommentSubmitBtn,
  CommentUserImg,
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
  SendComment,
  UserImg,
} from "./styles";

const FreePostItem = ({ post, refetch }) => {
  const [CommentListOpen, setCommentOpen] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);

  const { mutate: editMutate } = useMutation(editPost, {
    onSuccess: () => refetch(),
  });

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
  console.log(post);
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
            <PostLike>
              <SpaceLikeSvg />
              <PostLikeCount>5</PostLikeCount>
            </PostLike>
            <PostComment onClick={() => openComment()}>
              <CommentSvg />
              <CommentCount>{post.commentCount}</CommentCount>
            </PostComment>
          </PostResponse>
        </FreePost>
        {CommentListOpen ? (
          <CommentList>
            {[1, 2, 3, 4].map((comment) => (
              <Comment key={comment} />
            ))}
            <CommentForm>
              <CommentUserImg
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAIVBMVEXY2Njz8/Pq6urv7+/h4eHb29vo6Oje3t7j4+Pt7e3p6ekmc3lwAAADMElEQVR4nO2bC3KDMAxEMeab+x+4JZQBEkhBlq2NZt8JvGOtPkZUFSGEEEIIIYQQQgghhBBCCCEEnXbo6hjDLzHW3dBan0dEO9ThjfrrxDQHKv60NNZnu0ETz2Q8w+xbpPQfZTyl9NZnvEB7GlS7AIP3SnNFxgR4fHVXdYTQWZ/1A+14XUcII2x4tf+6fE8EVXJXB6qS+zpAldzyx8Jofep3buSrLXC563L9eAWsnrRSHSFg2eRSX3JMbX32Lb1cRwhIHaQg865E69OviJ0+g+P3pAsBupLEC8G5koSUNQOSuBJqyAJGLRnShQzWGp4kRxZKbKXrCMFaw4SCRTBMomARDJMIB5E9CGOJgtcx3J7Yn8wgdCluhGjogMi/FEIhmXBjdjdC3BRENy2Km6bRTRvvZrDyM+q6eXxw8xzk5oHOz5Opm0dsP58V3Hzo8fPpzc3HUD+fp90sDPhZ4fCzVONnzcnN4pmfVUA/y5mVm3XZys8Cs5+V8srNkv+Ek98uJpz8CDPh5NekGRc/ixFCCCHky2mb4TGO8cLkHuM4PoYGsGfph1r0Ih/rAWc2Oexz74DRE59PHre0GE8pvcoiykxnF2O96Ln3nNFGSqMs4ymlfIT9/1Qio/ADS6vojVe6gilMZUXrnFKbKfeeqiWUed5OXti4QgHTZ3THltxv9fnDaiFveOVKukfkTMRJmxr3yaakiM23ZLJ8cR2ZlBjoyKKksD8W1H1ipENdiWQ/QwflrYJidfAd1b2bQn3JMYrdiknCWlFLXSo/VqSgZRNDg8wo2STzPHgFlZnRPLAmNILLNGMtKGQus5K+J73Am5X0PckL9MYlZCW1mJin3oXEFAzikIk0l8BcSOKVAF1I2pVA1JCFlFpiffY9ch0wuXdGnoFVvnPqIf6JCaJd3CJtHQH69z3Sbh4ssuSxZX3ud2Q6oKrhjKwmwllEahI4i0hNAjJSbZGNV9anPkKiA64cTkhKIlijNSNptwCTlixtPawPfcRDIARoyl2RzLtuhACWEVkhcSPE+szHUAgaFIIGhaBBIWhQCBoUggaFoEEhaFAIGhSCBoWgQSFoUAgap8f9Ac1KQOtCVp1TAAAAAElFTkSuQmCC"
                alt="profile"
              ></CommentUserImg>
              <CommentInput placeholder="댓글을 남겨주세요." type="text" />
              <CommentSubmitBtn>
                <SendComment>보내기</SendComment>
                <CommentPostSvg />
              </CommentSubmitBtn>
            </CommentForm>
          </CommentList>
        ) : null}
      </FreePostItemContainer>
    </>
  );
};

export default FreePostItem;
