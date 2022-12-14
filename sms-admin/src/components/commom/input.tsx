import React, { Fragment, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import UploadOutlined from "@mui/icons-material/UploadOutlined";
import { Listbox, Transition } from "@headlessui/react";
import { useController } from "react-hook-form";
export default function Input({
  id,
  name,
  shouldUnregister = false,
  defaultValue,
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
}: {
  id?: string | undefined;
  name: string;
  shouldUnregister?: boolean | undefined;
  defaultValue?: string;
  errors?: {} | undefined;
  errorText?: string | undefined;
  register: any;
  type?: string | undefined;
  label: string | undefined;
  required?: boolean;
  step?: number;
  placeholder?: string;
  showError?: boolean;
  className?: string;
  labelClassName?: string | undefined;
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
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
        id={id}
        step={step}
        {...register(name, { required, shouldUnregister })}
        placeholder={placeholder}
        type={type || "text"}
        defaultValue={defaultValue}
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

export function Select({
  name,
  id = "form_" + name,

  errors = {},
  errorText = "",
  register,
  value: options,
  label,
  required = false,
  showError = true,
  className = "",
  labelClassName = "",
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
        className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
      >
        <option value="">--Select--</option>
        {options.map((curr) => (
          <option value={curr.id} key={curr.id} className="">
            {curr.name}
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
export const Upload = ({
  label,
  name,
  id = "form_" + name,
  errors = {},
  register,
  required = false,
  showError = true,
  watch,
  uploadText = "",
  errorText = "",
}) => {
  let logo;
  watch && (logo = watch(name));
  return (
    <>
      <label
        htmlFor={id}
        className={` ${
          errors && errors[name] && " text-red-600 "
        } block text-sm`}
      >
        {label}
      </label>
      <div className=" mt-[6px] sm:col-span-2 ">
        <div className=" flex w-full px-3 text-primary-grey py-1.5 border border-primary-base border-dashed rounded-md focus-within:border-solid focus-within:ring ring-primary-base focus-within:text-primary-base">
          <div className=" w-full space-y-1">
            <label
              htmlFor={id}
              className="  within:outline-none   flex items-center justify-between w-full text-sm bg-white rounded-md cursor-pointer"
            >
              <div>
                {logo && logo.length === 1
                  ? logo[0].name
                  : uploadText || "Choose a file to upload"}
              </div>
              <div className="text-primary-base">
                <UploadOutlined />
              </div>
              <input
                name={name}
                id={id}
                type="file"
                className="sr-only"
                {...register(name, { required })}
                accept="image/*"
              />
            </label>
          </div>
        </div>
      </div>
      {showError && errors[name] && (
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
};
export function Password({
  name,
  id = "form_" + name,

  errors,
  errorText = "",
  register,
  label,
  required = false,
  placeholder = "",
  showError = true,
  className = "",

  labelClassName = "",
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
          className={`mt-[6px] w-full p- rounded pr-8  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize text-primary-grey text-sm ${className}`}
          id={id}
          {...register(name, { required })}
          placeholder={placeholder}
          type={visiblity ? "text" : "password"}
        />
        <div
          className="absolute right-1 top-4 "
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
export function MultipleSelect({
  name,
  id = "form_" + name,
  label,
  value: options,
  control,
  errors = {},
  required = false,
}) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    rules: { required: required },
  });
  return (
    <div className="w-full">
      <label
        className={`my-6 text-sm  ${errors && errors[name] && " text-red-600"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <Listbox value={value || []} onChange={onChange} multiple>
        <div className="relative mt-[6px]">
          <Listbox.Button
            id={id}
            name={name}
            className="  h-[38px]  p- rounded focus:ring-primary-base focus:ring-2 border px-2   border-primary-base shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full min-w-full max-w-full text-left  "
          >
            <span className=" truncate  block  sm:w-full w-40 sm:max-w-sm md:max-w-md ">
              {options
                ?.filter((c) => value?.includes(c.id))
                ?.map((person) => person.name)
                .join(", ")}
            </span>
            {errors && errors[name] && (
              <span className="text-red-600 break-all">
                {errors[name]?.message || "This field is required"}
              </span>
            )}
            <span className="absolute inset-y-0 right-0 flex items-center py-2 pointer-events-none">
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
                    `relative cursor-default select-none pl-10 pr-4 ${
                      active
                        ? "bg-blue-400 text-white "
                        : "text-primary-grey-600"
                    }`
                  }
                  value={person.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
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
    </div>
  );
}
export function InputWithSuffix({
  name,
  id = "form_" + name,

  errors = {},
  register,
  type = "text",
  label,
  required = false,
  placeholder = "",
  showError = true,
  className = "",

  labelClassName = "",
  suffix,
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
            <span className="sm:hidden pl-2"> ({suffix})</span>
          </label>
          <br />
        </>
      )}
      <div className="relative">
        <input
          className={`mt-[6px] w-full p- rounded  focus:ring-primary-base focus:border-primary-base  py-3 border-primary-base shadow-md placeholder:text-primary-grey-400   placeholder:capitalize pr-44 text-primary-grey text-sm ${className}`}
          id={id}
          {...register(name, { required })}
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute inset-y-0 pt-2 hidden right-0 pr-3 sm:flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            {suffix}
          </span>
        </div>
      </div>
      {showError && errors && errors[name] && (
        <>
          <span className="text-xs font-light text-red-600">
            This is a required field.
          </span>
          <br />
        </>
      )}
    </>
  );
}
