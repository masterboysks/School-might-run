import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';
import {
  DateInput,
  Input,
  InputDisabled,
  InputNumber,
  MultipleSelect,
  Textarea,
  Upload,
} from '../../../../../../components/common/fields';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    control,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm();
  const [date, setDate] = useState('');
  const [arraySendTo, setArraySendTo] = useState([]);
  //   const [eventTitle, setEventTitle] = useState("");
  //   const [eventDescription, setEventDescription] = useState("");
  //   const [startTime, setStartTime] = useState("");
  //   const [endTime, setEndTime] = useState("");
  //   const [sendTo, setSendTo] = useState([arraySendTo[0]]);
  //   const [document, setDocument] = useState("");

  //   const [errorEventTitle, setErrorEventTitle] = useState(false);
  //   const [errorEventDescription, setErrorEventDescription] = useState(false);
  //   const [errorStartTime, setErrorStartTime] = useState(false);
  //   const [errorEndTime, setErrorEndTime] = useState(false);
  //   const [errorSendTo, setErrorSendTo] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (d) => {
    // console.log({ ...d, deadline: d });
    // let temp = false;
    // eventTitle || ((temp = true) && setErrorEventTitle(true));
    // eventDescription || ((temp = true) && setErrorEventDescription(true));
    // startTime || ((temp = true) && setErrorStartTime(true));
    // endTime || ((temp = true) && setErrorEndTime(true));
    // sendTo.length === 0 && (temp = true) && setErrorSendTo(true);
    // temp || navigate("/admin/event-calender");
  };
  return (
    <div className="lg:w-2/3 xl:w-2/4">
      <form className="form-solid w-full my-4 space-y-4 rounded-md">
        <div className="sm:grid-cols-2  grid  gap-4">
          <div className="sm:col-span-2">
            <DateInput
              selected={date}
              setSelected={setDate}
              label="Event title"
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              name="assignment_title"
              register={register}
              placeholder="Dashai assignment"
              errors={errors}
              required={true}
              label="Event title*"
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              name="assignment_description"
              register={register}
              placeholder="Description here"
              label="Event title"
            />
          </div>
          <div>
            <Upload
              label="Reference material"
              register={register}
              name="reference_material"
              watch={watch}
              multiple={true}
              accept="image/*,.pdf"
            />
          </div>
          <div>
            <InputNumber
              name="total_point"
              register={register}
              required={true}
              errors={errors}
              label="Send to*"
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              name="assignment_title"
              register={register}
              placeholder="Dashai assignment"
              errors={errors}
              required={true}
              label="Event title"
            />
          </div>
          <div className="sm:col-span-2">
            <Textarea
              label="Assignment*"
              placeholder="Question here ..."
              name="assignment"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className="">
            <Upload
              label="Assignment "
              register={register}
              name="assignment _upload"
              watch={watch}
              accept="image/*,.pdf"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2   grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:sm:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/event-calender "
                className="secondary_btn"
              >
                Cancel
              </Link>
              <button type="submit" className="primary_btn" disabled={!isValid}>
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
