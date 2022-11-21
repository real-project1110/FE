import React, { useCallback, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { inviteUsers } from "../../../apis/groupApi";
//import { useParams } from "react-router-dom";
import CancelSvg from "../../../assets/svg/CancelSvg";
import { inviteModalAtom } from "../../../shared/Atoms/groupModal";
import {
  BtnBox,
  FormHeader,
  FormWrapper,
  InputBox,
  InviteForm,
  InviteItem,
  InviteList,
  Label,
  ModalOutBtn,
  TeamName,
  Wrapper,
} from "./styles";

const InviteModal = () => {
  //const { id } = useParams();
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);
  const { register, reset, handleSubmit } = useForm();
  const [emails, setEmails] = useState([]);

  const outModal = useCallback(() => {
    setIsInviteModal(false);
  }, [setIsInviteModal]);

  // email을 목록에 추가하는 함수
  const onValid = useCallback(
    (data) => {
      setEmails((prev) => [...prev, data.email]);
      reset();
    },
    [reset]
  );

  // email list를 서버에 post 요청하는 함수
  const submitEmails = useCallback(
    async (e) => {
      e.preventDefault();
      if (emails.length == 0) return;
      // 서버에 email 보내는 요청
      const response = await inviteUsers({ emails });
      if (response.status === 400) return alert("초대 실패");
      setIsInviteModal(false);
      setEmails([]);
    },
    [setIsInviteModal, emails]
  );

  const deleteEmail = useCallback((num) => {
    setEmails((prev) => prev.filter((item, idx) => idx !== num));
  }, []);
  return (
    <Wrapper onClick={() => setIsInviteModal(false)}>
      <InviteForm
        onSubmit={handleSubmit(onValid)}
        onClick={(e) => e.stopPropagation()}
      >
        <FormWrapper>
          <FormHeader>
            <TeamName>항해99에 초대 요청</TeamName>
            <ModalOutBtn onClick={outModal}>
              <CancelSvg />
            </ModalOutBtn>
          </FormHeader>

          <Label>
            <span>받는 사람:</span>
            <InputBox>
              <input
                {...register("email")}
                type="text"
                placeholder="name@gmail.com"
              />
              <button>추가</button>
            </InputBox>
          </Label>
          <InviteList>
            <Scrollbars>
              {emails?.map((email, idx) => (
                <InviteItem>
                  <p>{email}</p>
                  <span onClick={() => deleteEmail(idx)}>취소</span>
                </InviteItem>
              ))}
            </Scrollbars>
          </InviteList>
        </FormWrapper>
        <BtnBox>
          <button onClick={submitEmails}>초대하기</button>
        </BtnBox>
      </InviteForm>
    </Wrapper>
  );
};

export default InviteModal;
