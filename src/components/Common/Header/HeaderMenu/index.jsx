import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { headerMenuAtom } from "../../../../shared/Atoms/groupModal";
import { FlexAlignBox, FlexColumnBox } from "../../../../shared/Styles/flex";
import Menu from "../../../Modals/Menu";

const HeaderMenu = () => {
  const setHeaderMenu = useSetRecoilState(headerMenuAtom);

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
    },
    [setHeaderMenu]
  );

  // editProfile 모달을 보여주는 함수
  const onClickShowEditProfile = useCallback(
    (e) => {
      e.stopPropagation();
      setHeaderMenu(false);
    },
    [setHeaderMenu]
  );
  return (
    <Menu onCloseModal={onCloseModal}>
      <MenuList onClick={onCloseModal}>
        <UserInfo>
          <img
            src={"https://avatars.dicebear.com/api/identicon/wooncloud5.svg"}
            alt=""
          />
          <span>문예진(9기)</span>
        </UserInfo>
        <li onClick={onClickShowEditProfile}>프로필 편집</li>
        <li onClick={onClickLogout}>항해99팀에서 로그아웃</li>
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
