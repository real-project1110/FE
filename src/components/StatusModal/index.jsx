import React, { useState } from "react";
import { useMutation } from "react-query";
import { queryClient } from "../..";
import { addStatus } from "../../apis/colorApi";
import {
  Wrapper,
  Status,
  Title,
  ColorPicker,
  High,
  Low,
  StatusInput,
  ButtonWrap,
  AddStatus,
  CancelAdd,
  Color,
  SelectedColor,
  InputWrap,
} from "./styles";

function StatusModal({ onCloseModal, groupId }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [statusMent, setStatusMent] = useState({
    content: "",
  });
  const { mutate: addMutate } = useMutation(addStatus, {
    onSuccess: () => queryClient.invalidateQueries(["statuses", groupId]),
  });

  const check = (color) => {
    setSelectedColor(color);
  };

  const onChange = (e) => {
    setStatusMent(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    const statusData = {
      groupId,
      body: {
        color: selectedColor,
        content: statusMent,
      },
    };
    addMutate(statusData);
  };

  return (
    <Wrapper>
      <Status onSubmit={Submit}>
        <Title>상태를 추가해보세요!</Title>
        <ColorPicker>
          <High>
            <Color
              isFocus={selectedColor === "#ffeb3c"}
              onClick={() => check("#ffeb3c")}
              value={"#ffeb3c"}
            />
            <Color
              isFocus={selectedColor === "#ff9900"}
              onClick={() => check("#ff9900")}
              value={"#ff9900"}
            />
            <Color
              isFocus={selectedColor === "#f44437"}
              onClick={() => check("#f44437")}
              value={"#f44437"}
            />
            <Color
              isFocus={selectedColor === "#ea1e63"}
              onClick={() => check("#ea1e63")}
              value={"#ea1e63"}
            />
            <Color
              isFocus={selectedColor === "#9c26b0"}
              onClick={() => check("#9c26b0")}
              value={"#9c26b0"}
            />
          </High>
          <Low>
            <Color
              isFocus={selectedColor === "#3f51b5"}
              onClick={() => check("#3f51b5")}
              value={"#3f51b5"}
            />
            <Color
              isFocus={selectedColor === "#00FFF6"}
              onClick={() => check("#00FFF6")}
              value={"#00FFF6"}
            />
            <Color
              isFocus={selectedColor === "#009788"}
              onClick={() => check("#009788")}
              value={"#009788"}
            />
            <Color
              isFocus={selectedColor === "#4baf4f"}
              onClick={() => check("#4baf4f")}
              value={"#4baf4f"}
            />
            <Color
              isFocus={selectedColor === "#7e5d4e"}
              onClick={() => check("#7e5d4e")}
              value={"#7e5d4e"}
            />
          </Low>
        </ColorPicker>
        <InputWrap>
          <StatusInput
            maxLength="10"
            placeholder="상태명을 입력해보세요! ex) 휴가, 연차 ... (최대 10글자)"
            onChange={onChange}
          />
        </InputWrap>
        <ButtonWrap>
          <AddStatus>추가</AddStatus>
          <CancelAdd onClick={onCloseModal}>취소</CancelAdd>
        </ButtonWrap>
      </Status>
    </Wrapper>
  );
}

export default StatusModal;
