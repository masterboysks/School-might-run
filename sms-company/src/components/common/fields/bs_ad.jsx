import React from "react";
import { InputNumber, Select } from ".";

export const bs_ad_year = (props) => {
  const format = localStorage.getItem("hdjkjkfg");
  return (
    <InputNumber
      placeholder="2005"
      {...props}
      name={`${props.name}[year]`}
      min={format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? 2000 : 1950}
      max={format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? 2089 : 2029}
      step="1"
      label={`${props.label}(${
        format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002" ? "BS" : "AD"
      })`}
    ></InputNumber>
  );
};
