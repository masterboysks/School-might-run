import { useParams } from "react-router-dom";
import Breadnav from "../../../../../../components/common/Breadnav";
import Details from "./Details";
import Form from "./Form";
import Table from "./Table";

const WholeClass = () => {
  const { classOfSchool, section } = useParams();
  const pages = [
    { name: "Student", href: "#" },
    {
      name: "Student Attendance",
      href: "/student/student-attendance/",
    },
    {
      name: `${classOfSchool}-${section}`,
      href: `/student/student-attendance/${classOfSchool}/${section}`,
    },
  ];
  return (
    <div className=" sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1">
      <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <div className="pt-9">
            <Breadnav pages={pages} />
          </div>
          <Details />
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default WholeClass;
