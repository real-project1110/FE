import styled from "styled-components";
import { FlexColumnBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const SideContainer = styled.div`
  ${FlexColumnBox};
  position: absolute;
  right: 0;
  width: 25rem;
  height: 100%;
  background-color: white;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;
export const AlertList = styled.ul``;
export const AlertItem = styled.li`
  &:hover {
    background-color: ${(props) => props.theme.color.extraLightGray};
    cursor: pointer;
  }
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;

export const InviteInfo = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.8rem;
    background-color: ${(props) => props.theme.color.extraLightGray};
    border-radius: 8px;
  }
`;

export const InviteDescription = styled.div`
  ${FlexColumnBox};
  padding: 0.1rem 0;
  p {
    width: 17rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    strong {
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
  }
  div > span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
  }
`;

export const InviteBtns = styled.div`
  margin-left: 0.3rem;
  margin-top: 0.1rem;
`;

export const InviteBtn = styled.button`
  padding: 0.3rem;
  &:hover {
    color: ${(props) =>
      props.isTrue ? props.theme.color.green : props.theme.color.red};
  }
`;
