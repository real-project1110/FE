import React, { useCallback, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../..";
import { addComment, useReadComments } from "../../../apis/commentApi";
import { postLike } from "../../../apis/postApi";
import CommentPostSvg from "../../../assets/svg/CommentPostSvg";
import CommentSvg from "../../../assets/svg/CommentSvg";
import LikeSvg from "../../../assets/svg/LikeSvg";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import { PostDetailAtom } from "../../../recoil/groupAtoms";
import { PostDetailModalAtom } from "../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { handleImgError } from "../../../utils/handleImgError";
import Comment from "../Comment";
import { CommentForm } from "../Comment/styles";
import { CommentFormUserImg, CommentInput, CommentSubmitBtn } from "../CommentList/styles";
import { CommentCount, Content, FakeImg, PostComment, PostImgWrap, PostLike, PostLikeCount, PostResponse, UserImg } from "../FreePostItem/styles";
import { Cancel, DetailPost, DetailPostUserBox, DetailPostUserInfo, DetailWrapper, Images, PostContent } from "./styles";
import ImageModal from "../ImageModal";
import CancelSvg from "../../../assets/svg/CancelSvg";
import getTime from "../../../utils/getTime";
import { motion, AnimatePresence } from "framer-motion";

function PostDetail() {
  const { groupId } = useParams();
  const showDetail = useSetRecoilState(PostDetailModalAtom);
  const [detail, setDetail] = useRecoilState(PostDetailAtom);
  const [showImage, setShowImage] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const groupUser = useRecoilValue(groupUserAtom);
  const [postComment, setPostComment] = useState("");
  const [layoutId, setLayoutId] = useState(null);

  const { mutate: likeFn } = useMutation(postLike, {
    onSuccess: () => {
      if (detail.category === 0) {
        queryClient.invalidateQueries(["freePosts", groupId]);
      } else {
        queryClient.invalidateQueries(["noticePosts", groupId]);
      }
      setDetail((prev) => ({
        ...prev,
        findLike: !prev.findLike,
        likeCount: prev.findLike ? prev.likeCount - 1 : prev.likeCount + 1,
      }));
    },
  });

  // 무한스크롤 데이터
  const readCommentData = {
    groupId: groupId,
    postId: detail.postId,
  };
  const { data: getComment, fetchNextPage, isSuccess, hasNextPage, refetch } = useReadComments(readCommentData);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // Modal Close
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      showDetail(false);
    },
    [showDetail]
  );

  // 댓글 작성
  const { mutate: addCommentMutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", detail.postId]);
      setCommentCount((prev) => prev + 1);
    },
  });

  // 댓글 작성 form
  const Submit = (e) => {
    e.preventDefault();
    if (postComment === "") {
      toast.error("댓글을 작성해주세요", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const commentData = {
        groupId: groupId,
        postId: detail.postId,
        body: {
          comment: postComment,
        },
      };
      addCommentMutate(commentData);
      setPostComment("");
    }
  };

  const ImageModalOpen = useCallback(
    (num) => {
      setShowImage(true);
      setLayoutId(num);
    },
    [setShowImage]
  );

  const toggleLike = useCallback(() => {
    const LikeData = {
      groupId,
      postId: detail.postId,
    };
    likeFn(LikeData);
  }, [groupId, detail.postId, likeFn]);

  const onChange = (e) => {
    setPostComment(e.target.value);
  };

  // 엔터키도 가능하게
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      Submit(e);
    }
  };

  useEffect(() => {
    if (detail) {
      setCommentCount(detail.commentCount);
    }
  }, [detail]);

  return (
    <>
      <AnimatePresence>{showImage && <ImageModal layoutId={layoutId} detail={detail} setShowImage={setShowImage} />}</AnimatePresence>
      <DetailPost onClick={onCloseModal} variants={bgAni} initial="initial" animate="animate" exit="exit" transition={{ type: "tween", duration: 0.2 }}>
        <motion.div variants={modalAni} initial="initial" animate="animate" exit="exit" transition={{ type: "tween", duration: 0.2 }}>
          <Scrollbars autoHide onScrollStop={fetchNextPage}>
            <DetailWrapper onClick={(e) => e.stopPropagation()}>
              <DetailPostUserBox>
                <UserImg>{detail.groupAvatarImg ? <img src={detail.groupAvatarImg} alt="profile" onError={handleImgError} /> : <FakeImg />}</UserImg>
                <DetailPostUserInfo>
                  <div>
                    <strong>{detail.groupUserNickname}</strong>
                    <span>{getTime(detail.createdAt)}</span>
                  </div>
                  <Cancel onClick={onCloseModal}>
                    <CancelSvg />
                  </Cancel>
                </DetailPostUserInfo>
              </DetailPostUserBox>
              <PostContent>
                <PostImgWrap>
                  {detail?.postImg?.map((image, idx) => (
                    <Images key={image.postImg} onClick={() => ImageModalOpen(idx + "")} layoutId={idx + ""}>
                      <img src={image.postImg} alt="postImg" onError={handleImgError} />
                      <div />
                    </Images>
                  ))}
                </PostImgWrap>
                <Content>{detail.content}</Content>
                <PostResponse>
                  <PostLike onClick={toggleLike}>
                    {detail.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
                    <PostLikeCount>{detail.likeCount}</PostLikeCount>
                  </PostLike>
                  <PostComment>
                    <CommentSvg />
                    <CommentCount>{commentCount}</CommentCount>
                  </PostComment>
                </PostResponse>
              </PostContent>
              <CommentForm>
                {groupUser && groupUser.groupAvatarImg ? (
                  <CommentFormUserImg src={groupUser.groupAvatarImg} alt={groupUser.groupUserNickname} onError={handleImgError} />
                ) : (
                  <FakeImg />
                )}
                <CommentInput value={postComment} placeholder="댓글을 남겨주세요." type="text" onChange={onChange} onKeyPress={onKeyPress} />
                <CommentSubmitBtn onClick={Submit}>
                  <CommentPostSvg />
                </CommentSubmitBtn>
              </CommentForm>
              {isSuccess && getComment?.pages
                ? getComment?.pages.map((page) => (
                    <React.Fragment key={page.currentPage}>
                      {page?.data.map((comment) => {
                        return (
                          <Comment
                            nowRef={ref}
                            key={comment.commentId}
                            groupId={groupId}
                            commentId={comment.commentId}
                            comment={comment}
                            refetch={refetch}
                            setCommentCount={setCommentCount}
                            detailMode={true}
                          />
                        );
                      })}
                    </React.Fragment>
                  ))
                : null}
            </DetailWrapper>
          </Scrollbars>
        </motion.div>
      </DetailPost>
    </>
  );
}

export default PostDetail;

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
