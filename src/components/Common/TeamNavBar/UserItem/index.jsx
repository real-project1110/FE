import React, { useCallback, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { queryClient } from "../../../..";
import { goChatRoom, readUnread } from "../../../../apis/chatApis";
import useSocket from "../../../../hooks/useSocket";
import { groupAtom } from "../../../../recoil/groupAtoms";
import { chatUserAtom } from "../../../../recoil/userAtoms";

import { getIcon } from "../../../../utils/getIcon";
import { handleImgError } from "../../../../utils/handleImgError";
import {
  Icon,
  UserContainer,
  UserImg,
  UserStatusModal,
  UnReadBox,
} from "./styles";

const UserItem = ({
  user,
  isMe = false,
  status,
  myUserData,
  groupId,
  isLoggedIn,
  unreads,
  setUnreads,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const setChatUser = useSetRecoilState(chatUserAtom);
  const setGroup = useSetRecoilState(groupAtom);
  const [socket] = useSocket(groupId);

  const { data: unreadCount } = useQuery(
    ["unread", myUserData?.groupUserId, user?.groupUserId],
    () =>
      readUnread({
        sender: Math.min(user?.groupUserId, myUserData?.groupUserId),
        receiver: Math.max(user?.groupUserId, myUserData?.groupUserId),
        timestamps: localStorage.getItem(
          `${groupId}-${myUserData?.groupUserId}-${user?.groupUserId}`
        ),
      }),
    {
      retry: 0,
      staleTime: Infinity,
      enabled: !!localStorage.getItem(
        `${groupId}-${myUserData?.groupUserId}-${user?.groupUserId}`
      ),
    }
  );
  const navigate = useNavigate();

  // 마우스가 유저에게로 올라갈 때 실행 (상태 메시지 위ㅊㅣ)
  const onHover = useCallback((e) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    setIsHover(true);
  }, []);

  // 마우스가 유저에게 떠날 때 실행 (상태 메시지 위ㅊㅣ)
  const onLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  // 채팅방으로 이동
  const goChatRoomFn = async () => {
    if (!user || !myUserData) return;
    const payload = {
      groupId,
      sender: Math.min(myUserData.groupUserId, user.groupUserId),
      receiver: Math.max(myUserData.groupUserId, user.groupUserId),
    };
    const {
      status,
      data: { data: roomId },
    } = await goChatRoom(payload);
    if (status === 200) {
      setGroup((prev) => ({ ...prev, roomIds: [...prev.roomIds, roomId] }));
      navigate(`/groups/${groupId}/chats/${roomId}`);
      queryClient.setQueryData(
        ["unread", myUserData?.groupUserId, user?.groupUserId],
        0
      );
      setUnreads((prev) => ({ ...prev, [user.groupUserId]: 0 }));
      //setChatCount(0);
      setChatUser(user);
    } else {
      return toast.error("채팅방 입장에 실패하였습니다.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (unreadCount && user) {
      setUnreads((prev) => ({ ...prev, [user.groupUserId]: unreadCount }));
    } else {
      setUnreads((prev) => ({ ...prev, [user?.groupUserId]: 0 }));
    }
  }, [unreadCount, user, setUnreads]);

  useEffect(() => {
    if (socket && user && !isMe) {
      socket?.on("unread", (data) => {
        if (data === +user?.groupUserId) {
          if (
            !localStorage.getItem(
              `${groupId}-${myUserData?.groupUserId}-${user?.groupUserId}`
            )
          ) {
            localStorage.setItem(
              `${groupId}-${myUserData?.groupUserId}-${user?.groupUserId}`,
              (new Date().getTime() - 300).toString()
            );
          }
        }

        if (data === user.groupUserId)
          setUnreads((prev) => ({
            ...prev,
            [user.groupUserId]: prev[user.groupUserId] + 1,
          }));
      });
      return () => {
        socket.off("unread");
      };
    }
  }, [socket, user, isMe, groupId, myUserData, setUnreads]);

  // useEffect(() => {
  //   unreadRefetch();
  // }, [unreadRefetch]);

  return (
    <>
      <ToastContainer />
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
          {isLoggedIn || isMe ? <div /> : null}
        </UserImg>
        <span>
          {user.groupUserNickname}
          {isMe && <strong>나</strong>}
        </span>
        <Icon>{getIcon(isMe ? status : user?.status)}</Icon>
        {unreads && unreads[user?.groupUserId] > 0 && (
          <UnReadBox>{unreads[user?.groupUserId]}</UnReadBox>
        )}
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
