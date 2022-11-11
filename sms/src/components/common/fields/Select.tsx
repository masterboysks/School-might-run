import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { MultipleSelect, Select } from '.';
const arrayMonths = [
  {
    name: 'Baishakh',

    id: 1,
  },
  {
    name: 'Jestha',

    id: 2,
  },
  {
    name: 'Aashadha',

    id: 3,
  },
  { name: 'Shrawan', id: 4 },
  {
    name: 'Bhadra',

    id: 5,
  },
  {
    name: 'Ashwin ',

    id: 6,
  },
  {
    name: 'Kartik ',

    id: 7,
  },
  {
    name: 'Mangsir ',

    id: 8,
  },
  {
    name: 'Paush ',

    id: 9,
  },
  {
    name: 'Magh ',

    id: 10,
  },
  {
    name: 'Falgun ',

    id: 11,
  },
  {
    name: 'Chaitra ',

    id: 12,
  },
];
export function select({
  name,

  errors = {},
  register,
  value: options,
  label,
  disabled = false,
  id = 'form_' + name,
  required = false,
  showError = true,
  className = '',
  labelClassName = '',
}) {
  return (
    <>
      {label && (
        <>
          <label
            className={`my-6 ${
              errors && errors[name] && 'text-red-600'
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
        disabled={disabled}
        className={`mt-[6px] w-full p- rounded disabled:bg-primary-grey-100 disabled:text-primary-grey-700  focus:ring-primary-btn focus:border-primary-btn  py-3 border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-600 text-sm ${className}`}
      >
        <option value="">--Select--</option>
        {options?.map((curr) => (
          <option value={curr.id} key={curr.name + name + curr.id}>
            {curr?.name}
          </option>
        ))}
      </select>
      {showError && errors && errors[name] && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            {errors[name]?.message || ' This is a required field.'}
          </span>
          <br />
        </>
      )}
    </>
  );
}
export function multipleSelect({
  name,
  label,
  value: options,
  control,
  disabled = false,
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
  // console.log(value, onChange);
  return (
    <>
      <Listbox
        value={value || []}
        onChange={onChange}
        multiple
        disabled={disabled}
      >
        <Listbox.Label>
          <label
            className={`my-6 text-sm  ${
              errors && errors[name] && ' text-red-600'
            }`}
          >
            {label}
          </label>
        </Listbox.Label>
        <div className="relative mt-[6px]">
          <Listbox.Button className="  h-[46px]  p- rounded focus:ring-primary-btn focus:ring-1 ring-inset border px-2   border-primary-btn shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  ">
            <span className="block pr-2 truncate">
              {options
                ?.filter((c) => value?.includes(c.id))
                ?.map((person) => person.name)
                .join(', ')}
            </span>
            {errors && errors[name] && (
              <span className="text-red-600">
                {errors[name]?.message || 'This field is required'}
              </span>
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
              {options?.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-blue-400 text-white '
                        : 'text-primary-grey-600'
                    }`
                  }
                  value={person.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person?.name}
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

export const monthSelect = (props: {
  name: any;
  errors?: {} | undefined;
  register: any;
  label: any;
  disabled?: boolean | undefined;
  id?: string | undefined;
  required?: boolean | undefined;
  showError?: boolean | undefined;
  className?: string | undefined;
  labelClassName?: string | undefined;
}) => <Select {...props} value={arrayMonths} />;

export const selectDisabled = ({ label, value = 'Select', className = '' }) => {
  return (
    <>
      <label className={`my-6 text-sm `}>{label}</label>
      <br />
      <select
        className={` mt-[6px] w-full p- rounded   focus:ring-primary-btn py-3    bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm ${className}`}
        disabled
        defaultValue={value}
      >
        <option value="">{value}</option>
      </select>
    </>
  );
};

export function multiplemonthSelect(props: {
  name: any;
  label: any;

  control: any;
  disabled?: boolean | undefined;
  errors?: {} | undefined;
  required?: boolean | undefined;
}) {
  // console.log(value, onChange);
  return <MultipleSelect value={arrayMonths} {...props} />;
}
