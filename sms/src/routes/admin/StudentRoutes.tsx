import React from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const StudentSlidebar = lazy(
  () => import('../../modules/admin/sidebar-activities/student/Slidebar')
);
const StudentAttendenceClass = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-attendence/student-attendence-class/page'
    )
);
const StudentAttendenceStudent = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-attendence/student-attendence-student/page'
    )
);
const StudentAttendenceHome = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-attendence/student-attendence/page'
    )
);
const AddStudentAddressForm = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student-information/address-details/page'
    )
);
const AddStudentClassDetailForm = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student-information/class-details/page'
    )
);
const AddStudentFeeDetail = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student-information/fee-details/page'
    )
);
const AddStudentGurdainDetail = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student-information/gurdain-details/page'
    )
);
const AddStudentStudentDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/add-student-information/student-details/page'
    )
);
const StudentInformation = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/student/student-information/student-information/page'
    )
);
export default function StudentRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <StudentSlidebar />
          </Suspense>
        }
      >
        <Route
          path="student-information"
          element={
            <Suspense fallback="Loading">
              <StudentInformation />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details"
          element={
            <Suspense fallback="Loading">
              <AddStudentStudentDetails />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details/guardian"
          element={
            <Suspense fallback="Loading">
              <AddStudentGurdainDetail />
            </Suspense>
          }
        />

        <Route
          path="student-information/add-address-details"
          element={
            <Suspense fallback="Loading">
              <AddStudentAddressForm />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-class-details"
          element={
            <Suspense fallback="Loading">
              <AddStudentClassDetailForm />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-fee-details"
          element={
            <Suspense fallback="Loading">
              <AddStudentFeeDetail />
            </Suspense>
          }
        />
        <Route
          path="student-attendance"
          element={
            <Suspense fallback="Loading">
              <StudentAttendenceHome />
            </Suspense>
          }
        ></Route>

        <Route
          path="student-attendance/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <StudentAttendenceClass />
            </Suspense>
          }
        />

        <Route
          path="student-attendance/:classOfSchool/:section/:studentName/:studentId"
          element={
            <Suspense fallback="Loading">
              <StudentAttendenceStudent />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
