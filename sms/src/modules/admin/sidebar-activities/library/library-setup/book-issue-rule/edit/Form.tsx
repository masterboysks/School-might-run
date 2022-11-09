import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
// import Break from '../../../../../../../components/common/Break';
// import sectionsApi from '../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
// import subFacultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
// import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
// import classApi from '../../../../../../../api/admin/dashboard/admin/data-setup/classApi';
// import facultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
// import subjectApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi';
// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import AssignClassSubject from '../../../../../../../components/admin/admin/AssignClassSubject';
import React from 'react';
import { Input, Select } from '../../../../../../../components/common/fields';

const AddClassSemester = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm();
  // const [sectionsOption, setSectionsOption] = useState([]);
  //   const [subFacultyOption, setSubFacultyOption] = useState([]);
  //   const [facultyOption, setFacultyOption] = useState([]);
  //   const [levelOption, setLevelOption] = useState([]);
  //   const [arrayCompalsarySubjects, setArrayCompalsarySubjects] = useState([]);
  const [arrayMemberType, setArrayMemberType] = useState([
    {
      name: 'Working comming soon',
      id: '',
    },
  ]);

  const [error, setError] = useState('');
  //   useEffect(() => {
  //     (async () => {
  //       const data = await sectionsApi.getAll();

  //       setSectionsOption(data?.data?.data);
  //     })();
  //     (async () => {
  //       const data = await subFacultyApi.getAll();

  //       setSubFacultyOption(data?.data?.data);
  //     })();
  //     (async () => {
  //       const data = await facultyApi.getAll();

  //       setFacultyOption(data?.data?.data);
  //     })();
  //     (async () => {
  //       const data = await levelApi.getAll();

  //       setLevelOption(data?.data?.data);
  //     })();
  //     (async () => {
  //       const data = await subjectApi.getAll();
  //       setArrayCompalsarySubjects(
  //         data?.data?.data.filter((c) => c.subject_type === 1)
  //       );
  //       setArrayElectiveSubjects(
  //         data?.data?.data.filter((c) => c.subject_type === 2)
  //       );
  //     })();
  //   }, []);
  //   const navigate = useNavigate();
  const onSubmit = async (d) => console.log(d);
  //   const onSubmit = async (d) => {
  // try {
  //   const res = await classApi.create({
  //     ...d,
  //     section_ids: d.section_ids?.map((c) => c.id),
  //     subject_ids: [
  //       ...arrayCompalsarySubjects
  //         ?.filter((c, i) => d[`compalsarySubjects${i}`])
  //         ?.map((c) => c?.id),
  //       ...arrayElectiveSubjects
  //         ?.filter((c, i) => d[`electiveSubjects${i}`])
  //         ?.map((c) => c?.id),
  //     ],
  //   });
  //   res?.status === 201
  //     ? navigate('/admin/dashboard/admin/data-setup/class-semester')
  //     : setError('Failed to add class');
  // } catch (error) {
  //   console.warn(error);
  // }
  //   };
  return (
    <>
      <form
        className="form-solid w-full my-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <>
            <div className="text-lg font-medium text-red-600">{error}</div>
            <br />
          </>
        )}
        <div className="sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="Member type*"
              value={arrayMemberType}
              register={register}
              name="level_id"
              required={true}
              errors={errors}
            />
          </div>
          <div>
            <Input
              label="Submission time (in days)*"
              name="sub_time"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <Input
              label="No of books lendable*"
              register={register}
              name="lendable"
              required
              errors={errors}
            />
          </div>
          <div>
            <Input
              label="Max no of renewal"
              name="renew"
              required
              errors={error}
              register={register}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2  xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-4 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/library/library-setup/book-issue-rule"
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
    </>
  );
};

export default AddClassSemester;
