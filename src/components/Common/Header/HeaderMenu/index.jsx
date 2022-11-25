import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { queryClient } from "../../../..";
import { removeGroup } from "../../../../apis/groupApi";
import { editGroupUserNickname } from "../../../../apis/groupUserApi";
import { editNickname } from "../../../../apis/userApi";
import {
  editProfileModalAtom,
  headerMenuAtom,
} from "../../../../shared/Atoms/modalAtoms";
import { userAtom } from "../../../../shared/Atoms/userAtoms";
import { removeCookieToken } from "../../../../shared/Cookie/Cookie";
import { FlexAlignBox, FlexColumnBox } from "../../../../shared/Styles/flex";
import Menu from "../../../Modals/Menu";

const HeaderMenu = ({ user, isMain = false }) => {
  const setHeaderMenu = useSetRecoilState(headerMenuAtom);
  const setEditProfile = useSetRecoilState(editProfileModalAtom);
  const { groupId } = useParams();
  const { mutate: GroupOutFn } = useMutation(removeGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupList"]);
    },
  });

  const navigate = useNavigate();

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
      navigate("/");
    },
    [setHeaderMenu, navigate]
  );

  // 그룹에서 나가는 함수
  const onClickGroupout = useCallback(
    async (e) => {
      e.stopPropagation();
      // mutate(groupId);
      setHeaderMenu(false);
    },
    [setHeaderMenu]
  );

  // editProfile 모달을 보여주는 함수
  const onClickShowEditProfile = useCallback(
    async (e) => {
      e.stopPropagation();
      // if (isMain) {
      //   const response = await editNickname({ nickname: "한세준(F반)" });
      //   console.log(response);
      // } else {
      //   const response = await editGroupUserNickname({
      //     groupId,
      //     body: { groupUserNickname: "라면" },
      //   });
      //   console.log(response);
      // }
      setEditProfile(true);
      setHeaderMenu(false);
    },
    [] //[setHeaderMenu]
  );

  return (
    <Menu onCloseModal={onCloseModal} right={"4rem"} top={"60px"}>
      <MenuList onClick={onCloseModal}>
        <UserInfo>
          <img
            src={`https://avatars.dicebear.com/api/identicon/wooncloud${
              isMain ? user?.userId : user?.groupUserId
            }.svg`}
            alt=""
          />
          <span>{isMain ? user?.nickname : user?.groupUserNickname}</span>
        </UserInfo>
        <li onClick={onClickShowEditProfile}>프로필 편집</li>
        {!isMain && <li onClick={onClickGroupout}>항해99팀에서 나가기</li>}
        <li onClick={onClickLogout}>로그아웃</li>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;

export const MenuList = styled.ul`
  ${FlexColumnBox};
  min-width: 200px;
  & > li {
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    &:not(:first-child) {
      &:hover {
        background-color: ${(props) => props.theme.color.extraLightGray};
      }
    }
  }
`;
export const UserInfo = styled.li`
  ${FlexAlignBox};
  width: 100%;
  img {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.7rem;
  }
  span {
    width: 100%;
  }
`;
