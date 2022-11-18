import styled from "styled-components";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexColumnBox};
  padding: 1rem;
  height: ${(props) => props.theme.bodyHeight.halfNormal};
`;

export const ToggleUsers = styled.div`
  ${FlexAlignBox};
  span {
    ${FlexCenterBox};
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.2rem;
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }

  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const UserItems = styled.ul`
  ${FlexColumnBox};
  padding: 0 0.3rem;
`;
