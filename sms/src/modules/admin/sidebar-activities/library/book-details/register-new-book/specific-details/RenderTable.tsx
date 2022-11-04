import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "../../../../../../../components/common/fields";
export default function RenderTable({
  register,
  errors,
  setStation,
  station,
  index,
  current,
}) {
  const [accessionNumberGenerate, setAccessionNumberGenerate] = useState("");
  useEffect(() => {
    async () => {
      const temp = await localStorage.getElementById("jhsgbbvppi");
      const temp1 = JSON.parse(temp);
      setAccessionNumberGenerate(temp);
    };
  }, []);

  const accessionGenerator = (id, values) => {
    const temp = values?.isbn.split(/[-,.\s]/);
    return `${temp[3]}-${id}-${temp[4]}-${values?.year}`;
    // Registration no from insb -- index number or unit no --publication no-- published date last threee digit
  };

  return (
    <tr>
      <td className="p-2 px-4">{index + 1}</td>
      <td className="p-2"></td>
      <td className="p-2"></td>
      <td className="p-2">
        {accessionGenerator(index, accessionNumberGenerate)}
      </td>
      <td className="p-2">
        <Input
          placeholder="10:00 AM"
          name={`${current}[pickup_time]`}
          label={undefined}
          register={register}
        />
      </td>

      <td>
        {station.length === 1 || (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              setStation((curr) => {
                let temp = [...curr];

                temp.splice(temp.indexOf(current), 1);
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
