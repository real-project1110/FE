import styled from "styled-components";
import { FlexCenterBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.layoutColor.white};
  padding: 1rem 0;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const GroupList = styled.div`
  ${FlexColumnBox};
  align-items: center;
`;

export const PlusBtn = styled.button`
  ${FlexCenterBox};
  width: 100%;
  border-radius: 50%;

  svg {
    &:hover {
      path {
        fill: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;
