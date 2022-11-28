import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NoticeTitle, Wrapper } from "../NoticePosts/styles";
import { useSetRecoilState } from "recoil";
import { PostFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { useQuery } from "react-query";
import { readFreePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import FreePostItem from "../FreePostItem";
import {
  PostHeader,
  New,
  Newest,
  NewestComment,
  WritePost,
  Post,
  AllFreePost,
} from "./styles";

function FreePosts() {
  const setIsForm = useSetRecoilState(PostFormModalAtom);
  const { groupId } = useParams();

  // 자유 게시글 데이터 조회
  const { data: FreePosts, refetch } = useQuery(
    ["freePosts", groupId],
    () => readFreePosts(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

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
        <Scrollbars autoHide>
          {FreePosts &&
            FreePosts.data.map((post) => (
              <FreePostItem key={post.postId} refetch={refetch} post={post} />
            ))}
        </Scrollbars>
      </AllFreePost>
    </Wrapper>
  );
}

export default FreePosts;
