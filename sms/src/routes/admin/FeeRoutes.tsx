import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import EditFeeType from '../../modules/admin/sidebar-activities/fee/fee-type/edit-fee-type/EditFeeType';

const FeeSlidebar = lazy(
  () => import('../../modules/admin/sidebar-activities/fee/slidebar')
);
const FeeType = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-type/fee-type/FeeType'
    )
);
const AddFeeType = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-type/add-fee-type/AddFeeType'
    )
);
const FeeAssign = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-assign/fee-assign/FeeAssign'
    )
);
const Assign = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-assign/assign/Assign'
    )
);
const StudentLogsheet = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/logsheet/student-logsheet/StudentLogsheet'
    )
);
const Logsheet = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/logsheet/logsheet/Logsheet'
    )
);
const FeePayment = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-payment/fee-payment/FeePayment'
    )
);
const MiscAssign = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/assign/MiscAssign'
    )
);
const MiscellaneousFeeAssign = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/miscellaneous-fee-assign/MiscellaneousFeeAssign'
    )
);
const FeeStudent = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-payment/fee-student/FeeStudent'
    )
);
const ClassFeeStatement = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-fee-statement/ClassFeeStatement'
    )
);
const StudentFeeStatement = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-fee-statement/StudentFeeStatement'
    )
);
const ClassStatement = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement/ClassStatement'
    )
);
const StudentStatement = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-statement/StudentStatement'
    )
);
const ClassStatementMonthly = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement-monthly/ClassStatementMonthly'
    )
);
export default function FeeRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <FeeSlidebar />
          </Suspense>
        }
      >
        <Route
          path="miscellaneous-fee-assign"
          element={
            <Suspense fallback="Loading">
              <MiscellaneousFeeAssign />
            </Suspense>
          }
        ></Route>
        <Route
          path="miscellaneous-fee-assign/assign"
          element={
            <Suspense fallback="Loading">
              <MiscAssign />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-statement/student-fee-statement/:student"
          element={
            <Suspense fallback="Loading">
              <StudentStatement />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-statement/student-fee-statement"
          element={
            <Suspense fallback="Loading">
              <StudentFeeStatement />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-statement/class-fee-statement/:classOfSchool/:section/:monthly"
          element={
            <Suspense fallback="Loading">
              <ClassStatementMonthly />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-statement/class-fee-statement/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <ClassStatement />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-statement/class-fee-statement"
          element={
            <Suspense fallback="Loading">
              <ClassFeeStatement />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-payment"
          element={
            <Suspense fallback="Loading">
              <FeePayment />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-payment/:student"
          element={
            <Suspense fallback="Loading">
              <FeeStudent />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-type"
          element={
            <Suspense fallback="Loading">
              <FeeType />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-type/add"
          element={
            <Suspense fallback="Loading">
              <AddFeeType />
            </Suspense>
          }
        />
        <Route
          path="fee-type/edit/:id/:page"
          element={
            <Suspense fallback="Loading">
              <EditFeeType />
            </Suspense>
          }
        />
        <Route
          path="fee-assign"
          element={
            <Suspense fallback="Loading">
              <FeeAssign />
            </Suspense>
          }
        ></Route>
        <Route
          path="fee-assign/assign"
          element={
            <Suspense fallback="Loading">
              <Assign />
            </Suspense>
          }
        ></Route>
        <Route
          path="student-logsheet"
          element={
            <Suspense fallback="Loading">
              <StudentLogsheet />
            </Suspense>
          }
        ></Route>
        <Route
          path="student-logsheet/:student"
          element={
            <Suspense fallback="Loading">
              <Logsheet />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
              Page not found-{location.pathname.replace('/', ' ')}
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
