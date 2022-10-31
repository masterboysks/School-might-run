import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { useEffect } from "react";
import "./datepicker.css";
function ad_bs({ selected, setSelected, label }) {
  const format = localStorage.getItem("hdjkjkfg");
  const handleDate = ({ bsDate }) => {
    setSelected(bsDate);
  };
  if (format === "8cef65fa-4dd7-11ed-bdc3-0242ac120002")
    return (
      <>
        {label && (
          <>
            <label className="my-6  text-sm ">{label}</label>
            <br />
          </>
        )}

        <Calendar
          onChange={handleDate}
          language="en"
          className={`mt-[6px] w-full  rounded focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm `}
        />
      </>
    );
  useEffect(() => {
    setSelected(() => new Date());
  }, []);

  return (
    <>
      {label && (
        <>
          <label className="my-6 text-sm ">{label}</label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm `}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        type="date"
      />
    </>
  );
}

export default ad_bs;
