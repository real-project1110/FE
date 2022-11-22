import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const NoticeWrap = styled.div`
  ${FlexColumnBox}
  margin: 1% auto auto auto;
  padding-left: 3%;
  width: 100%;
`;

export const BoardWrap = styled.div`
  width: calc(100vw - 320px);
  display: grid;
  gap: 3%;
  grid-template-columns: calc(50vw - 160px) calc(50vw - 160px);
`;
