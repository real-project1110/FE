import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { queryClient } from "../../..";
import { editGroupImage, EditGroupName } from "../../../apis/groupApi";
import CameraSvg from "../../../assets/svg/CameraSvg";
import CancelSvg from "../../../assets/svg/CancelSvg";
import { handleImgError } from "../../../utils/handleImgError";
import {
  EditModal,
  EditModalBg,
  EditModalHeader,
  GroupInfoForm,
  ImgContainer,
} from "./styles";

const GroupEditModal = ({ group, setIsEdit }) => {
  const [preview, setPreview] = useState(null);
  const { register, handleSubmit, watch, setValue } = useForm();
  const { mutate: editGroupNameFn } = useMutation(EditGroupName, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupList"]);
      queryClient.invalidateQueries(["group", group?.groupId + ""]);
      toast.success("그룹 이름이 수정되었습니다. 😊", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onError: () => {
      toast.error("그룹 이름 수정에 실패하였습니다. 😰", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
  const { mutate: editGroupImageFn } = useMutation(editGroupImage, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupList"]);
      queryClient.invalidateQueries(["group", group?.groupId + ""]);
      toast.success("그룹 이미지가 변경되었습니다. 😊", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onError: () => {
      toast.error("이미지 변경에 실패하였습니다. 😰", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  // 그룹 이미지 변경
  const onChangePreview = useCallback(
    (e) => {
      const fileBlob = URL.createObjectURL(e.target.files[0]);
      setPreview(fileBlob);
      editGroupImageFn({
        id: group.groupId,
        body: { image: e.target.files[0] },
      });
    },
    [editGroupImageFn, group]
  );

  // 마운트 되었을 때
  useEffect(() => {
    if (group) {
      setValue("groupName", group.groupName);
      setPreview(group.groupImg);
    }
  }, [group, setValue]);

  // 닉네임 수정 요청 함수
  const onSubmitEditGroupName = useCallback(
    (data) => {
      if (data.groupName?.length < 2)
        return alert("그룹 이름은 2자 이상입니다.");
      editGroupNameFn({
        id: group.groupId,
        body: { groupName: data.groupName },
      });
    },
    [editGroupNameFn, group]
  );

  return (
    <EditModalBg
      onClick={(e) => {
        e.stopPropagation();
        setIsEdit(false);
      }}
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
    >
      <EditModal
        onClick={(e) => e.stopPropagation()}
        variants={ModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", duration: 0.2 }}
      >
        <EditModalHeader>
          <div />
          <h4>그룹 정보 수정</h4>
          <span onClick={() => setIsEdit(false)}>
            <CancelSvg />
          </span>
        </EditModalHeader>

        <ImgContainer>
          {preview ? (
            <img src={preview} alt="" onError={handleImgError} />
          ) : (
            <div />
          )}
          <label>
            <CameraSvg />
            <input type="file" accept="image/*" onChange={onChangePreview} />
          </label>
        </ImgContainer>

        <GroupInfoForm onSubmit={handleSubmit(onSubmitEditGroupName)}>
          <label>그룹 이름</label>
          <div>
            <input
              {...register("groupName", {
                required: "변경할 닉네임을 10자 이내로 입력해주세요.",
              })}
              type="text"
              maxLength="15"
            />
            {watch("groupName") === "" ? (
              <button style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                수정
              </button>
            ) : (
              <button>수정</button>
            )}
          </div>
        </GroupInfoForm>
      </EditModal>
    </EditModalBg>
  );
};

export default GroupEditModal;
const ModalAni = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.4)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};
