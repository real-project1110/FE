import React, { useCallback, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
//import { useParams } from "react-router-dom";
import styled from "styled-components";
import CancelSvg from "../../../assets/svg/CancelSvg";
import { inviteModalAtom } from "../../../shared/Atoms/groupModal";
import {
  FlexAlignBox,
  FlexBetweenBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

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
    (e) => {
      e.preventDefault();
      // 서버에 email 보내는 요청
      setIsInviteModal(false);
      setEmails([]);
    },
    [setIsInviteModal]
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

export const Wrapper = styled.div`
  position: fixed;
  ${FlexCenterBox};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const InviteForm = styled.form`
  ${FlexColumnBox};
  justify-content: space-between;
  width: 30vw;
  min-width: 25rem;
  max-width: 30rem;
  height: 23rem;
  padding: 2rem 1.5rem;
  transform: translateY(-80px);
  background-color: ${(props) => props.theme.layoutColor.white};
  border-radius: 10px;
  z-index: 9999;
`;

export const FormWrapper = styled.div`
  ${FlexColumnBox};
  height: 100%;
`;

export const FormHeader = styled.div`
  ${FlexBetweenBox};
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TeamName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ModalOutBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export const Label = styled.label`
  ${FlexColumnBox};
  span {
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const InputBox = styled.div`
  ${FlexBetweenBox};
  align-items: center;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.7rem;
  input {
    width: 100%;
    padding: 0.5rem 0.5rem;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 5px 0px 0px 5px;
    &:focus {
      border: 1px solid ${(props) => props.theme.color.green};
    }
  }
  button {
    width: 5rem;
    height: 100%;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.green};
    border-radius: 0px 5px 5px 0px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;

export const InviteList = styled.ul`
  ${FlexColumnBox};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

export const InviteItem = styled.li`
  ${FlexAlignBox};
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 0.6rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 5px;
  span {
    margin-right: 0.8rem;
    color: ${(props) => props.theme.color.gray};
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.red};
    }
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.green};
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;
