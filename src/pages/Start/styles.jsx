import styled from "styled-components";
import {
  FlexBetweenBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexColumnBox};
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  color: #37352f;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 10vw;
  position: fixed;
  ${FlexBetweenBox};
  align-items: center;
  transition: all 0.15s linear;
  background-color: ${(props) => (props.isTop ? "#fafafa" : "white")};

  box-shadow: ${(props) =>
    props.isTop ? "none" : "0px 1px 5px rgba(0, 0, 0, 0.1)"};
`;

export const Logo = styled.div`
  svg {
    width: 93px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;
  span {
    padding: 0 2.5rem;
    &:first-child {
      border-right: 1px solid ${(props) => props.theme.color.lightGray};
    }
    &:hover {
      color: ${(props) => props.theme.color.gray};
    }
  }
  button {
    padding: 0.5rem 1.3rem;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    background-color: ${(props) => props.theme.color.green};
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  ${FlexColumnBox};
  margin-top: 70px;
`;
export const Section1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 524px;
  background-color: #fafafa;
  padding: 0 10vw;
`;

export const Section1Text = styled.div`
  width: 100%;
  ${FlexColumnBox};
  justify-content: center;
  min-width: 460px;
  h2 {
    margin-bottom: 11px;
    font-weight: 700;
    font-size: 3rem;
  }
  p {
    margin-top: 10px;
    font-size: 1.2rem;
  }
  strong {
    margin-top: 11px;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const Section1Btns = styled.div`
  display: flex;
  margin-top: 26px;
  button {
    ${FlexCenterBox};
    width: 10rem;
    height: 35px;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    &:first-child {
      margin-right: 10px;
      background-color: #78d28b;
      &:hover {
        background-color: ${(props) => props.theme.color.hoverGreen};
      }
    }
    &:last-child {
      background-color: #5383ec;
      &:hover {
        background-color: #366bdc;
      }
    }
    span {
      ${FlexCenterBox};
      width: 20px;
      height: 20px;
      margin-right: 5px;
      background-color: white;
      border-radius: 50%;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const Section1Img = styled.div`
  text-align: end;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-width: 600px;
    max-width: 750px;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const Section2 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 90px;
  width: 100%;
  background-color: #fcfaf6;
  padding: 1rem 10vw;
`;

export const Section2Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const Section2Img = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-width: 600px;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const Section2Text = styled.div`
  ${FlexColumnBox};
  justify-content: center;
  margin-left: 42px;
  min-width: 500px;
  h3 {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 2rem;
  }
  p {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 150%;
  }
`;

export const Section3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 437px 314px;
  padding: 0 10vw;
`;

export const Section3First = styled.div`
  ${FlexCenterBox};
  flex-direction: column;
  svg {
    width: 140px;
    margin-bottom: 33px;
  }
  h2 {
    margin-bottom: 11px;
    font-weight: 700;
    font-size: 40px;
  }
  p {
    margin-bottom: 33px;
    font-size: 1.2rem;
  }
  button {
    ${FlexCenterBox};
    width: 240px;
    height: 40px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    background: #78d28b;
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverGreen};
    }
  }
`;
export const Section3Second = styled.div`
  display: flex;
  padding-top: 54px;
  border-top: 1px solid #d9d9d9;
  svg {
    width: 93px;
    margin-top: -10px;
    margin-right: 141px;
  }
  ul {
    ${FlexColumnBox};
    strong {
      margin-bottom: 15px;
      font-weight: 700;
      font-size: 16px;
    }
    li {
      margin-bottom: 15px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.color.gray};
      }
    }
  }
`;
