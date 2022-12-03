import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const groupUserAtom = atom({
  key: "groupUser",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const groupUserListAtom = atom({
  key: "groupUserList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const chatUserAtom = atom({
  key: "chatUser",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const onlineListAtom = atom({
  key: "onlineList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
