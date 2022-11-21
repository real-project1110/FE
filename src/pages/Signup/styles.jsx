import styled from "styled-components";

export const EmailAuthInput = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 10%;
  text-align: center;
  font-weight: 600;
`;

export const Label = styled.label`
  position: relative;

  button {
    position: absolute;
    right: 3px;
    width: 97px;
    height: 33px;
    margin-top: 3.4px;
    font-weight: 400;
    font-size: 0.85rem;
    font-family: "Pretendard";
    font-style: normal;
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
