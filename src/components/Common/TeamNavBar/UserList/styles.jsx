import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../../../shared/Styles/flex";

export const Wrapper = styled.ul`
  ${FlexColumnBox};
  padding: 1rem;
  overflow-y: auto;
`;
export const UserItem = styled.li`
  ${FlexAlignBox};
  margin-bottom: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const UserImg = styled.div`
  margin-right: 0.5rem;
  position: relative;
  img {
    width: 1.3rem;
    height: 1.3rem;
    object-fit: cover;
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 50%;
  }
  div {
    position: absolute;
    right: -0.2rem;
    bottom: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${(props) => props.theme.color.green};
    border: 2px solid white;
    border-radius: 50%;
  }
`;
