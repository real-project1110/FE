import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Icon, MessageModal, StatusIcons } from "./styles";
import { getIcon } from "../../../../utils/getIcon";
const IconList = ({ status, changeStatus, groupId, editStatusFn }) => {
  const { register, handleSubmit, reset } = useForm();
  const [showForm, setShowForm] = useState(false);

  // 상태메시지 바꾸는 함수
  const onValid = useCallback(
    (data) => {
      // 상태 메시지와 status를 서버에 전달
      const payload = {
        id: groupId,
        body: {
          status,
          statusMessage: data.statusMessage,
        },
      };
      editStatusFn(payload);
      setShowForm(false);
      reset();
    },
    [reset, editStatusFn, groupId, status]
  );

  const iconClick = useCallback(
    (num) => {
      if (status === 0) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
      changeStatus(num);
    },
    [changeStatus, status]
  );

  const cancleBtnClick = useCallback(() => {
    setShowForm(false);
    changeStatus(0);
  }, [changeStatus]);

  return (
    <>
      <StatusIcons>
        <Icon isFocus={1 === status} onClick={() => iconClick(1)}>
          {getIcon(1)}
        </Icon>
        <Icon isFocus={2 === status} onClick={() => iconClick(2)}>
          {getIcon(2)}
        </Icon>
        <Icon isFocus={3 === status} onClick={() => iconClick(3)}>
          {getIcon(3)}
        </Icon>
        <Icon isFocus={4 === status} onClick={() => iconClick(4)}>
          {getIcon(4)}
        </Icon>
        <Icon isFocus={5 === status} onClick={() => iconClick(5)}>
          {getIcon(5)}
        </Icon>
        <Icon isFocus={6 === status} onClick={() => iconClick(6)}>
          {getIcon(6)}
        </Icon>
      </StatusIcons>
      {showForm && (
        <MessageModal onSubmit={handleSubmit(onValid)}>
          <input
            {...register("statusMessage", { minLength: 2 })}
            type="text"
            required
            placeholder="지금 상태가 어떻게 되세요?"
          />
          <div>
            <button>저장</button>
            <button onClick={cancleBtnClick}>취소</button>
          </div>
        </MessageModal>
      )}
    </>
  );
};

export default IconList;
