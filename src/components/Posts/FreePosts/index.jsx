import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NoticeTitle, Wrapper } from "../NoticePosts/styles";
import { useSetRecoilState } from "recoil";
import { PostFormModalAtom } from "../../../recoil/modalAtoms";
import { useReadFreePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import FreePostItem from "../FreePostItem";
import { PostHeader, New, Newest, NewestComment, WritePost, Post, AllFreePost } from "./styles";

function FreePosts() {
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { groupId } = useParams();

  const { getPost, fetchNextPage, isSuccess, hasNextPage, refetch } = useReadFreePosts(groupId);
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
        <Scrollbars autoHide onScrollStop={fetchNextPage}>
          {isSuccess && getPost?.pages
            ? getPost?.pages.map((page) => (
                <React.Fragment key={page.currentPage}>
                  {page?.data.map((post) => {
                    return <FreePostItem nowRef={ref} groupId={groupId} key={post.postId} refetch={refetch} post={post} />;
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
