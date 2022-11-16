import React from "react";
import { JoinInput } from "./styles";

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
