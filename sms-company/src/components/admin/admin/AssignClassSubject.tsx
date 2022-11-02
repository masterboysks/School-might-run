import React from "react";

export default function AssignClassSubject({
  label,
  name,
  value,
  register,
  className = "",
}) {
  return (
    <>
      {value.length === 0 ? (
        <></>
      ) : (
        <div className="sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3 mt-9 grid grid-cols-1 gap-4">
          <div className="col-span-full pt-5">{label}</div>
          {value.map((curr, i) => (
            <div
              className={`flex items-center h-5 ${className}`}
              key={curr.name + i + label + curr.id}
            >
              <input
                id={curr.name + i + label}
                type="checkbox"
                {...register(name + i)}
                className={`focus:ring-primary-btn text-primary-btn  w-4 h-4 border-primary-btn border rounded `}
              />
              <div className="ml-3 text-sm">
                <label
                  htmlFor={curr.name + i + label}
                  className="font-sm text-primary-grey-600"
                >
                  {curr.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
