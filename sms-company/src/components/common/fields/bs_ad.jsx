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
  const { format } = props;
  return (
    <Select
      value={
        format === "bs"
          ? arrayMonths.map((c) => {
              return { id: c.id, name: c.bs };
            })
          : arrayMonths
      }
      {...props}
    ></Select>
  );
};

export const bs_ad_year = (props) => {
  const { format } = props;
  return (
    <InputNumber
      placeholder="2005"
      {...props}
      min={format === "bs" ? 2000 : 1950}
      max={format === "bs" ? 2089 : 2029}
      step="1"
    ></InputNumber>
  );
};
export const bs_ad_day = (props) => {
  return (
    <InputNumber
      placeholder="16"
      {...props}
      min="1"
      max="32"
      step="1"
    ></InputNumber>
  );
};
