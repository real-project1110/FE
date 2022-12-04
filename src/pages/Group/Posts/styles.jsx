import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const NoticeWrap = styled.div`
  ${FlexColumnBox}
  margin: 0 auto auto auto;
  width: 100%;
`;

export const BoardWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  padding: 24px 2%;
  gap: 1rem;
`;
