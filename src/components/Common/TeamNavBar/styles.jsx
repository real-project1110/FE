import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.layoutColor.white};
  display: grid;
  grid-template-rows: 6fr 5fr;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const GroupName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 0;
`;

export const GroupNav = styled.ul`
  ${FlexColumnBox};
  padding: 1rem;
  a {
    margin-bottom: 0.5rem;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const GroupNavItem = styled.li`
  ${FlexAlignBox};
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => (props.isFocus ? "#f4f4f4" : "inherit")};
  svg {
    margin-right: 1rem;
  }
  &:hover {
    background-color: #f4f4f4;
  }
`;
