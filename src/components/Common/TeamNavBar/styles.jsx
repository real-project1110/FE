import styled from "styled-components";
import {
  FlexAlignBox,
  FlexBetweenBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  max-height: ${(props) => props.theme.bodyHeight.normal};
  background-color: ${(props) => props.theme.layoutColor.white};
  box-sizing: border-box;
  padding: 1rem 0;
  display: grid;
    grid-template-rows: 240px 1fr;
    width: 100%;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  // scrollBar div
 
    
  
`;

export const GroupInfo = styled.div`
  ${FlexBetweenBox};
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const GroupConfig = styled.div`
  margin-right: 0.2rem;
  cursor: pointer;
  &:hover {
    svg {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const GroupNav = styled.ul`
  ${FlexColumnBox};
  height: 240px;
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
