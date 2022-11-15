import styled from "styled-components";

export const GroupItem = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
  background-color: #e9e9e9;
  border: 3px solid
    ${(props) => (props.isFocus ? props.theme.color.green : "none")};
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
`;
