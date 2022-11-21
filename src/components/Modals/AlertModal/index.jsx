import React, { useCallback } from "react";
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
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      setHeaderAlert(false);
    },
    [setHeaderAlert]
  );

  // 수락 버튼
  const onClickCall = useCallback(async (e) => {
    e.stopPropagation();
  }, []);

  // 거절 버튼
  const onClickRefuse = useCallback(async (e) => {
    e.stopPropagation();
  }, []);
  return (
    <Wrapper onClick={onCloseModal}>
      <SideContainer>
        <TitleBox>
          <Title>알림</Title>
          <span>
            <CancelSvg />
          </span>
        </TitleBox>

        <AlertList onClick={(e) => e.stopPropagation()}>
          {invites?.map((invite) => (
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
                <InviteBtn isTrue={true} onClick={onClickCall}>
                  수락
                </InviteBtn>
                <InviteBtn isTrue={false} onClick={onClickRefuse}>
                  거절
                </InviteBtn>
              </InviteBtns>
            </AlertItem>
          ))}
        </AlertList>
      </SideContainer>
    </Wrapper>
  );
};

export default AlertModal;

const invites = [
  { inviteId: 0, groupId: 1, groupName: "항해99" },
  { inviteId: 1, groupId: 2, groupName: "할리스 동호회" },
  { inviteId: 2, groupId: 3, groupName: "스타벅스 동호회" },
];
