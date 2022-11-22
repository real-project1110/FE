import styled from "styled-components";
import {
  FlexAlignBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

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
  background-color: ${(props) => props.theme.boardColor.lightGray};
`;

export const TitleBox = styled.div`
  ${FlexAlignBox};
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.white};
  span {
    ${FlexCenterBox};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 1.5rem;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
    }
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;
export const AlertList = styled.ul``;
export const AlertItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.white};
  margin-bottom: 0.8rem;
`;

export const InviteInfo = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.8rem;
    background-color: ${(props) => props.theme.color.extraLightGray};
    border-radius: 8px;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.extraLightGray};
    cursor: pointer;
  }
`;

export const InviteDescription = styled.div`
  ${FlexColumnBox};
  padding: 0.1rem 0;
  justify-content: space-between;
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
  span {
    margin-bottom: 0.4rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
  }
`;

export const InviteBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InviteBtn = styled.button`
  background-color: ${(props) =>
    props.isTrue ? props.theme.color.green : "inherit"};
  padding: 0.7rem;

  color: ${(props) =>
    props.isTrue ? props.theme.color.white : props.theme.color.black};

  &:hover {
    background-color: ${(props) =>
      props.isTrue
        ? props.theme.color.hoverGreen
        : props.theme.color.lightGray};
  }
`;
