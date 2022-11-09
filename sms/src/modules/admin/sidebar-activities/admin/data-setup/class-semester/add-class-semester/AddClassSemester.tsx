import { Link, useNavigate } from 'react-router-dom';
import {
  Input,
  MultipleSelect,
  Select,
} from '../../../../../../../components/common/fields';
import { useState } from 'react';
import Breadnav from '../../../../../../../components/common/navigation/Breadnav';
import Break from '../../../../../../../components/common/Break';
import sectionsApi from '../../../../../../../api/admin/dashboard/admin/data-setup/sectionsApi';
import subFacultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subFacultyApi';
import levelApi from '../../../../../../../api/admin/dashboard/admin/data-setup/levelApi';
import classApi from '../../../../../../../api/admin/dashboard/admin/data-setup/classApi';
import facultyApi from '../../../../../../../api/admin/dashboard/admin/data-setup/facultyApi';
import subjectApi from '../../../../../../../api/admin/dashboard/admin/data-setup/subjectApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AssignClassSubject from '../../../../../../../components/admin/admin/AssignClassSubject';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup.object().shape({
  level_id: yup.string().required(''),
  faculty_id: yup.string(),
  subfaculty_id: yup.string(),
  class_name: yup.string().required(''),
});

const pages = [
  { name: 'Admin' },
  {
    name: 'Date setup',
  },
  {
    name: 'Class/semester',
    href: '/admin/dashboard/admin/data-setup/class-semester',
  },
  {
    name: 'Add',
    href: '/admin/dashboard/admin/data-setup/class-semester/add',
  },
];

const AddClassSemester = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [sectionsOption, setSectionsOption] = useState([]);
  const [subFacultyOption, setSubFacultyOption] = useState([]);
  const [facultyOption, setFacultyOption] = useState([]);
  const [levelOption, setLevelOption] = useState([]);
  const [arrayCompalsarySubjects, setArrayCompalsarySubjects] = useState([]);
  const [arrayElectiveSubjects, setArrayElectiveSubjects] = useState([]);

  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      const data = await sectionsApi.getAll();

      setSectionsOption(data?.data?.data);
    })();
    (async () => {
      const data = await subFacultyApi.getAll();

      setSubFacultyOption(data?.data?.data);
    })();
    (async () => {
      const data = await facultyApi.getAll();

      setFacultyOption(data?.data?.data);
    })();
    (async () => {
      const data = await levelApi.getAll();

      setLevelOption(data?.data?.data);
    })();
    (async () => {
      const data = await subjectApi.getAll();
      setArrayCompalsarySubjects(
        data?.data?.data.filter((c) => c.subject_type === 1)
      );
      setArrayElectiveSubjects(
        data?.data?.data.filter((c) => c.subject_type === 2)
      );
    })();
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (d) => {
    console.log({
      ...d,
      section_ids: d.section_ids?.map((c) => c.id),
      subject_ids: [
        ...arrayCompalsarySubjects
          .filter((c, i) => d[`compalsarySubjects${i}`])
          .map((c) => c.id),
        ...arrayElectiveSubjects
          .filter((c, i) => d[`electiveSubjects${i}`])
          .map((c) => c.id),
      ],
    });
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
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add Class/Semester" />
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
              label="Level*"
              value={levelOption}
              register={register}
              name="level_id"
              required={true}
              errors={errors}
            />
          </div>
          <div>
            <Input
              label="Class/Semester*"
              name="class_name"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div>
            <Select
              label="Faculty"
              value={facultyOption}
              register={register}
              name="faculty_id"
            />
          </div>
          <div>
            <Select
              label="Sub faculty"
              value={subFacultyOption}
              name="subfaculty_id"
              register={register}
            />
          </div>

          <div>
            <MultipleSelect
              label="Sections*"
              name="section_ids"
              value={sectionsOption}
              control={control}
              errors={errors}
              required={true}
            />

            <div className=" my-3">
              *Note : You can select multiple section at once
            </div>
          </div>
        </div>
        <AssignClassSubject
          label="Select for compulsary Subject*"
          register={register}
          value={arrayCompalsarySubjects}
          name="compalsarySubjects"
        />
        <AssignClassSubject
          label="Select for elective Subject"
          register={register}
          value={arrayElectiveSubjects}
          name="electiveSubjects"
        />
        <div className="sm:grid-cols-2  xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-4 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/dashboard/admin/data-setup/class-semester"
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
