import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "../..";
import { addGroup, editGroupImage, inviteUsers } from "../../apis/groupApi";
import CancelSvg from "../../assets/svg/CancelSvg";

import {
  Button,
  DeleteImgBtn,
  Email,
  Emails,
  File,
  Form,
  GroupImg,
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
  const [emails, setEmails] = useState([]);
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
      // 그룹 생성
      if (step === 1) {
        addGroupFn({ groupName: data.groupName });
        // 그룹 초대
      } else if (step === 2) {
        if (!emails.length) return;
        const response = await inviteUsers({
          id: groupId,
          body: { email: emails },
        });
        if (response.status === 400)
          return toast.error("초대 실패", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        else {
          setEmails([]);
          setStep((prev) => prev + 1);
        }
        // 그룹 이미지 수정
      } else if (step === 3) {
        const response = await editGroupImage({
          id: groupId,
          body: { image: file },
        });
        if (response.status === 400)
          return toast.error("이미지 등록 실패", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        setStep((prev) => prev + 1);
        // 그룹 url로 이동
      } else if (step === 4) {
        navigate(`/groups/${groupId}`);
      }
    },
    [step, navigate, addGroupFn, groupId, emails, file]
  );

  // 나중에 할래요. 클릭시 실행되는 함수
  const clickLater = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  // 이미지 수정했을 때 실행되는 함수
  const onChangePreview = useCallback((e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setPreview(fileBlob);
  }, []);

  // 이미지를 초기화하는 버튼을 눌렀을 때 실행하는 함수
  const onDeleteImg = useCallback((e) => {
    setPreview(null);
    setFile(null);
  }, []);

  // 초대 버튼 클릭 시 실행되는 함수
  const clickInvite = useCallback(
    (e) => {
      e.preventDefault();
      setEmails((prev) => [...prev, watch("email")]);
    },
    [watch]
  );

  // input에서 enter 눌렀을 때 실행되는 함수
  const enterInvite = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        return clickInvite(e);
      }
    },
    [clickInvite]
  );

  // 이메일 취소 버튼을 눌렀을 때 해당 이메일이 삭제되게 하는 기능
  const deleteEmail = useCallback((index) => {
    setEmails((prev) => prev.filter((email, idx) => idx !== index));
  }, []);

  // email 목록을 추가했을 때 input을 비워주는 기능
  useEffect(() => {
    setValue("email", "");
  }, [emails, setValue]);

  return (
    <Wrapper as="main">
      <ToastContainer />
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
                {...register("email")}
                type="email"
                placeholder="예: hanghae99@gmail.com, mklee@naver.com"
                onKeyDown={enterInvite}
              />
              <button onClick={clickInvite}>초대하기</button>
            </Label>
            {emails.length > 0 && (
              <Emails>
                {emails.map((email, idx) => (
                  <Email key={email + idx}>
                    {email}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteEmail(idx);
                      }}
                    >
                      <CancelSvg />
                    </button>
                  </Email>
                ))}
              </Emails>
            )}

            <Button isValid={emails.length}>다음</Button>
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
              <File type="file" accept="image/*" onChange={onChangePreview} />
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
            <GroupImg _background={preview} />
            <Button isValid={true}>팀 생성하기</Button>
          </>
        )}
      </Form>
    </Wrapper>
  );
};

export default CreateGroup;
