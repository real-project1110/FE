import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Schedular from "../../../components/Schedular/Schedular";
import Status from "../../../components/Status";
import StatusModal from "../../../components/StatusModal";
import { Wrapper } from "./styles";

function Schedule() {
  const [StatusModalOpen, setStatusModalOpen] = useState(false);
  const { groupId } = useParams();
  const onCloseModal = (e) => {
    e.stopPropagation();
    setStatusModalOpen(false);
  };

  return (
    <Wrapper>
      <Status groupId={groupId} openModal={() => setStatusModalOpen(true)} />
      {StatusModalOpen && (
        <StatusModal groupId={groupId} onCloseModal={onCloseModal} />
      )}
      <Schedular />
    </Wrapper>
  );
}

export default Schedule;
