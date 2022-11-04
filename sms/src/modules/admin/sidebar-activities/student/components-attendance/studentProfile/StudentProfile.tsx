import Profile from "./Profile";
import Form from "./Form";
import Table from "./Table";
import Breadnav from "../../../../../../components/common/navigation/Breadnav";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const { classOfSchool, section, studentName } = useParams();
  const pages = [
    { name: "Student" },
    {
      name: "Student Attendance",
      href: "/student/student-attendance/",
    },
    {
      name: `${classOfSchool}-${section}`,
      href: `/student/student-attendance/${classOfSchool}/${section}`,
    },
    {
      name: `${studentName}`,
      href: `/student/student-attendance/${classOfSchool}/${section}/${studentName}`,
    },
  ];
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1">
      <div className="absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10">
        <div className="w-11/12 mx-auto text-sm -z-10">
          <div className="pt-9">
            <Breadnav pages={pages} />
          </div>
          <Profile />
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
