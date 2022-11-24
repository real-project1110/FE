import styled, { keyframes } from "styled-components";

export const GroupItem = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const GroupImg = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: #e9e9e9;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
  outline-offset: 2px;
  outline: 3px solid
    ${(props) => (props.isFocus ? props.theme.color.green : "none")};
  &:hover {
    outline: 3px solid
      ${(props) =>
        props.isFocus ? props.theme.color.green : props.theme.color.lightGray};
  }
`;
const GroupNameAni = keyframes`
  0%{
    opacity: 0;
  }
  99%{
    opacity:0;
  }
  100%{
    opacity: 1;
  }
`;
export const GroupName = styled.p`
  padding: 0.5rem;
  position: absolute;
  top: -1.4rem;
  transform: translateX(1.8rem);
  background-color: ${(props) => props.theme.layoutColor.white};
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 5px;
  z-index: 100;
  white-space: nowrap;
  font-size: 0.9rem;
  animation: ${GroupNameAni} 0.2s linear;
`;
