import styled from "styled-components";

export const EmailAuthInput = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
  font-weight: 600;
`;

export const Label = styled.label`
  position: relative;

  button {
    position: absolute;
    top: -5px;
    right: 5px;
    width: 97px;
    height: 33px;

    font-size: 0.8rem;
    border: 2px solid ${(props) => props.theme.color.gray};

    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Emailinput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;

export const Title = styled.div`
  margin: auto;
`;

export const JoinForm = styled.form`
  margin-top: 30px;
`;

export const StTitle = styled.div`
  text-align: left;
  margin-left: 82px;
  margin-top: 10px;
  padding-bottom: 3px;
  font-size: 0.8rem;
`;
