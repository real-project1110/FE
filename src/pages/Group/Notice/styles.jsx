import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const NoticeWrap = styled.div`
  ${FlexColumnBox}
  width: 100%;
`;

export const BoardWrap = styled.div`
  width: calc(100vw - 320px);
  display: grid;
  gap: 3%;
  grid-template-columns: 1fr 1fr;
  padding: 0 3%;
`;
