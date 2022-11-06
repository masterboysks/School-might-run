import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { InputNumber } from "../../../../../../../components/common/fields";
export default function RenderTable({
  errors,
  register,
  selectBook,
  setSelectBook,
  current,
  watch,
  index,
}) {
  //   const [accessionNumberGenerate, setAccessionNumberGenerate] = useState("");
  //   useEffect(() => {
  //     (async () => {
  //       const temp = localStorage.getItem("jhsgbbvppi") || "";
  //       // console.log(temp, "temp");
  //       const temp1 = await JSON.parse(temp);
  //       setAccessionNumberGenerate(temp1);
  //     })();
  //   }, []);

  //   const accessionGenerator = (id, values) => {
  //     console.log(values);
  //     if (values.isbn) {
  //       const temp = values?.isbn.split(/[-,.\s]/);
  //       return `${temp[2]}-${id + 1}-${temp[3]}-${values?.year}`;
  //       // Registration no from insb -- index number or unit no --publication no-- published date last threee digit
  //     }
  //   };
  const daysInputed = watch(`${current}[submission_after]`);
  function addDays(days) {
    let result;
    result = new Date();
    result.setDate(result.getDate() + days || 0);
    console.log(result);

    return result.toDateString();
  }
  return (
    <tr>
      <td className="p-2 px-4">{index + 1}</td>
      <td className="p-2">
        <InputNumber
          placeholder="10:00 AM"
          name={`${current}[submission_after]`}
          label={undefined}
          register={register}
          required={true}
          max={100}
          errors={errors}
        />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {addDays(daysInputed)}
      </td>

      <td className="">
        {selectBook.length === 1 || (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              setSelectBook((curr) => {
                const temp = [...curr];
                temp.splice(index, 1);
                return temp;
              });
            }}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </div>
        )}
      </td>
    </tr>
  );
}
