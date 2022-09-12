import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
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
const StaffAcademicDetails = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/academic/academic-details/AcademicDetails"
  )
);
const AddStaffAcademicDetails = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/academic/add-acedimic-details/AddAcademicDetails"
  )
);
const AddStaffDocument = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/documents/add-document/AddDocument"
  )
);
const StaffDocument = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/staff/staff-information/documents/documents/Document"
  )
);
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
          <Suspense>
            <StaffSlidebar></StaffSlidebar>
          </Suspense>
        }
      >
        <Route
          path="teacher-assign/assign-teacher"
          element={
            <Suspense>
              <AssignTeacher />
            </Suspense>
          }
        ></Route>
        <Route
          path="teacher-assign"
          element={
            <Suspense>
              <TeacherAssign />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff-attendence"
          element={
            <Suspense>
              <StaffAttendence />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff-information"
          element={
            <Suspense>
              <StaffInformation />
            </Suspense>
          }
        ></Route>
        <Route
          path="staff/staff-information/add-staff/general"
          element={
            <Suspense>
              <AddStaffGeneralBase />
            </Suspense>
          }
        >
          <Route
            path="staff/staff-information/add-staff/general/personal-details"
            element={
              <Suspense>
                <AddStaffGeneralPersonal />
              </Suspense>
            }
          />
          <Route
            path="staff/staff-information/add-staff/general/address-details"
            element={
              <Suspense>
                <AddStaffGeneralAddress />
              </Suspense>
            }
          />
          <Route
            path="staff/staff-information/add-staff/general/office-details"
            element={
              <Suspense>
                <AddStaffGeneralOffice />
              </Suspense>
            }
          />
        </Route>
        <Route
          element={
            <Suspense>
              <AddStaffAcademicBase />
            </Suspense>
          }
        >
          <Route
            path="staff/staff-information/add-staff/academic"
            element={
              <Suspense>
                <StaffAcademicDetails />
              </Suspense>
            }
          />
          <Route
            path="staff/staff-information/add-staff/academic/add-academic-details"
            element={
              <Suspense>
                <AddStaffAcademicDetails />
              </Suspense>
            }
          />
        </Route>
        <Route
          element={
            <Suspense>
              <AddStaffDocumentBase />
            </Suspense>
          }
        >
          <Route
            path="staff/staff-information/add-staff/documents"
            element={
              <Suspense>
                <StaffDocument />
              </Suspense>
            }
          />
          <Route
            path="staff/staff-information/add-staff/documents/add-documents"
            element={
              <Suspense>
                <AddStaffDocument />
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
