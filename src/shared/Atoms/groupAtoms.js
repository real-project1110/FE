import { atom } from "recoil";

// 그룹 정보를 저장하는 atom
export const groupAtom = atom({
  key: "group",
  default: {},
});

// 게시글 수정을 위해 게시글 정보를 저장하는 atom
export const editPostAtom = atom({
  key: "editPost",
  default: {},
});
