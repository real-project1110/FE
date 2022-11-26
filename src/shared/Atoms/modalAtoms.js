import { atom } from "recoil";

// group 초대 요청 모달
export const inviteModalAtom = atom({
  key: "inviteModal",
  default: false,
});

// header 프로필 클릭 시 나오는 모달
export const headerMenuAtom = atom({
  key: "headerMenuAtom",
  default: false,
});

// header 알림 버튼 클릭 시 나오는 모달
export const headerAlertAtom = atom({
  key: "headerAlertAtom",
  default: false,
});

// post form 여닫기 모달
export const PostFormModalAtom = atom({
  key: "PostFormModalAtom",
  default: false,
});

// profile 편집 모달
export const editProfileModalAtom = atom({
  key: "editProfileModalAtom",
  default: false,
});

// color form 여닫기 모달
export const ColorFormModalAtom = atom({
  key: "ColorFormModalAtom",
  default: false,
});
