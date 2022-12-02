import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { goChatRoom } from "../../../../apis/chatApis";
import { chatUserAtom } from "../../../../recoil/userAtoms";

import { getIcon } from "../../../../utils/getIcon";
import { handleImgError } from "../../../../utils/handleImgError";
import { Icon, UserContainer, UserImg, UserStatusModal } from "./styles";

const UserItem = ({ user, isMe = false, status, myUserData, groupId }) => {
  const [isHover, setIsHover] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const setChatUser = useSetRecoilState(chatUserAtom);

  const navigate = useNavigate();
  // 마우스가 유저에게로 올라갈 때 실행
  const onHover = useCallback((e) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    setIsHover(true);
  }, []);

  // 마우스가 유저에게 떠날 때 실행
  const onLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  // 채팅방으로 이동
  const goChatRoomFn = async () => {
    if (!user || !myUserData) return;
    const min = Math.min(user.groupUserId, myUserData.groupUserId);
    const max = Math.max(user.groupUserId, myUserData.groupUserId);
    const payload = {
      groupId,
      body: `${min},${max}`,
    };
    const {
      status,
      data: { data: roomId },
    } = await goChatRoom(payload);
    if (status === 200) {
      navigate(`/groups/${groupId}/chats/${roomId}`);
    }
    setChatUser(user);
  };

  return (
    <>
      <UserContainer
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={goChatRoomFn}
      >
        <UserImg>
          <img
            src={user.groupAvatarImg}
            alt={user.groupUserNickname}
            onError={handleImgError}
          />
          {user?.isLoggedIn ? <div /> : null}
        </UserImg>
        <span>
          {user.groupUserNickname}
          {isMe && <strong>나</strong>}
        </span>
        <Icon>{getIcon(isMe ? status : user?.status)}</Icon>
        {isHover && user?.statusMessage && (
          <UserStatusModal style={{ left: mouseX + 20, top: mouseY - 20 }}>
            {user?.statusMessage}
          </UserStatusModal>
        )}
      </UserContainer>
    </>
  );
};

export default UserItem;
