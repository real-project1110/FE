import React, { useMemo, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../..";
import { addStatus } from "../../apis/colorApi";
import { nowColor } from "../../shared/Atoms/ColorAtom";
import { ColorFormModalAtom } from "../../shared/Atoms/modalAtoms";
import {
  Wrapper,
  Status,
  Title,
  ColorPicker,
  StatusInput,
  ButtonWrap,
  Color,
  InputWrap,
  Button,
} from "./styles";

function StatusModal({ groupId }) {
  const setIsColor = useSetRecoilState(ColorFormModalAtom);
  const existColor = useRecoilValue(nowColor);
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

  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsColor(false);
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
    setIsColor(false);
  };

  const newColor = useMemo(() => {
    if (existColor) {
      const existColorArray = existColor.map((color) => color.color);
      return colors.filter((color) => !existColorArray.includes(color));
    }
  }, [existColor]);

  return (
    <Wrapper onClick={onCloseModal}>
      <Status onSubmit={Submit} onClick={(e) => e.stopPropagation()}>
        <Title>상태를 추가해보세요!</Title>
        <ColorPicker>
          {newColor.map((color) => (
            <Color
              key={color}
              isFocus={selectedColor === color}
              onClick={() => check(color)}
              value={color}
            />
          ))}
        </ColorPicker>
        <InputWrap>
          <StatusInput
            maxLength="10"
            placeholder="상태명을 입력해보세요! ex) 휴가, 연차 ... (최대 10글자)"
            onChange={onChange}
          />
        </InputWrap>
        <ButtonWrap>
          <Button isAdd={true}>추가</Button>
          <Button isAdd={false}>취소</Button>
        </ButtonWrap>
      </Status>
    </Wrapper>
  );
}

export default StatusModal;

const colors = [
  "#ffeb3c",
  "#ff9900",
  "#f44437",
  "#ea1e63",
  "#9c26b0",
  "#3f51b5",
  "#00FFF6",
  "#009788",
  "#4baf4f",
  "#7e5d4e",
];
