import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import organizationSetupApi from "../../../../../api/admin/dashboard/admin/organizationSetupApi";
import {
  Input,
  Select,
  UploadPhoto,
} from "../../../../../components/common/fields";
import LocationForm from "../../../../../components/common/LocationForm";

const arrayDateFormat = ["AD", "BS"];
const Form = (props) => {
  const [defaultValues, setdefaultValues] = useState(second);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const [locationWithIds, setLocationWithIds] = useState({});
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    (async () => {
      const data = await organizationSetupApi.get();
      console.log(data.data.data);
      reset();
    })();
  }, []);

  return (
    <form
      className="form-solid w-full my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="School/College Name*"
            register={register}
            placeholder="XYZ school"
            errors={errors}
            required={true}
            name="company_name"
          />
        </div>
        <div className="">
          <Input
            label="Registration no.*"
            register={register}
            placeholder="468456464584464"
            errors={errors}
            required={true}
            name="registration_no"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Pan no.*"
            register={register}
            errors={errors}
            required={true}
            name="pan_no"
            placeholder="21445165412154"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Postal code"
            placeholder="33650"
            register={register}
            name="postal_code"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Mobile Number*"
            placeholder="214451654"
            name="mobile_no"
            errors={errors}
            required={true}
            register={register}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Telephone Number*"
            placeholder="01-5521332"
            register={register}
            errors={errors}
            required={true}
            name="tel_no"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Alternative Number"
            placeholder="01-5521335"
            name="alt_tel_no"
            register={register}
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Website"
            placeholder="https://www.xyz.com"
            register={register}
            type="url"
            name="website"
          />
        </div>
        <div className="">
          <Input
            label="Email"
            name="company_email"
            type="email"
            placeholder="mail@xyz.com.edu"
            register={register}
          />
        </div>

        <LocationForm
          watch={watch}
          register={register}
          errors={errors}
          location={locationWithIds}
          setLocation={setLocationWithIds}
        />
        <div className="">
          <Input
            label="Ward no.*"
            name="ward_no"
            register={register}
            errors={errors}
            required={true}
            placeholder="11"
            type="number"
          />
        </div>
        <div className="">
          <Input
            label="Tole.*"
            required={true}
            errors={errors}
            register={register}
            name="tole"
            placeholder="XYZ"
          />
        </div>
        <div className="">
          <Input
            label="Google map link"
            name="google_map_link"
            type="url"
            register={register}
            placeholder="Link here"
          />
        </div>
        <div className="">
          <Select
            label="AD/BS*"
            value={arrayDateFormat}
            register={register}
            errors={errors}
            required={true}
            name="date_format"
          />

          <span className="text-sm">
            Note:Selected date format will be used in whole system.
          </span>
        </div>
        <div className="">
          <Input
            label="Established date*"
            register={register}
            name="established_date"
            errors={errors}
            required={true}
            type="date"
          />
        </div>
        <div className="">
          <UploadPhoto
            label="School logo*"
            name="school_logo"
            register={register}
            errors={errors}
            required={true}
            id="school_logo"
          />
        </div>
        {/* <div className="">
          <UploadPhoto
            label="School Stamp*"
            error={errorSchoolStamp}
            setError={setErrorSchoolStamp}
            value={schoolStamp}
            setValue={setSchoolStamp}
            id="school_stamp"
          />
        </div> */}
      </div>

      <div className="md:flex-row flex flex-col justify-between w-full my-6">
        <div className="w-44">
          *Note:Please upload logo of school as below
          <img src="/logoHeader.png" alt="" className="my-3" />
        </div>
        <div className=" w-fit my-auto">
          <Link
            to="#"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
