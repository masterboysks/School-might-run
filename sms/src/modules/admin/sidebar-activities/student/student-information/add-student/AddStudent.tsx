import React from "react";
import AboveForm from "./components/AboveForm";
import DetailsForm from "./components/DetailsForm";
const AddStudent = ({ HasAnotherChild, setHasAnotherChild }) => {
  const steps = [
    { name: "Student details", href: "#", status: "current" },
    { name: "Guardian details", href: "#", status: "upcomming" },
    { name: "Address details", href: "#", status: "upcomming" },
    { name: "Class details", href: "#", status: "upcomming" },
    { name: "Fee details", href: "#", status: "upcomming" },
  ];

  return (
    <div className="sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1z">
      <div className=" top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
        <div className="-z-10 w-11/12 mx-auto text-sm">
          <AboveForm steps={steps} title="Student details" />
          <DetailsForm
            anotherChildToggle={setHasAnotherChild}
            anotherChild={HasAnotherChild}
          />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
