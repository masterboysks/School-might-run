import React from "react";
import AboveForm from "./components/AboveForm";
import GuardianFormTrue from "./components/GuardianFormTrue";

const AddguardianTrue = () => {
  const steps = [
    {
      name: "Student details",
      href: "/admin/dashboard/student/student-information/add-student-details",
      status: "complete",
    },
    { name: "Guardian details", href: "#", status: "current" },
    { name: "Address details", href: "#", status: "upcomming" },
    { name: "Class details", href: "#", status: "upcomming" },
    { name: "Fee details", href: "#", status: "upcomming" },
  ];
  return (
    <div className="sm:ml-[72px] box-border md:ml-0 md:w-full sm:pt-2  md:min-w-0 flex-1z">
      <div className=" top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <AboveForm steps={steps} title="Local Guardian details" />
          <GuardianFormTrue />
        </div>
      </div>
    </div>
  );
};

export default AddguardianTrue;
