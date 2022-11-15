import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox } from "../../../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexAlignBox};
  position: relative;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.layoutColor.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 3rem;
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 10rem;
  align-items: center;
  width: 100%;
  z-index: 100;
`;

export const RightNav = styled.ul`
  ${FlexAlignBox};
  justify-content: flex-end;
  li {
    ${FlexCenterBox};
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 50%;
    cursor: pointer;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const SearchForm = styled.form`
  ${FlexAlignBox};
  position: relative;
  justify-self: center;

  svg {
    position: absolute;
    left: 1rem;
  }
  input {
    width: 30vw;
    max-width: 420px;
    padding: 1rem 1rem 1rem 3rem;
    background-color: #fbfbfa;
    border: none;
    border-radius: 100px;

    &::placeholder {
      color: #aaaaaa;
    }
  }
`;
