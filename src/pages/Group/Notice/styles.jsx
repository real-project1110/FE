import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const NoticeWrap = styled.div`
  ${FlexColumnBox}
  width: 100%;
  margin: 1% auto auto auto;
  background-color: red;
`;

export const BoardWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(50vw - 160px) calc(50vw - 160px);
`;
