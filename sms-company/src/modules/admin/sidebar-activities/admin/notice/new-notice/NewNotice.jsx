import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Input,
  MultipleSelect,
  Textarea,
  UploadPhoto,
} from "../../../../../../components/common/fields";
import Breadnav from "../../../../../../components/common/Breadnav";
import Break from "../../../../../../components/common/Break";
import { useForm } from "react-hook-form";
import noticeApi from "../../../../../../api/admin/dashboard/admin/noticeApi";
import { useEffect } from "react";

const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Push notification",
    href: "/admin/dashboard/admin/notice",
    current: false,
  },
  {
    name: "New notice",
    href: "/admin/dashboard/admin/notice/new",
    current: true,
  },
];

// const arraySendTo = [
//   { name: "All", id: 1 },
//   { name: "Student", id: 2 },
//   { name: "Teachers", id: 3 },
// ];
function NewNotice() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [arraySendTo, setArraySendTo] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const d = {
      ...data,
      send_to: JSON.stringify(sendTo),
    };
    console.log(d);
    const form = new FormData();
    for (const name in d) {
      form.append(name, d[name]);
    }
    d.document.length === 1
      ? form.append("document", d.document[0])
      : form.append("document", "");
    const res = await noticeApi.create(form);
    res?.status === 201
      ? navigate("/admin/dashboard/admin/notice")
      : setError("Failed to create a notice");
  };

  const [sendTo, setSendTo] = useState([]);
  const [errorSendTo, setErrorSendTo] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await noticeApi.sendTo();
        setArraySendTo(data?.data?.data?.data);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <div>
      <Breadnav pages={pages} />
      <Break title="New notice"></Break>
      <form
        className="form-solid w-full my-4 space-y-4 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <MultipleSelect
              value={arraySendTo}
              label="Send to*"
              selected={sendTo}
              setSelected={setSendTo}
              error={errorSendTo}
              setError={setErrorSendTo}
            />
            Note:You can select to multiple items
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Input
              label="Notice title*"
              register={register}
              required={true}
              errors={errors}
              name="title"
              placeholder="National Education Board"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <Textarea
              label="Notice description*"
              placeholder=" Description here"
              id="notice_description"
              name="description"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <UploadPhoto
              label="Document"
              id="document_form"
              name="document"
              register={register}
              watch={watch}
            />
          </div>
          <div>
            <Input
              label="Notice expire date"
              type="date"
              register={register}
              name="expiry_date"
              id="expire_date"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4"></div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit col-span-full lg:col-span-2 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/notice"
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
        </div>
      </form>
    </div>
  );
}

export default NewNotice;
