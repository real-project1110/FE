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
import { editStatus, readStatus, removeStatus } from "../../apis/colorApi";

function Status({ openModal, groupId }) {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["statuses", groupId],
    () => readStatus(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    }
  );

  const { mutate: editMutate } = useMutation(editStatus, {
    onSuccess: () => refetch(),
  });

  const { mutate: removeMutate } = useMutation(removeStatus, {
    onSuccess: () => refetch(),
  });

  return (
    <StatusBox>
      <CalendarLogo>
        <LogoSvg />
      </CalendarLogo>
      <AddStatus onClick={openModal}>
        <FontAwesomeIcon style={{ scale: "1.5" }} icon={faSquarePlus} />
      </AddStatus>
      {data?.map((state) => (
        <StatusList>
          <StatusColor value={state.color} />
          <StatusName>{state.content}</StatusName>
        </StatusList>
      ))}
    </StatusBox>
  );
}

export default Status;
