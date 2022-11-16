import styled from "styled-components";

export const JoinInput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;
