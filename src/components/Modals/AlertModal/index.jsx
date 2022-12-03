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
      console.log(response);
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
    <Wrapper onClick={onCloseModal}>
      <SideContainer>
        <TitleBox>
          <Title>알림</Title>
          <span>
            <CancelSvg />
          </span>
        </TitleBox>
        {isLoading ? (
          <span>로딩중...</span>
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

// const invites = [
//   { inviteId: 0, groupId: 1, groupName: "항해99" },
//   { inviteId: 1, groupId: 2, groupName: "할리스 동호회" },
//   { inviteId: 2, groupId: 3, groupName: "스타벅스 동호회" },
// ];
