import React, { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../..";
import { readInvites, removeInvite } from "../../../apis/groupApi";
import { addGroupUsers } from "../../../apis/groupUserApi";
import CancelSvg from "../../../assets/svg/CancelSvg";
import {
  AlertItem,
  AlertList,
  InviteBtn,
  InviteBtns,
  InviteDescription,
  InviteInfo,
  SideContainer,
  Title,
  TitleBox,
  Wrapper,
} from "./styles";

const AlertModal = ({ setHeaderAlert }) => {
  const navigate = useNavigate();
  // 초대 겟 하는 요청 추가해야함
  const { data: invites, isLoading } = useQuery(["alerts"], readInvites);

  // 초대 삭제하는 요청
  const { mutate: deleteAlertFn } = useMutation(removeInvite, {
    onSuccess: () => {
      queryClient.invalidateQueries(["alerts"]);
    },
  });

  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      setHeaderAlert(false);
    },
    [setHeaderAlert]
  );

  // 수락 버튼
  const onClickCall = useCallback(
    async (groupId, inviteId) => {
      //e.stopPropagation();
      const response = await addGroupUsers({ groupId });

      if (response.status === 201) {
        queryClient.invalidateQueries(["groupList"]);
        deleteAlertFn(inviteId);
        setTimeout(() => {
          navigate(`/groups/${groupId}`);
        }, 100);
        setHeaderAlert(false);
      }
    },
    [setHeaderAlert, navigate, deleteAlertFn]
  );

  // 거절 버튼
  const onClickRefuse = useCallback(
    (num) => {
      deleteAlertFn(num);
    },
    [deleteAlertFn]
  );
  return (
    <Wrapper
      onClick={onCloseModal}
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
    >
      <SideContainer
        variants={modalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", duration: 0.2 }}
      >
        <TitleBox>
          <Title>알림</Title>
          <span>
            <CancelSvg />
          </span>
        </TitleBox>
        {isLoading ? (
          <div />
        ) : (
          <AlertList onClick={(e) => e.stopPropagation()}>
            {invites &&
              invites.map((invite) => (
                <AlertItem key={invite.inviteId}>
                  <InviteInfo>
                    <img
                      src={`https://avatars.dicebear.com/api/identicon/wooncloud5.svg`}
                      alt=""
                    />
                    <InviteDescription>
                      <p>
                        <strong>{invite.groupName}</strong>으로부터 초대장이
                        도착했습니다.
                      </p>
                      <span>1시간 전</span>
                    </InviteDescription>
                  </InviteInfo>
                  <InviteBtns>
                    <InviteBtn
                      isTrue={true}
                      onClick={() =>
                        onClickCall(invite.groupId, invite.inviteId)
                      }
                    >
                      수락
                    </InviteBtn>
                    <InviteBtn
                      isTrue={false}
                      onClick={() => onClickRefuse(invite.inviteId)}
                    >
                      거절
                    </InviteBtn>
                  </InviteBtns>
                </AlertItem>
              ))}
          </AlertList>
        )}
      </SideContainer>
    </Wrapper>
  );
};

export default AlertModal;

const modalAni = {
  initial: { x: 400, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 },
};

const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.4)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};
