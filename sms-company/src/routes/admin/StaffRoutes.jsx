import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ViewStaff from "../../modules/admin/sidebar-activities/staff/staff-information/view/ViewStaff";
const StaffSlidebar = lazy(() =>
  import("../../modules/admin/sidebar-activities/staff/slidebar")
);
const StaffInformation = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/main/staff-information"
  )
);
const AddStaffGeneralPersonal = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-personal/AddStaffGeneralPersonal"
  )
);
const AddStaffGeneralAddress = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-address/AddStaffGeneralAddress"
  )
);
const AddStaffGeneralOffice = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-office/AddStaffGeneralOffice"
  )
);
// const StaffAcademicDetails = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/academic/academic-details/AcademicDetails"
//   )
// );
// const AddStaffAcademicDetails = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/academic/add-acedimic-details/AddAcademicDetails"
//   )
// );
// const AddStaffDocument = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/documents/add-document/AddDocument"
//   )
// );
// const StaffDocument = lazy(() =>
//   import(
//     "../../modules/admin/sidebar-activities/staff/staff-information/documents/documents/Document"
//   )
// );
const AddStaffGeneralBase = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/general/Base"
  )
);
const AddStaffAcademicBase = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/academic/base"
  )
);
const AddStaffDocumentBase = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/documents/base"
  )
);
const StaffAttendence = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-attendence/main/StaffAttendence"
  )
);
const TeacherAssign = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/teacher-assign/teacher-assign/TeacherAssign"
  )
);
const AssignTeacher = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/teacher-assign/assign-teacher/AssignTeacher"
  )
);
export default function StaffRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <StaffSlidebar></StaffSlidebar>
          </Suspense>
        }
      >
        <Route
          path="teacher-assign/assign-teacher"
          element={
            <Suspense fallback="Loading">
              <AssignTeacher />
            </Suspense>
          }
        ></Route>
        <Route
          path="teacher-assign"
          element={
            <Suspense fallback="Loading">
              <TeacherAssign />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff-attendence"
          element={
            <Suspense fallback="Loading">
              <StaffAttendence />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff-information"
          element={
            <Suspense fallback="Loading">
              <StaffInformation />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff-information/:id/view"
          element={
            <Suspense fallback="Loading ...">
              <ViewStaff />
            </Suspense>
          }
        />
        <Route
          path="staff-information/add-staff/general"
          element={
            <Suspense fallback="Loading">
              <AddStaffGeneralBase />
            </Suspense>
          }
        >
          <Route
            path="personal-details"
            element={
              <Suspense fallback="Loading">
                <AddStaffGeneralPersonal />
              </Suspense>
            }
          />
          <Route
            path="address-details"
            element={
              <Suspense fallback="Loading">
                <AddStaffGeneralAddress />
              </Suspense>
            }
          />
          <Route
            path="office-details"
            element={
              <Suspense fallback="Loading">
                <AddStaffGeneralOffice />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
            Page not found-{location.pathname.replace("/", " ")}
          </div>
        }
      />
    </Routes>
  );
}
// }
// <Route
// element={
//   <Suspense fallback="Loading">
//     <AddStaffAcademicBase />
//   </Suspense>
// }
// >
// <Route
//   path="staff-information/add-staff/academic"
//   element={
//     <Suspense fallback="Loading">
//       <StaffAcademicDetails />
//     </Suspense>
//   }
// />
// <Route
//   path="staff-information/add-staff/academic/add-academic-details"
//   element={
//     <Suspense fallback="Loading">
//       <AddStaffAcademicDetails />
//     </Suspense>
//   }
// />
// </Route>
// <Route
// element={
//   <Suspense fallback="Loading">
//     <AddStaffDocumentBase />
//   </Suspense>
// }
// >
// <Route
//   path="staff-information/add-staff/documents"
//   element={
//     <Suspense fallback="Loading">
//       <StaffDocument />
//     </Suspense>
//   }
// />
// <Route
//   path="staff-information/add-staff/documents/add-documents"
//   element={
//     <Suspense fallback="Loading">
//       <AddStaffDocument />
//     </Suspense>
//   }
// />
// </Route>
