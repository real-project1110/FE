import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scrollbars from "react-custom-scrollbars-2";
import PostOptionSvg from "../../../assets/svg/PostOptionSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import CommentSvg from "../../../assets/svg/CommentSvg";
import { MenuBox } from "../../Modals/Menu";
import "./index.css";
import { NoticeTitle, PostLike, Wrapper } from "../NoticeCarousel/styles";
import {
  PostHeader,
  New,
  Newest,
  NewestComment,
  FreePost,
  UserImg,
  PostMenu,
  Nickname,
  LoadTime,
  PostOption,
  PostUserInfo,
  MenuList,
  PostContent,
  PostResponse,
  PostComment,
  CommentCount,
  CommentMenu,
  CommentUserImg,
  CommentContent,
  FreeComment,
  CommentLoadTime,
  CommentLike,
  PostLikeCount,
  FreePostComment,
  CommentInput,
  CommentSubmitBtn,
  SendComment,
  PostCommentButton,
  WritePost,
  Post,
  ImageWrap,
  Content,
  FakeImg,
  PostImgWrap,
  AllFreePost,
} from "./styles";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import { useSetRecoilState } from "recoil";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { useMutation, useQuery } from "react-query";
import { editPost, readFreePosts, removePost } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { handleImgError } from "../../../utils/handleImgError";

function Posts() {
  const [openModal, setOpenModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [CommentOpen, setCommentOpen] = useState(false);
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { groupId } = useParams();

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["freePosts", groupId],
    () => readFreePosts(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        // 데이터 state
        console.log("data", data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    }
  );

  const { mutate: editMutate } = useMutation(editPost, {
    onSuccess: () => refetch(),
  });

  const { mutate: removeMutate } = useMutation(removePost, {
    onSuccess: () => refetch(),
  });

  // 게시글 모달 이벤트
  const modalOpen = (e) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  // 댓글 모달 이벤트
  const CommentModalOpen = (e) => {
    e.stopPropagation();
    setOpenCommentModal(true);
  };

  // 글작성 모달 이벤트
  const PostModalOpen = (e) => {
    e.stopPropagation();
    setIsForm(true);
  };

  // 모달 닫기
  const onCloseModal = () => {
    setOpenModal(false);
    setOpenCommentModal(false);
  };

  // 댓글 여닫기
  const openComment = () => {
    setCommentOpen((prev) => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper onClick={onCloseModal}>
      <PostHeader>
        <WritePost>
          <NoticeTitle>게시글</NoticeTitle>
          <Post onClick={PostModalOpen}>글쓰기</Post>
        </WritePost>
        <New>
          <Newest>최신순</Newest>
          <NewestComment>최근댓글순</NewestComment>
        </New>
      </PostHeader>
      <AllFreePost>
        <Scrollbars autoHide>
          {data?.data?.map((post) => (
            <FreePost key={post.postId}>
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
                  {openModal ? (
                    <MenuBox right={"0.2rem"} top={"1rem"}>
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
          ))}
          {CommentOpen ? (
            <>
              <FreeComment>
                <CommentMenu>
                  {/* 댓글 map 돌려야함 */}
                  <PostUserInfo>
                    <UserImg>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWgoKAG03+7AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                        alt="profile"
                        onError={handleImgError}
                      />
                    </UserImg>
                    <Nickname>닉네임</Nickname>
                  </PostUserInfo>
                  {/* 본인댓글만 보이게 */}
                  <PostOption onClick={CommentModalOpen}>
                    {openCommentModal ? (
                      <MenuBox right={"1rem"} top={"1.5rem"}>
                        <MenuList>
                          <li>댓글 수정</li>
                          <li>삭제</li>
                        </MenuList>
                      </MenuBox>
                    ) : null}
                    <PostOptionSvg />
                  </PostOption>
                </CommentMenu>
                <CommentContent>
                  내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글
                </CommentContent>
                <PostResponse>
                  <CommentLoadTime>1분전</CommentLoadTime>
                  <CommentLike>
                    <SpaceLikeSvg />
                    <PostLikeCount>5</PostLikeCount>
                  </CommentLike>
                  <CommentLoadTime>답글쓰기</CommentLoadTime>
                </PostResponse>
              </FreeComment>
              <FreePostComment>
                <PostUserInfo>
                  <CommentUserImg>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWgoKAG03+7AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                      alt="profile"
                    />
                  </CommentUserImg>
                  <CommentInput placeholder="댓글을 남겨주세요." />
                </PostUserInfo>
                <CommentSubmitBtn>
                  <SendComment>보내기</SendComment>
                  <PostCommentButton>
                    <CommentPostSvg />
                  </PostCommentButton>
                </CommentSubmitBtn>
              </FreePostComment>
            </>
          ) : null}
        </Scrollbars>
      </AllFreePost>
    </Wrapper>
  );
}

export default Posts;
