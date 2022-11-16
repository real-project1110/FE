import instance from "../instance";

/** 댓글 생성  { id,body:{ comment } } */
export const addComment = async (payload) => {
  const data = await instance.post(
    `groups/posts/${payload.id}/comments`,
    payload.body
  );
};

/** 해당 게시글에 대한 댓글 전체 조회 ( id ) */
export const readComments = async (payload) => {
  const { data } = await instance.get(`groups/posts/${payload}/comments`);
  return data;
};

/** 댓글 수정 {id, body:{ comment } } */
export const EditComment = async (payload) => {
  const data = await instance.put(
    `groups/comments/${payload.id}`,
    payload.body
  );
  return data;
};

/** 댓글 삭제 ( id ) */
export const removeComment = async (payload) => {
  const data = await instance.delete(`groups/comments/${payload}`);
  return data;
};
