import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
const AddStudent = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddStudent"
  )
);
const StudentSlidebar = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/slidebar/Slidebar"
  )
);
const StudentInformation = lazy(() =>
  import("../../modules/admin/sidebar-activities/student/Student-information")
);
const StudentAttendence = lazy(() =>
  import("../../modules/admin/sidebar-activities/student/Student-attendence")
);
const AddguardianTrue = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddGuardianTrue"
  )
);
const AddguardianFalse = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddGuardianFalse"
  )
);
const WholeClass = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components-attendence/wholeClass/WholeClass"
  )
);
const StudentProfile = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components-attendence/studentProfile/StudentProfile"
  )
);
const AddAddress = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddAddress"
  )
);
const AddClassDetails = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddClassDetails"
  )
);
const AddFeeDetails = lazy(() =>
  import(
    "../../modules/admin/sidebar-activities/student/components/add-student/AddFeeDetails"
  )
);
export default function StudentRoutes() {
  const [hasAnotherChild, setHasAnotherChild] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <StudentSlidebar />
          </Suspense>
        }
      >
        <Route
          path="student-information"
          element={
            <Suspense>
              <StudentInformation />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details"
          element={
            <Suspense>
              <AddStudent
                HasAnotherChild={hasAnotherChild}
                setHasAnotherChild={setHasAnotherChild}
              />{" "}
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details/guardian-true"
          element={
            <Suspense>
              <AddguardianTrue />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-student-details/guardian-false"
          element={
            <Suspense>
              <AddguardianFalse />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-address-details"
          element={
            <Suspense>
              <AddAddress />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-class-details"
          element={
            <Suspense>
              <AddClassDetails />
            </Suspense>
          }
        />
        <Route
          path="student-information/add-fee-details"
          element={
            <Suspense>
              <AddFeeDetails />
            </Suspense>
          }
        />
        <Route
          path="student-attendence"
          element={
            <Suspense>
              <StudentAttendence />
            </Suspense>
          }
        ></Route>

        <Route
          path="student-attendence/:classOfSchool/:section"
          element={
            <Suspense>
              <WholeClass />
            </Suspense>
          }
        />

        <Route
          path="student-attendence/:classOfSchool/:section/:studentName/:studentId"
          element={
            <Suspense>
              <StudentProfile />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
