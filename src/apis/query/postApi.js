import instance, { postApi } from "../instance";

/** 게시글 생성 { id, body:{ title,content,postImg,category } } */
export const addPost = async (payload) => {
  const { data } = await postApi.post(`groups/${payload}/posts`, payload.body);
  return data;
};

/** 카테고리에 따른 게시글 전체 조회 { id,category } */
export const readFreePosts = async (payload) => {
  const { data } = await instance.get(
    `groups/${payload.id}/posts?category=${payload.category}`
  );
  return data;
};

/** 게시글 상세 조회 ( payload ) */
export const readPost = async (payload) => {
  const { data } = await instance.get(`groups/posts/${payload}`);
  return data;
};

/** 게시글 삭제 ( id )*/
export const removePost = async (payload) => {
  const data = await instance.delete(`groups/posts/${payload}`);
  return data;
};

/** 게시글 수정 { id,body:{ title, content, postImg,cateogry } }*/
export const editPost = async (payload) => {
  const data = await postApi.put(`groups/posts/${payload.id}`, payload.body);
  return data;
};
