import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NoticeTitle, Wrapper } from "../NoticePosts/styles";
import { useSetRecoilState } from "recoil";
import { PostFormModalAtom } from "../../../recoil/modalAtoms";
import { useReadFreePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Buttons } from "../../Chats/ChatForm";
import FreePostItem from "../FreePostItem";
import {
  PostHeader,
  New,
  Newest,
  NewestComment,
  AllFreePost,
  PostPreview,
  PostButtonTitle,
  PostButton,
  ButtonBar,
  ButtonContent,
  FakeBtn,
} from "./styles";
import BoldSvg from "../../../assets/svg/BoldSvg";
import ItalicSvg from "../../../assets/svg/ItalicSvg";
import ASvg from "../../../assets/svg/ASvg";
import FileSvg from "../../../assets/svg/FileSvg";
import EmojiSvg from "../../../assets/svg/EmojiSvg";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";

function FreePosts() {
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { groupId } = useParams();

  const { getPost, fetchNextPage, isSuccess, hasNextPage, refetch } =
    useReadFreePosts(groupId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // 글작성 모달 이벤트
  const PostModalOpen = (e) => {
    e.stopPropagation();
    setIsForm(true);
  };

  return (
    <Wrapper>
      <PostPreview onClick={PostModalOpen}>
        <PostButtonTitle>새 글 작성</PostButtonTitle>
        <PostButton>
          <ButtonBar>
            <Buttons>
              <BoldSvg />
              <ItalicSvg />
              <ASvg />
              <span />
              <FileSvg />
              <EmojiSvg />
            </Buttons>
          </ButtonBar>
          <ButtonContent>
            <span>글을 작성하려면 클릭하세요!</span>
            <FakeBtn>
              <span>게시</span>
              <div>
                <PostButtonSvg />
              </div>
            </FakeBtn>
          </ButtonContent>
        </PostButton>
      </PostPreview>
      <PostHeader>
        <NoticeTitle>게시글</NoticeTitle>
        <New>
          <Newest>최신순</Newest>
          <NewestComment>최근댓글순</NewestComment>
        </New>
      </PostHeader>
      <AllFreePost>
        <Scrollbars autoHide onScrollStop={fetchNextPage}>
          {isSuccess && getPost?.pages
            ? getPost?.pages.map((page) => (
                <React.Fragment key={page.currentPage}>
                  {page?.data.map((post) => {
                    return (
                      <FreePostItem
                        nowRef={ref}
                        groupId={groupId}
                        key={post.postId}
                        refetch={refetch}
                        post={post}
                      />
                    );
                  })}
                </React.Fragment>
              ))
            : null}
        </Scrollbars>
      </AllFreePost>
    </Wrapper>
  );
}

export default FreePosts;
