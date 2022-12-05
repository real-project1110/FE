import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
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
    },
  });
  const { mutate: editGroupImageFn } = useMutation(editGroupImage, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupList"]);
      queryClient.invalidateQueries(["group", group?.groupId + ""]);
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
    >
      <EditModal onClick={(e) => e.stopPropagation()}>
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
