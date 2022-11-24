import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../..";
import { addGroup, inviteUsers } from "../../apis/groupApi";

import {
  Button,
  DeleteImgBtn,
  File,
  Form,
  ImgLabel,
  Input,
  Label,
  LaterButton,
  Step,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";

// 그룹 생성 페이지
const CreateGroup = () => {
  const [step, setStep] = useState(1);
  const [groupId, setGroupId] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const { mutate: addGroupFn } = useMutation(addGroup, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["groupList"]);
      setGroupId(data);
      setStep((prev) => prev + 1);
    },
    onError: (error) => console.log(error),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // 다음 버튼 클릭 시 실행되는 함수
  const onValid = useCallback(
    async (data) => {
      if (step === 1) {
        // 그룹추가하는 요청
        addGroupFn({ groupName: data.groupName });
      } else if (step === 2) {
        setStep((prev) => prev + 1);
      } else if (step === 3) {
        // 그룹 이미지 수정 요청
        setStep((prev) => prev + 1);
      } else if (step === 4) {
        navigate(`/groups/${groupId}`);
      }
    },
    [step, navigate, addGroupFn, groupId]
  );

  // 나중에 할래요. 클릭시 실행되는 함수
  const clickLater = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  // 이미지 수정했을 때 실행되는 함수
  const onChangePreview = useCallback((e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setFile((prev) => e.target.files[0]);
    setPreview(fileBlob);
  }, []);

  // 이미지를 초기화하는 버튼을 눌렀을 때 실행하는 함수
  const onDeleteImg = useCallback((e) => {
    setPreview(null);
    setFile(null);
  }, []);

  const clickInvite = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await inviteUsers({
        id: groupId,
        body: { email: [watch("email")] },
      });
      console.log(response);
      if (response.status !== 201) return alert("초대 실패");
      else {
        setValue("email", "");
      }
    },
    [groupId, watch]
  );

  const enterInvite = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        return clickInvite(e);
      }
    },
    [clickInvite]
  );
  return (
    <Wrapper as="main">
      <Step isThree={step >= 3} isFour={step === 4}>
        {step}/3단계
      </Step>
      <Form onSubmit={handleSubmit(onValid)}>
        {step === 1 && (
          <>
            <Title>팀 이름이 어떻게 되나요?</Title>
            <SubTitle>
              {errors.groupName
                ? "팀이 인식할 수 있는 이름을 입력하는게 좋아요."
                : "팀 스페이스 생성을 도와드릴게요!"}
            </SubTitle>
            <Input
              {...register("groupName", { required: true, minLength: 2 })}
              type="text"
              placeholder="팀 이름을 입력해주세요"
            />
            <Button isValid={watch("groupName")}>다음</Button>
          </>
        )}
        {step === 2 && (
          <>
            <Title>{watch("groupName")}에 또 누가 있나요?</Title>
            <SubTitle>함께 하는 팀원을 이메일로 초대하세요.</SubTitle>
            <Label isValid={!errors.email}>
              <Input
                {...register("email", { required: true, minLength: 2 })}
                type="email"
                placeholder="예: hanghae99@gmail.com, mklee@naver.com"
                onKeyDown={enterInvite}
              />
              <button onClick={clickInvite}>초대하기</button>
            </Label>
            <Button isValid={watch("email")}>다음</Button>
            <LaterButton onClick={clickLater}>나중에 할래요.</LaterButton>
          </>
        )}
        {step === 3 && (
          <>
            <Title>팀에 대표 아이콘을 정해보세요.</Title>
            <SubTitle>
              {preview
                ? "멋진 대표 이미지에요!"
                : "원하는 이미지를 업로드하세요."}
            </SubTitle>
            <ImgLabel _background={preview}>
              <File type="file" onChange={onChangePreview} />
              {!preview && <span>+ 업로드 아이콘</span>}
            </ImgLabel>
            {preview ? (
              <DeleteImgBtn onClick={onDeleteImg}>사진 제거</DeleteImgBtn>
            ) : null}
            <Button isValid={preview}>다음</Button>
            <LaterButton onClick={clickLater}>나중에 할래요.</LaterButton>
          </>
        )}
        {step === 4 && (
          <>
            <Title>{watch("groupName")}</Title>
            <SubTitle>서로를 이해하는 팀을 만들어 드릴게요:)</SubTitle>
            <ImgLabel _background={preview} />
            <Button isValid={true}>팀 생성하기</Button>
          </>
        )}
      </Form>
    </Wrapper>
  );
};

export default CreateGroup;
