import instance, { postApi } from "./instance/instance";

/** 게시글 생성 { id, body:{ content,postImg,category } } */
export const addPost = async (payload) => {
  const { data } = await postApi.post(
    `groups/${payload.groupId}/posts`,
    payload.body
  );
  return data;
};

/** 자유 게시글 전체 조회 { id,category } */
export const readFreePosts = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/posts?category=0`);
  return data;
};

/** 공지 게시글 전체 조회 { id,category } */
export const readNoticePosts = async (payload) => {
  const { data } = await instance.get(`groups/${payload}/posts?category=1`);
  return data;
};

/** 게시글 상세 조회 ( payload ) */
export const readPost = async (payload) => {
  const { data } = await instance.get(`groups/posts/${payload.postId}`);
  return data;
};

/** 게시글 삭제 ( id )*/
export const removePost = async (payload) => {
  const data = await instance.delete(
    `groups/${payload.groupId}/posts/${payload.postId}`
  );
  return data;
};

/** 게시글 수정 { groupId,postId,body:{ title, content, postImg,cateogry } }*/
export const editPost = async (payload) => {
  const data = await postApi.put(
    `groups/${payload.groupId}/posts/${payload.postId}`,
    payload.body
  );
  return data;
};

/** 게시글 상태 변경 (postId) */
export const togglePost = async (payload) => {
  const data = await instance.put(
    `/groups/${payload.groupId}/posts/${payload.postId}/notice`
  );
  return data;
};
