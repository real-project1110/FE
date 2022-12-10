import React, { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { outGroup } from "../../../../apis/groupApi";
import { groupAtom } from "../../../../recoil/groupAtoms";
import {
  editProfileModalAtom,
  headerMenuAtom,
} from "../../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../../recoil/userAtoms";
import { removeCookieToken } from "../../../../shared/Cookie/Cookie";
import { handleImgError } from "../../../../utils/handleImgError";
import Menu from "../../../Modals/Menu";
import { FakeImg, MenuList, UserInfo } from "./styles";

const HeaderMenu = ({ user, isMain = false }) => {
  const setHeaderMenu = useSetRecoilState(headerMenuAtom);
  const setEditProfile = useSetRecoilState(editProfileModalAtom);
  const group = useRecoilValue(groupAtom);
  const navigate = useNavigate();
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const setGroupUSer = useSetRecoilState(groupUserAtom);
  const { mutate: groupOutFn } = useMutation(outGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupList"]);
      navigate("/main/write");
    },
  });

  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      setHeaderMenu(false);
    },
    [setHeaderMenu]
  );

  // 로그아웃 하는 함수
  const onClickLogout = useCallback(
    (e) => {
      e.stopPropagation();
      setHeaderMenu(false);
      removeCookieToken();
      queryClient.clear();
      setGroupUSer({});
      navigate("/");
    },
    [setHeaderMenu, navigate, queryClient, setGroupUSer]
  );

  // 그룹에서 나가는 함수
  const onClickGroupout = useCallback(
    async (e) => {
      e.stopPropagation();
      groupOutFn(groupId);
      setHeaderMenu(false);
    },
    [setHeaderMenu, groupOutFn, groupId]
  );

  // editProfile 모달을 보여주는 함수
  const onClickShowEditProfile = useCallback(
    async (e) => {
      e.stopPropagation();
      setEditProfile(true);
      setHeaderMenu(false);
    },
    [setEditProfile, setHeaderMenu]
  );
  return (
    <Menu onCloseModal={onCloseModal} right={"3rem"} top={"50px"}>
      <MenuList onClick={onCloseModal}>
        <UserInfo>
          {user && (user.avatarImg || user.groupAvatarImg) ? (
            <img
              src={isMain ? user?.avatarImg : user?.groupAvatarImg}
              alt={isMain ? user?.nickname : user?.groupUserNickname}
              onError={handleImgError}
            />
          ) : (
            <FakeImg />
          )}

          <span>{isMain ? user?.nickname : user?.groupUserNickname}</span>
        </UserInfo>
        <li onClick={onClickShowEditProfile}>프로필 편집</li>
        {!isMain && group && (
          <li onClick={onClickGroupout}>
            <strong>{group.groupName}</strong>에서 나가기
          </li>
        )}
        <li onClick={onClickLogout}>로그아웃</li>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
