import styled from "styled-components";
import { FlexCenterBox } from "../../../shared/Styles/flex";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.white};
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  padding: 0.5rem 1rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 8px;
    object-fit: cover;
    border-radius: 50%;
  }
  h3 {
    font-weight: 500;
    font-size: 1.1rem;
  }
  div {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
export const ChatList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
  height: 100%;
  //padding: 3rem 0 0.7rem 0;
`;

export const DaySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  margin-top: 3rem;
`;

export const DayHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  //position: sticky;
  top: 14px;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  & button {
    ${FlexCenterBox};
    position: relative;
    top: -15px;
    z-index: 2;
    height: 28px;
    padding: 10px;
    color: ${(props) => props.theme.color.gray};
    font-size: 14px;
    line-height: 27px;
    background: ${(props) => props.theme.boardColor.yellowGray};
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 24px;
    outline: none;
  }
`;
