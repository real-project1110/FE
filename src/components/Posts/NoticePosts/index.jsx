import React, { useEffect } from "react";
import { Wrapper, AllPost, Notice } from "./styles";
import Scrollbars from "react-custom-scrollbars-2";
import { useReadNoticePosts } from "../../../apis/postApi";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import NoticePostItem from "../NoticePostItem";

function NoticePosts() {
  const { groupId } = useParams();

  // 공지 게시글 조회
  const { getNotice, fetchNextPage, isSuccess, hasNextPage, refetch } =
    useReadNoticePosts(groupId);

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Wrapper>
      <Notice>공지사항</Notice>
      <AllPost>
        <Scrollbars autoHide onScrollStop={fetchNextPage}>
          {isSuccess && getNotice?.pages
            ? getNotice?.pages.map((page) => (
                <React.Fragment key={page.currentPage}>
                  {page?.data.map((notice) => (
                    <NoticePostItem
                      groupId={groupId}
                      newRef={ref}
                      key={notice.postId}
                      notice={notice}
                      refetch={refetch}
                    />
                  ))}
                </React.Fragment>
              ))
            : null}
        </Scrollbars>
      </AllPost>
    </Wrapper>
  );
}

export default NoticePosts;
