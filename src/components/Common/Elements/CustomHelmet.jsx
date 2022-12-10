import React from "react";
import { Helmet } from "react-helmet-async";

const CustomHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Status` : "Status"} </title>
    </Helmet>
  );
};

export default CustomHelmet;
