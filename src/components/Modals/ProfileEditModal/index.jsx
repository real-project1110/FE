import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { queryClient } from "../../..";
import CameraSvg from "../../../assets/svg/CameraSvg";
import CancelSvg from "../../../assets/svg/CancelSvg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  editGroupUserAvatar,
  editGroupUserNickname,
} from "../../../apis/groupUserApi";
import { editAvatar, editNickname } from "../../../apis/userApi";
import {
  ImgContainer,
  PasswordBtn,
  PasswordForm,
  ProfileContainer,
  SideContainer,
  Switch,
  SwitchBtn,
  Title,
  TitleBox,
  UserInfoForm,
  Wrapper,
} from "./styles";
import { handleImgError } from "../../../utils/handleImgError";

const ProfileEditModal = ({ user, closeModal, isMain, groupId }) => {
  const [change, setChange] = useState(true);
  const [imgPreview, setImgPreview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // 그룹 유저 닉네임 수정 mutation
  const { mutate: editGroupUserNicknameFn } = useMutation(
    editGroupUserNickname,
    {
      onSuccess: () => {
        toast.success("닉네임이 변경되었습니다.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        queryClient.invalidateQueries(["groupUser", `group ${groupId}`]);
      },
    }
  );

  // 유저 닉네임 수정 mutation
  const { mutate: editNicknameFn } = useMutation(editNickname, {
    onSuccess: () => {
      toast.success("닉네임이 변경되었습니다.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      queryClient.invalidateQueries(["user"]);
    },
  });

  // 유저 이미지 수정 mutation
  const { mutate: editUserAvatarFn } = useMutation(editAvatar, {
    onSuccess: () => {
      toast.success("프로필이 변경되었습니다.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      queryClient.invalidateQueries(["user"]);
    },
  });

  // 그룹 유저 이미지 수정 mutation
  const { mutate: editGroupUserAvatarFn } = useMutation(editGroupUserAvatar, {
    onSuccess: () => {
      toast.success("프로필이 변경되었습니다.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      queryClient.invalidateQueries(["groupUser", `group ${groupId}`]);
    },
  });

  // 모달 창을 닫는 함수
  const onCloseModal = useCallback(
    (e) => {
      e.stopPropagation();
      closeModal(false);
    },
    [closeModal]
  );

  // 닉네임 수정 요청 함수
  const onSubmitEditNickname = useCallback(
    (data) => {
      if (isMain) {
        editNicknameFn({ nickname: data.nickname });
      } else {
        editGroupUserNicknameFn({
          groupId,
          body: { groupUserNickname: data.nickname },
        });
      }
    },
    [isMain, editGroupUserNicknameFn, editNicknameFn, groupId]
  );

  // 패스워드 수정 요청 함수
  const onPass = () => {};

  // 마운트 되었을 때 nickname과 avatar를 넣어주는 작업

  // 이미지가 수정되었을 때 서버에 프로필 수정 요청을 보내는 함수
  const onEditProfile = async (e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    if (isMain) {
      editUserAvatarFn({ image: e.target.files[0] });
    } else {
      // const formData = new FormData();
      //formData.append("image", e.target.files[0]);
      editGroupUserAvatarFn({ groupId, body: { image: e.target.files[0] } });
      //editGroupUserAvatarFn({ groupId, body: formData });
    }
    setImgPreview(fileBlob);
    //editAvatarFn({ profileImage: e.target.files[0] });
  };

  useEffect(() => {
    if (isMain && user) {
      setValue("nickname", user.nickname);
      setImgPreview(user.avatarImg);
    } else if (!isMain && user) {
      setValue("nickname", user.groupUserNickname);
      setImgPreview(user.groupAvatarImg);
    }
  }, [user, setValue, isMain]);

  return (
    <Wrapper onClick={onCloseModal}>
      <ToastContainer />
      <SideContainer onClick={(e) => e.stopPropagation()}>
        <TitleBox>
          <Title>프로필 편집</Title>
          <span onClick={() => closeModal(false)}>
            <CancelSvg />
          </span>
        </TitleBox>
        <ProfileContainer>
          <ImgContainer>
            {imgPreview ? (
              <img src={imgPreview} alt="" onError={handleImgError} />
            ) : (
              <div />
            )}
            <label>
              <CameraSvg />
              <input type="file" accept="image/*" onChange={onEditProfile} />
            </label>
          </ImgContainer>
          <Switch>
            <SwitchBtn focus={change} onClick={() => setChange(true)}>
              기본 정보 변경
            </SwitchBtn>
            <SwitchBtn focus={!change} onClick={() => setChange(false)}>
              비밀번호 변경
            </SwitchBtn>
          </Switch>
          {change ? (
            <UserInfoForm onSubmit={handleSubmit(onSubmitEditNickname)}>
              <label>닉네임</label>
              <div>
                <input
                  {...register("nickname", {
                    required: "변경할 닉네임을 10자 이내로 입력해주세요.",
                  })}
                  type="text"
                  maxLength="15"
                />
                {watch("nickname") === "" ? (
                  <button style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                    수정
                  </button>
                ) : (
                  <button>수정</button>
                )}
              </div>
            </UserInfoForm>
          ) : (
            <PasswordForm onSubmit={handleSubmit(onPass)}>
              <label>기존 비밀번호</label>
              <input
                {...register("oldPassword", {
                  required: "현재 비밀번호를 입력해주세요.",
                })}
                type="password"
              />
              <span>{errors?.oldPassword?.message}</span>
              <label>새로운 비밀번호</label>
              <input
                {...register("newPassword", {
                  required: "새로운 비밀번호를 입력해주세요",
                  pattern: {
                    value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                    message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                  },
                })}
                type="password"
              />
              <span>{errors?.newPassword?.message}</span>
              <label>비밀번호 확인</label>
              <input
                {...register("confirm", {
                  required: "비밀번호 확인을 입력해주세요.",
                  pattern: {
                    value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                    message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                  },
                })}
                type="password"
              />
              <span>{errors?.confirm?.message}</span>
              {Object.keys(watch()).length === 0 ||
              (watch("oldPassword") === "" &&
                watch("newPassword") === "" &&
                watch("confirm") === "") ? (
                <PasswordBtn focus={false}>비밀번호 수정</PasswordBtn>
              ) : (
                <PasswordBtn focus={true}>비밀번호 수정</PasswordBtn>
              )}
            </PasswordForm>
          )}
        </ProfileContainer>
      </SideContainer>
    </Wrapper>
  );
};

export default ProfileEditModal;
