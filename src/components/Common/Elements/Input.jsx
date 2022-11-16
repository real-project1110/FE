import React from "react";
import styled from "styled-components";

const Input = ({ type, register, errors = {}, errorName = "" }) => {
  return (
    <>
      <JoinInput aria-invalid={errors[errorName] ? "#FF2D53" : "#35ad70"} {...register} type={type} />
      <p style={{ fontSize: "0.8rem", fontWeight: "400", textAlign: "left", margin: "7px auto", width: "334px", color: "#ff2D53" }}>
        {errors[errorName]?.message}
      </p>
    </>
  );
};

export default Input;

const JoinInput = styled.input`
  width: 334px;
  height: 40px;
  padding-left: 10px;

  border: 2px solid ${(props) => props["aria-invalid"]};
  border-radius: 5px;

  &:focus {
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
  }
`;
