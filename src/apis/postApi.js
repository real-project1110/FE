import { useInfiniteQuery } from "react-query";
import instance, { postApi } from "./instance/instance";

/** 게시글 생성 { id, body:{ content,postImg,category } } */
export const addPost = async (payload) => {
  const { data } = await postApi.post(`groups/${payload.groupId}/posts`, payload.body);
  return data;
};

/** 자유 게시글 전체 조회 { id,category } */
export const useReadFreePosts = (groupId) => {
  const getFreePosts = async ({ pageParam = 1 }) => {
    const { data } = await instance.get(`groups/${groupId}/posts?page=${pageParam}&category=0`);
    return {
      data: data.data,
      currentPage: pageParam,
    };
  };
  const {
    data: getPost,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(
    ["getFreePosts", groupId],
    getFreePosts,
    {
      getNextPageParam: (lastPage, pages) => (lastPage.data[0] ? lastPage.currentPage + 1 : undefined),
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  return { getPost, fetchNextPage, isSuccess, hasNextPage, refetch };
};

/** 공지 게시글 전체 조회 { id,category } */
export const useReadNoticePosts = (groupId) => {
  const getNoticePosts = async ({ pageParam = 1 }) => {
    const { data } = await instance.get(`groups/${groupId}/posts?page=${pageParam}&category=1`);
    return {
      data: data.data,
      currentPage: pageParam,
    };
  };
  const {
    data: getNotice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(
    ["getNoticePosts", groupId],
    getNoticePosts,
    {
      getNextPageParam: (lastPage, pages) => (lastPage.data[0] ? lastPage.currentPage + 1 : undefined),
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
  return { getNotice, fetchNextPage, isSuccess, hasNextPage, refetch };
};

/** 게시글 상세 조회 ( payload ) */
export const readPost = async (payload) => {
  const { data } = await instance.get(`groups/posts/${payload.postId}`);
  return data;
};

/** 게시글 삭제 ( id )*/
export const removePost = async (payload) => {
  const data = await instance.delete(`groups/${payload.groupId}/posts/${payload.postId}`);
  return data;
};

/** 게시글 수정 { groupId,postId,body:{ title, content, postImg,cateogry } }*/
export const editPost = async (payload) => {
  const data = await postApi.put(`groups/${payload.groupId}/posts/${payload.postId}`, payload.body);
  return data;
};

/** 게시글 상태 변경 (postId) */
export const togglePost = async (payload) => {
  const data = await instance.put(`/groups/${payload.groupId}/posts/${payload.postId}/notice`);
  return data;
};
