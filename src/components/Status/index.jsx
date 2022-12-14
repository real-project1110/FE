import React from "react";
import LogoSvg from "../../assets/svg/LogoSvg";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {
  AddStatus,
  CalendarLogo,
  StatusBox,
  StatusColor,
  StatusList,
  StatusName,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQuery } from "react-query";
import { readStatus, removeStatus } from "../../apis/colorApi";
import { useSetRecoilState } from "recoil";
import { ColorFormModalAtom } from "../../recoil/modalAtoms";
import { nowColor } from "../../recoil/ColorAtom";
import { toast } from "react-toastify";

function Status({ groupId }) {
  const setIsColor = useSetRecoilState(ColorFormModalAtom);
  const setColor = useSetRecoilState(nowColor);

  const { data, refetch } = useQuery(
    ["statuses", groupId],
    () => readStatus(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        setColor(data);
      },
      onError: (e) =>
        toast.error("상태 정보를 가져오는데 실패하였습니다.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
    }
  );

  const { mutate: removeMutate } = useMutation(removeStatus, {
    onSuccess: () => refetch(),
  });

  // 컬러 모달 이벤트
  const PostModalOpen = (e) => {
    e.stopPropagation();
    setIsColor(true);
  };

  // 컬러 삭제
  const remove = (id) => {
    const colorData = {
      groupId: groupId,
      colorId: id,
    };
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      removeMutate(colorData);
    } else {
      return;
    }
  };

  return (
    <StatusBox onClick={(e) => e.stopPropagation()}>
      <CalendarLogo>
        <LogoSvg />
      </CalendarLogo>
      <AddStatus onClick={PostModalOpen}>
        <FontAwesomeIcon style={{ scale: "1.5" }} icon={faSquarePlus} />
      </AddStatus>
      {data?.map((state) => (
        <StatusList key={state.colorId}>
          <StatusColor
            value={state.color}
            onClick={() => remove(state.colorId)}
          />
          <StatusName onClick={() => remove(state.colorId)}>
            {state.content}
          </StatusName>
        </StatusList>
      ))}
    </StatusBox>
  );
}

export default Status;
