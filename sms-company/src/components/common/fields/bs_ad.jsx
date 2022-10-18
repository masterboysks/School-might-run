import React from "react";
import { InputNumber, Select } from ".";
const arrayMonths = [
  {
    bs: "Baishakh",
    name: "January",
    id: 1,
  },
  {
    bs: "Jestha",
    name: "February",
    id: 2,
  },
  {
    bs: "Aashadha",
    name: "March",
    id: 3,
  },
  { bs: "Shrawan", name: "April", id: 4 },
  {
    bs: "Bhadra",
    name: "May",
    id: 5,
  },
  {
    bs: "Ashwin ",
    name: "June",
    id: 6,
  },
  {
    bs: "Kartik ",
    name: "July",
    id: 7,
  },
  {
    bs: "Mangsir ",
    name: "August",
    id: 8,
  },
  {
    bs: "Paush ",
    name: "September",
    id: 9,
  },
  {
    bs: "Magh ",
    name: "October",
    id: 10,
  },
  {
    bs: "Falgun ",
    name: "November",
    id: 11,
  },
  {
    bs: "Chaitra ",
    name: "December",
    id: 12,
  },
];

export const bs_ad_month = (props) => {
  const format = localStorage.getItem("hdjkjkfg");
  return (
    <Select
      value={
        format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002"
          ? arrayMonths.map((c) => {
              return { id: c.id, name: c.bs };
            })
          : arrayMonths
      }
      {...props}
      name={`${props.name}[month]`}
    ></Select>
  );
};

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
export const bs_ad_day = (props) => {
  return (
    <InputNumber
      placeholder="16"
      {...props}
      name={`${props.name}[day]`}
      min="1"
      max="32"
      step="1"
    ></InputNumber>
  );
};
