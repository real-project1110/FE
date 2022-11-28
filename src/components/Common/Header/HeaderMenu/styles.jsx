import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../../../shared/Styles/flex";

export const MenuList = styled.ul`
  ${FlexColumnBox};
  min-width: 200px;
  & > li {
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    strong {
      font-weight: 500;
    }
    &:not(:first-child) {
      &:hover {
        background-color: ${(props) => props.theme.color.extraLightGray};
      }
    }
  }
`;
export const UserInfo = styled.li`
  ${FlexAlignBox};
  width: 100%;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.7rem;
    object-fit: cover;
    border-radius: 8px;
  }
  span {
    width: 100%;
  }
`;
export const FakeImg = styled.div`
  width: 3rem;
  aspect-ratio: 1/1;
  margin-right: 0.7rem;
  background-color: ${(props) => props.theme.color.extraLightGray};
  border-radius: 8px;

  //border-radius: 50%;
`;
