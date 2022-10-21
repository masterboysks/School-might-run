import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Select,
  UploadPhoto,
} from "../../../../../../../components/common/fields";
import StaffFormPersonalDetailsPicture from "../../../../../../../contex/admin/staff/StaffFormPersonalDetailsPicture";
const arrayBloodGroup = [
  {
    name: "A+",
    id: 1,
  },
  {
    name: "A-",
    id: 2,
  },
  {
    name: "B+",
    id: 3,
  },
  {
    name: "B-",
    id: 4,
  },
  {
    name: "O+",
    id: 5,
  },
  {
    name: "O-",
    id: 6,
  },
  {
    name: "AB+",
    id: 7,
  },
  {
    name: "Ab-",
    id: 8,
  },
];
const arrayGender = [
  {
    name: "Male",
    id: 1,
  },
  {
    name: "Female",
    id: 2,
  },
];
const arrayMaritialSatus = [
  {
    name: "Married",
    id: 1,
  },
  {
    name: "Single",
    id: 2,
  },
];
const DetailsForm = () => {
  const photo = useContext(StaffFormPersonalDetailsPicture);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    (async () => {
      const temp = await JSON.parse(localStorage.getItem("pdgdsas"));
      console.log({ ...temp, photo: photo?.photo });
      reset({ ...temp, photo: photo?.photo });
    })();
  }, []);
  const onSubmit = async (data) => {
    console.log(data);
    photo?.setPhoto(data.photo);
    delete data.photo;
    localStorage.setItem("pdgdsas", JSON.stringify(data));
    navigate(
      "/admin/dashboard/staff/staff-information/add-staff/general/address-details"
    );
  };

  return (
    <form
      className="form-solid my-6 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Input
            label="First Name*"
            required={true}
            name="first_name"
            errors={errors}
            register={register}
            placeholder="Ranjit"
          />
        </div>
        <div className="">
          <Input
            label="Middle Name"
            name="middle_name"
            register={register}
            placeholder="Bahadur"
          />
        </div>
        <div className="">
          <Input
            label="Last Name*"
            required={true}
            name="last_name"
            errors={errors}
            register={register}
            placeholder="Pokherel"
          />
        </div>
        <div className="">
          <Input
            label="Mobile Number*"
            type="number"
            required={true}
            name="mobile_number"
            errors={errors}
            register={register}
            placeholder="9818756958"
          />
        </div>
        <div className="">
          <Input
            label="Email*"
            required={true}
            name="email"
            type="email"
            errors={errors}
            register={register}
            placeholder="ranjitpokherel@hotmail.com"
          />
        </div>
        <div className="">
          <Select
            value={arrayGender}
            label="Gender*"
            required={true}
            errors={errors}
            name="gender"
            register={register}
          />
        </div>
        <div className="">
          <Select
            value={arrayBloodGroup}
            label="Blood Group"
            name="blood_group"
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Date Of Birth*"
            required={true}
            name="dob"
            type="date"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Citizenship number*"
            required={true}
            name="citizenship_no"
            errors={errors}
            register={register}
            placeholder="15842-078-5-02-d"
          />
        </div>
        <div className="">
          <Input
            label="Pan number*"
            required={true}
            name="pan_no"
            errors={errors}
            register={register}
            placeholder="55410-a85-pp99-02"
          />
        </div>
        <div className="">
          <Select
            label="Maritial status*"
            required={true}
            value={arrayMaritialSatus}
            name="maritial_status"
            errors={errors}
            register={register}
          />
        </div>
        <div className="">
          <Input
            label="Emergency contact*"
            required={true}
            name="emergency_contact"
            errors={errors}
            register={register}
            placeholder="9841355398"
          />
        </div>
        <div className="sm:col-span-2">
          <UploadPhoto
            label="Photo*"
            required={true}
            errors={errors}
            uploadText="Picture of person"
            watch={watch}
            register={register}
            name="photo"
            id="photo_form_9988"
          />
        </div>
      </div>

      <div className="w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/admin/dashboard/staff/staff-information/"
            className="secondary_btn"
          >
            Cancel
          </Link>
          <button type="submit" className="primary_btn">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default DetailsForm;
