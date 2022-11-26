import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Schedular from "../../../components/Schedular/Schedular";
import Status from "../../../components/Status";
import StatusModal from "../../../components/StatusModal";
import { ColorFormModalAtom } from "../../../shared/Atoms/modalAtoms";
import { Wrapper } from "./styles";

function Schedule() {
  const isColor = useRecoilValue(ColorFormModalAtom);
  const { groupId } = useParams();

  return (
    <Wrapper>
      <Status groupId={groupId} />
      {isColor && <StatusModal groupId={groupId} />}
      <Schedular />
    </Wrapper>
  );
}

export default Schedule;
