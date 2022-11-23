import React from "react";
import { ErrorMessage, JoinInput, Label } from "./styles";

const Input = ({
  register,
  type,
  errors,
  errorName,
  _border,
  label,
  onKeyUp,
}) => {
  return (
    <Label>
      <span>{label}</span>
      <JoinInput
        _border={_border}
        {...register}
        type={type}
        onKeyUp={onKeyUp}
      />
      <ErrorMessage>{errors[errorName]?.message}</ErrorMessage>
    </Label>
  );
};

export default Input;

Input.defaultProps = {
  type: "text",
  errors: {},
  errorName: "",
  _border: "inherit",
  label: "",
  onKeyUp: () => {},
};
