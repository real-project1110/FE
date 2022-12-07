import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox } from "../../../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexAlignBox};
  position: relative;
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.layoutColor.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 3rem;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  a:first-child {
    svg {
      width: 90px;
    }
  }
`;

export const RightNav = styled.ul`
  ${FlexAlignBox};
  justify-content: flex-end;
  & > li {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
    border-radius: 50%;
    cursor: pointer;
    ${FlexCenterBox};
    &:nth-child(2) {
      position: relative;
      margin-left: 0.5rem;
      span {
        ${FlexCenterBox};
        position: absolute;
        top: -3px;
        right: -2px;
        width: 20px;
        height: 20px;
        color: white;
        font-size: 0.8rem;
        background-color: ${(props) => props.theme.color.red};
        border-radius: 50%;
      }
    }
    & > img {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: cover;
      background-color: ${(props) => props.theme.color.extraLightGray};
      border-radius: 50%;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }
`;

export const FakeImg = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme.color.extraLightGray};
  border-radius: 50%;
  object-fit: cover;
`;

export const SearchForm = styled.form`
  ${FlexAlignBox};
  position: relative;
  justify-self: center;
  &:focus-within {
    svg {
      color: ${(props) => props.theme.color.black};
    }
  }
  svg {
    position: absolute;
    left: 1rem;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const SearchInput = styled.input`
  width: 30vw;
  max-width: 420px;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #fbfbfa;
  border: none;
  border-radius: 100px;
  &:focus {
    border: 1px solid ${(props) => props.theme.color.gray};
  }
  &::placeholder {
    color: #aaaaaa;
  }
`;
