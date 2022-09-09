import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import UploadOutlined from "@mui/icons-material/UploadOutlined";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// checkbox new
export const Checkbox = ({
  label, //array with correct index
  name,
  register,
  id,
  className,
}) => {
  return (
    <div className={`flex items-center h-5 ${className}`}>
      <input
        id={id}
        type="checkbox"
        {...register(name)}
        className={`focus:ring-primary-btn text-primary-btn  w-4 h-4 border-primary-btn border rounded `}
      />
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-sm text-primary-grey-600">
          {label}
        </label>
      </div>
    </div>
  );
};

// Radio bth new
export const Radio = ({
  name,
  errors,
  value,
  register,
  required = false,
  errorText,
}) => {
  return (
    <>
      {value.map((curr) => (
        <label key={curr} htmlFor={curr}>
          <input
            type="radio"
            id={curr}
            {...register(name, { required })}
            value={curr}
          />
          <span className={`mx-2 ${errors && errors[name] && "text-red-600"}`}>
            {curr}
          </span>
        </label>
      ))}
      {errors && errors[name] && (
        <div className=" md:block hidden text-xs font-light text-red-600">
          {errorText || " This is a required field"}
        </div>
      )}
    </>
  );
};

// Input field new

export function Input({
  id,
  name,
  shouldUnregister = false,
  errors,
  errorText,
  register,
  type,
  label,
  required = false,
  placeholder,
  showError = true,
  className,
  step,
  labelClassName,
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}

      <input
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey-600 text-sm ${className}`}
        id={id}
        step={step}
        {...register(name, { required, shouldUnregister })}
        placeholder={placeholder}
        type={type || "text"}
      />
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
// password new
export function Password({
  id,
  name,

  errors,
  errorText,
  register,
  label,
  required = false,
  placeholder,
  showError = true,
  className,
  step,
  labelClassName,
}) {
  const [visiblity, setVisiblity] = useState(false);
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}
      <div className="relative">
        <input
          className={`mt-[6px] w-full p- rounded pr-8  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey-600 text-sm ${className}`}
          id={id}
          step={step}
          {...register(name, { required })}
          placeholder={placeholder}
          type={visiblity ? "text" : "password"}
        />
        <div
          className="right-1 top-4 absolute"
          onClick={() => {
            setVisiblity(!visiblity);
          }}
        >
          {visiblity ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
        </>
      )}
    </>
  );
}
// Input disabled field
export const InputDisabled = ({
  label,

  value = "",
}) => {
  return (
    <>
      <label className="my-6 text-sm">{label}</label>
      <br />
      <input
        className=" mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        disabled
        type="text"
        value={value}
      />
    </>
  );
};
// select disabled
export const SelectDisabled = ({ label, value, className }) => {
  return (
    <>
      <label className={`my-6 text-sm `}>{label}</label>
      <br />
      <select
        className={` mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm ${className}`}
        disabled
        defaultValue={value}
      >
        <option value="">{value}</option>
      </select>
    </>
  );
};
// Select

export function Select({
  id,
  name,

  errors,
  errorText,
  register,
  value: options,
  label,
  required = false,
  selected,
  showError = true,
  className,
  labelClassName,
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && "text-red-600"
            } text-sm ${labelClassName}`}
            htmlFor={id}
          >
            {label}
          </label>
          <br />
        </>
      )}
      <select
        {...register(name, { required })}
        id={id}
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey-600 text-sm ${className}`}
      >
        {selected === "Select" && <option value="">--Select--</option>}
        {options.map((curr) => (
          <option value={curr} key={curr}>
            {curr}
          </option>
        ))}
      </select>
      {showError && errors && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            {errorText || " This is a required field."}
          </span>
          <br />
        </>
      )}
    </>
  );
}
// Multiple select
export function MultipleSelect({
  id,
  name,
  error,
  setError,
  label,
  value: options, //array
  setSelected,
  selected,
}) {
  return (
    <>
      <label
        className={`my-6 text-sm  ${error && " text-red-600"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
        }}
        onClick={() => error && setError(false)}
        multiple
      >
        <div className="relative mt-[6px]">
          <Listbox.Button
            id={id}
            name={name}
            className="  h-[38px]  p- rounded focus:ring-primary-btn focus:ring-2 border px-2   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  "
          >
            <span className="block pr-2 truncate">
              {selected.map((person) => person).join(", ")}
            </span>
            {error && (
              <span className="text-red-600">This field is required</span>
            )}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-blue-400 text-white "
                        : "text-primary-grey-600"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                      {selected ? (
                        <span className=" absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
export function SearchBar({ id, value, setValue }) {
  return (
    <div className=" relative w-full">
      <div className="top-1 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="text-primary-grey-600 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id={id}
        className="bg-gray-50 mt-[6px] border border-primary-grey-400 text-primary-grey-600 text-sm rounded focus:ring-primary-btn block w-full pl-10 p-2 "
        placeholder="Search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
export const Upload = ({
  label,
  name,
  error,
  setError,
  value,
  setValue,
  dataTitle,
  dataValue,
  uploadText,
  id,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  return (
    <>
      <label
        htmlFor={id}
        className={` ${error && " text-red-600 "} block text-sm`}
      >
        {label}
      </label>
      <div className=" mt-[6px] sm:col-span-2 ">
        <div className=" flex w-full px-3 py-1.5 border-2 border-gray-300 border-dashed rounded-md">
          <div className=" w-full space-y-1">
            <label
              htmlFor={id}
              className="text-primary-grey-700 -indigo-600 hover:text-focus-within:outline-none focus-within:ring- focus-within:ring-offset-0 flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
            >
              <div>{uploadText || "Upload here"}</div>
              <div className="text-primary-btn">
                <UploadOutlined />
              </div>
              <input
                id={id}
                name={name}
                type="photo"
                className="sr-only"
                {...optional}
                value={value}
                onChange={(e) => {
                  error && setError(false);
                  setValue(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
      </div>
      {error && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            This is a required field
          </span>
        </>
      )}
    </>
  );
};

export const UploadPhoto = ({
  label,
  name,
  errors,
  register,
  required = false,
  showError = true,
  uploadText,
  errorText,
  id,
}) => {
  return (
    <>
      <div className="">
        <label
          htmlFor={id}
          className={`${errors[name] && "text-red-600 "} block text-sm`}
        >
          {label}
        </label>
        <div className="mt-[6px] sm:mt-0 sm:col-span-2">
          <div className="text-primary-gray-700 flex items-center">
            <span className=" w-12 h-12 overflow-hidden rounded-full">
              <svg
                className="w-full h-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <input
              type="file"
              name={name}
              id={id}
              className="sr-only"
              {...register(name, { required })}
              accept="image/*"
            />
            {/* className="text-primary-gray- hover:bg-gray-50 focus:outline-none focus:ring- focus:ring-offset-2 hidden px-3 py-2 ml-5 text-sm font-medium leading-4 bg-white rounded-md" */}
            <label
              htmlFor={id}
              className="bg-primary-grey-200 cursor-pointer border-primary-field border-[1px] rounded ml-2 p-1 text-primary-grey-700"
            >
              {uploadText || "Choose a file to upload"}
            </label>
          </div>
        </div>
        {showError && errors[name] && (
          <>
            <span className="text-xs font-light text-red-600">
              {errorText || " This is a required field."}
            </span>
            <br />
          </>
        )}
      </div>
    </>
  );
};
export const Textarea = ({
  id,
  name,
  error,
  setError,
  row,
  label,
  value,
  setValue,
  placeholder,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <>
      <label
        className={`my-6 text-sm ${error && " text-red-600"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <br />
      <textarea
        {...optional}
        name={name}
        id={id}
        row={row || 20}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClick={() => {
          error && setError(false);
        }}
        className="resize-none  mt-[6px] w-full p- rounded  focus:ring-primary-btn  h-52  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
      />
      {error && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            This is a required field.
          </span>
          <br />
        </>
      )}
    </>
  );
};
