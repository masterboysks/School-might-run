import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const EditAcademicYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/academic-year/edit-academic-year/EditAcademicYear"
  )
);
const EditClassSemester = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/class-semester/edit-class-semester/EditClassSemester"
  )
);
const EditDepartment = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/department/edit-department/EditDepartment"
  )
);
const EditDesignation = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/designation/edit-designation/EditDesignation"
  )
);
const EditFaculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/faculty/edit-faculty/EditFaculty"
  )
);
const EditFiscalYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/edit-fiscal-year/EditFiscalYear"
  )
);
const EditSection = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/section/edit-section/EditSection"
  )
);
const EditSubFaculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/edit-sub-faculty/EditSubFaculty"
  )
);
const EditSubject = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/subject/edit-subject/EditSubject"
  )
);
// my imports
const EditLevel = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/level/edit-level/EditLevel"
  )
);
const EditUniversityBoard = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/university-board/edit-university-board/EditUniversityBoard"
  )
);

const UniversityBoard = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/university-board/university-board/UniversityBoard"
  )
);
const AddUniversityBoard = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/university-board/add-university-board/AddUniversityBoard"
  )
);
const Level = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/level/level/Level"
  )
);
const AddLevel = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/level/add-level/AddLevel"
  )
);
const Faculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/faculty/faculty/Faculty"
  )
);
const AddFaculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/faculty/add-faculty/AddFaculty"
  )
);
const SubFaculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/sub-faculty/SubFaculty"
  )
);
const AddSubFaculty = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/add-sub-faculty/AddSubFaculty"
  )
);
const Section = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/section/section/Section"
  )
);
const AddSection = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/section/add-section/AddSection"
  )
);
const Subject = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/subject/subject/Subject"
  )
);
const AddSubject = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/subject/add-subject/AddSubject"
  )
);
const ClassSemester = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/class-semester/class-semester/ClassSemester"
  )
);
const AddClassSemester = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/class-semester/add-class-semester/AddClassSemester"
  )
);
// const AssignSubject = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/admin/data-setup/assign-subject/assign-subject/AssignSubject"
//   )
// );
// const AddAssiginSubject = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/admin/data-setup/assign-subject/add-assign-subject/AddAssiginSubject"
//   )
// );
const Department = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/department/department/Department"
  )
);
const AddDepartment = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/department/add-department/AddDepartment"
  )
);
const Designation = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/designation/designation/Designation"
  )
);
const AddDesignation = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/designation/add-designation/AddDesignation"
  )
);
const AcademicYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/academic-year/academic-year/AcademicYear"
  )
);
const AddAcademicYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/academic-year/add-academic-year/AddAcademicYear"
  )
);
const FiscalYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/fiscal-year/FiscalYear"
  )
);
const AddFiscalYear = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/add-fiscal-year/AddFiscalYear"
  )
);
export default function AdminDataSetupRoutes() {
  return (
    <Routes>
      <Route
        path="university-board"
        element={
          <Suspense fallback="Loading">
            <UniversityBoard></UniversityBoard>
          </Suspense>
        }
      />
      <Route
        path="university-board/add"
        element={
          <Suspense fallback="Loading">
            <AddUniversityBoard></AddUniversityBoard>
          </Suspense>
        }
      />
      <Route
        path="university-board/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditUniversityBoard></EditUniversityBoard>
          </Suspense>
        }
      />
      <Route
        path="level"
        element={
          <Suspense fallback="Loading">
            <Level></Level>
          </Suspense>
        }
      />
      <Route
        path="level/add"
        element={
          <Suspense fallback="Loading">
            <AddLevel></AddLevel>
          </Suspense>
        }
      />
      <Route
        path="level/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditLevel></EditLevel>
          </Suspense>
        }
      />
      <Route
        path="faculty"
        element={
          <Suspense fallback="Loading">
            <Faculty></Faculty>
          </Suspense>
        }
      />
      <Route
        path="faculty/add"
        element={
          <Suspense fallback="Loading">
            <AddFaculty />
          </Suspense>
        }
      />
      <Route
        path="faculty/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditFaculty />
          </Suspense>
        }
      />
      <Route
        path="sub-faculty"
        element={
          <Suspense fallback="Loading">
            <SubFaculty />
          </Suspense>
        }
      />
      <Route
        path="sub-faculty/add"
        element={
          <Suspense fallback="Loading">
            <AddSubFaculty />
          </Suspense>
        }
      />
      <Route
        path="sub-faculty/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditSubFaculty />
          </Suspense>
        }
      />
      <Route
        path="section"
        element={
          <Suspense fallback="Loading">
            <Section />
          </Suspense>
        }
      />
      <Route
        path="section/add"
        element={
          <Suspense fallback="Loading">
            <AddSection />
          </Suspense>
        }
      />
      <Route
        path="section/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditSection />
          </Suspense>
        }
      />
      <Route
        path="subject"
        element={
          <Suspense fallback="Loading">
            <Subject />
          </Suspense>
        }
      />
      checking going on
      <Route
        path="subject/add"
        element={
          <Suspense fallback="Loading">
            <AddSubject />
          </Suspense>
        }
      />
      <Route
        path="subject/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditSubject />
          </Suspense>
        }
      />
      <Route
        path="class-semester"
        element={
          <Suspense fallback="Loading">
            <ClassSemester />
          </Suspense>
        }
      />
      <Route
        path="class-semester/add"
        element={
          <Suspense fallback="Loading">
            <AddClassSemester />
          </Suspense>
        }
      ></Route>
      <Route
        path="class-semester/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditClassSemester />
          </Suspense>
        }
      ></Route>
      <Route
        path="department"
        element={
          <Suspense fallback="Loading">
            <Department />
          </Suspense>
        }
      />
      <Route
        path="department/add"
        element={
          <Suspense fallback="Loading">
            <AddDepartment />
          </Suspense>
        }
      />
      <Route
        path="department/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditDepartment />
          </Suspense>
        }
      />
      <Route
        path="designation"
        element={
          <Suspense fallback="Loading">
            <Designation />
          </Suspense>
        }
      />
      <Route
        path="designation/add"
        element={
          <Suspense fallback="Loading">
            <AddDesignation />
          </Suspense>
        }
      />
      <Route
        path="designation/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditDesignation />
          </Suspense>
        }
      />
      <Route
        path="academic-year"
        element={
          <Suspense fallback="Loading">
            <AcademicYear />
          </Suspense>
        }
      />
      <Route
        path="academic-year/add"
        element={
          <Suspense fallback="Loading">
            <AddAcademicYear />
          </Suspense>
        }
      />
      <Route
        path="academic-year/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditAcademicYear />
          </Suspense>
        }
      />
      <Route
        path="fiscal-year"
        element={
          <Suspense fallback="Loading">
            <FiscalYear />
          </Suspense>
        }
      />
      <Route
        path="fiscal-year/add"
        element={
          <Suspense fallback="Loading">
            <AddFiscalYear />
          </Suspense>
        }
      />
      <Route
        path="fiscal-year/:id/:name"
        element={
          <Suspense fallback="Loading">
            <EditFiscalYear />
          </Suspense>
        }
      />
    </Routes>
  );
}
{
  /* <Route
 path="assign-subject"
 element={
   <Suspense>
     <AssignSubject />
   </Suspense>
 }
/>

<Route
 path="assign-subject/add"
 element={
   <Suspense>
     <AddAssiginSubject />
   </Suspense>
 }
></Route> */
}
