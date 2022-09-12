import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Admin Imports
const AdminSlidebar = lazy(() =>
  import("../../modules/admin/sidebar-activities/admin/slidebar")
);
const OrginazationSetup = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/organization-setup/OrginazationSetup"
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
const AddClassShedule = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/class-shedule/add-class-shedule/AddClassShedule"
  )
);
const UpgradeClass = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade-class/UpgradeClass"
  )
);
const ClassSchedule = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/class-shedule/class-shedule/ClassShedule"
  )
);
const Upgrade = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/upgrade-class/upgrade/Upgrade"
  )
);
const Notice = lazy(() =>
  import("../../modules/admin/sidebar-activities/admin/notice/notice/Notice")
);
const NewNotice = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/notice/new-notice/NewNotice"
  )
);
const Event = lazy(() =>
  import("../../modules/admin/sidebar-activities/admin/event/event/Event")
);
const AddEvent = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/admin/event/add-event/AddEvent"
  )
);
const Temeplate = lazy(() =>
  import("../../modules/admin/sidebar-activities/admin/tempelate/Temeplate")
);
export default function AdminDashboardRoutes() {
  return (
    <Routes>
      {" "}
      {/* Admin Routes reside here */}
      <Route
        path="/"
        element={
          <Suspense>
            <AdminSlidebar />
          </Suspense>
        }
      >
        <Route
          path="template"
          element={
            <Suspense>
              <Temeplate />
            </Suspense>
          }
        ></Route>
        <Route
          path="event-calender"
          element={
            <Suspense>
              <Event />
            </Suspense>
          }
        ></Route>
        <Route
          path="event-calender/add/:date"
          element={
            <Suspense>
              <AddEvent />
            </Suspense>
          }
        ></Route>
        <Route
          path="notice"
          element={
            <Suspense>
              <Notice />
            </Suspense>
          }
        ></Route>
        <Route
          path="notice/new"
          element={
            <Suspense>
              <NewNotice />
            </Suspense>
          }
        ></Route>
        <Route
          path="upgrade"
          element={
            <Suspense>
              <Upgrade />
            </Suspense>
          }
        ></Route>
        <Route
          path="upgrade/class/:classname"
          element={
            <Suspense>
              <UpgradeClass />
            </Suspense>
          }
        ></Route>
        <Route
          path="class-schedule"
          element={
            <Suspense>
              <ClassSchedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="class-schedule/add"
          element={
            <Suspense>
              <AddClassShedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="organization-setup"
          element={
            <Suspense>
              <OrginazationSetup />
            </Suspense>
          }
        />
        <Route
          path="data-setup/university-board"
          element={
            <Suspense>
              <UniversityBoard></UniversityBoard>
            </Suspense>
          }
        />
        <Route
          path="data-setup/university-board/add"
          element={
            <Suspense>
              <AddUniversityBoard></AddUniversityBoard>
            </Suspense>
          }
        />
        <Route
          path="data-setup/level"
          element={
            <Suspense>
              <Level></Level>
            </Suspense>
          }
        />
        <Route
          path="data-setup/level/add"
          element={
            <Suspense>
              <AddLevel></AddLevel>
            </Suspense>
          }
        />
        <Route
          path="data-setup/faculty"
          element={
            <Suspense>
              <Faculty></Faculty>
            </Suspense>
          }
        />
        <Route
          path="data-setup/faculty/add"
          element={
            <Suspense>
              <AddFaculty />
            </Suspense>
          }
        />
        <Route
          path="data-setup/sub-faculty"
          element={
            <Suspense>
              <SubFaculty />
            </Suspense>
          }
        />
        <Route
          path="data-setup/sub-faculty/add"
          element={
            <Suspense>
              <AddSubFaculty />
            </Suspense>
          }
        />
        <Route
          path="data-setup/section"
          element={
            <Suspense>
              <Section />
            </Suspense>
          }
        />
        <Route
          path="data-setup/section/add"
          element={
            <Suspense>
              <AddSection />
            </Suspense>
          }
        />
        <Route
          path="data-setup/subject"
          element={
            <Suspense>
              <Subject />
            </Suspense>
          }
        />
        <Route
          path="data-setup/subject/add"
          element={
            <Suspense>
              <AddSubject />
            </Suspense>
          }
        />
        <Route
          path="data-setup/class-semester"
          element={
            <Suspense>
              <ClassSemester />
            </Suspense>
          }
        />
        <Route
          path="data-setup/class-semester/add"
          element={
            <Suspense>
              <AddClassSemester />
            </Suspense>
          }
        ></Route>
        {/* <Route
       path="data-setup/assign-subject"
       element={
         <Suspense>
           <AssignSubject />
         </Suspense>
       }
     />

     <Route
       path="data-setup/assign-subject/add"
       element={
         <Suspense>
           <AddAssiginSubject />
         </Suspense>
       }
     ></Route> */}
        <Route
          path="data-setup/department"
          element={
            <Suspense>
              <Department />
            </Suspense>
          }
        />
        <Route
          path="data-setup/department/add"
          element={
            <Suspense>
              <AddDepartment />
            </Suspense>
          }
        />
        <Route
          path="data-setup/designation"
          element={
            <Suspense>
              <Designation />
            </Suspense>
          }
        />
        <Route
          path="data-setup/designation/add"
          element={
            <Suspense>
              <AddDesignation />
            </Suspense>
          }
        />
        <Route
          path="data-setup/academic-year"
          element={
            <Suspense>
              <AcademicYear />
            </Suspense>
          }
        />
        <Route
          path="data-setup/academic-year/add"
          element={
            <Suspense>
              <AddAcademicYear />
            </Suspense>
          }
        />
        <Route
          path="data-setup/fiscal-year"
          element={
            <Suspense>
              <FiscalYear />
            </Suspense>
          }
        />
        <Route
          path="data-setup/fiscal-year/add"
          element={
            <Suspense>
              <AddFiscalYear />
            </Suspense>
          }
        />{" "}
        <Route
          path="*"
          element={
            <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
              Page not found-{location.pathname.replace("/", " ")}
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
