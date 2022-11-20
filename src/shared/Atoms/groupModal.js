import { atom } from "recoil";

// group 초대 모달
export const inviteModalAtom = atom({
  key: "inviteModal",
  default: false,
});

export const headerMenuAtom = atom({
  key: "headerMenuAtom",
  default: false,
});
