import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 유저가 소속된 그룹 리스트를 저장하는 atom
export const groupListAtom = atom({
  key: "groupList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 그룹 정보를 저장하는 atom
export const groupAtom = atom({
  key: "group",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

// 게시글 수정을 위해 게시글 정보를 저장하는 atom
export const editPostAtom = atom({
  key: "editPost",
  default: {},
});

export const PostDetailAtom = atom({
  key: "PostDetail",
  default: {},
});
