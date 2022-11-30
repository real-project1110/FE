import instance from "./instance/instance";

/** 댓글 생성  { groupId: groupId, postId: postId ,body:{ comment } } */
export const addComment = async (payload) => {
  const data = await instance.post(`groups/${payload.groupId}/posts/${payload.postId}/comments`, payload.body);
  return data;
};

/** 해당 게시글에 대한 댓글 전체 조회 ( groupId: groupId, postId: postId ) */
export const readComments = async (payload) => {
  const { data } = await instance.get(`groups/${payload.groupId}/posts/${payload.postId}/comments`);
  return data.data;
};

/** 댓글 수정 { groupId: groupId, postId: postId body:{ comment } } */
export const editComment = async (payload) => {
  console.log("pay", payload);
  const data = await instance.put(`groups/${payload.groupId}/posts/comments/${payload.commentId}`, payload.body);
  return data;
};

/** 댓글 삭제 ( groupId: groupId, postId: postId ) */
export const removeComment = async (payload) => {
  console.log("pay", payload);
  const data = await instance.delete(`groups/${payload.groupId}/posts/comments/${payload.commentId}`);
  return data;
};

// 댓글 좋아요 / 취소
export const commentLike = async (payload) => {
  const data = await instance.put(`/groups/${payload.groupId}/posts/comments/${payload.commentId}/likes`);
  return data;
};
