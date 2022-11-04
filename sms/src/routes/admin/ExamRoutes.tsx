import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ExamSlidebar = lazy(
  () => import("../../modules/admin/sidebar-activities/exam/ExamSlidebar")
);
const ExamName = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/exam-name/exam-name/ExamName"
    )
);
const AddExamName = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/exam-name/add-exam-name/AddExamName"
    )
);
const GradeSystem = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/grade-system/grade-system/GradeSystem"
    )
);
const AddGradeSystem = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/grade-system/add-grade-system/AddGradeSystem"
    )
);
const ExamMarksName = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/exam-marks-name/exam-marks-name/ExamMarksName"
    )
);
const AddExamMarksName = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/exam-marks-name/add-exam-marks-name/AddExamMarksName"
    )
);
const AssignExam = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/assign-mark/assign-mark/AssignExam"
    )
);
const AssignAssignExam = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-setup/assign-mark/assign-assign-mark/AssignAssignExam"
    )
);
const MarkLedger = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/mark-ledger/mark-ledger/MarkLedger"
    )
);
const ViewMarkLedger = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/mark-ledger/view-mark-ledger/ViewMarkLedger"
    )
);
const OpenMarksheet = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/mark-ledger/view-mark-ledger/open-marksheet/OpenMarksheet"
    )
);
const ExamShedule = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-shedule/exam-shedule/ExamShedule"
    )
);
const SheduleExamShedule = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-shedule/shedule-exam-shedule/SheduleExamShedule"
    )
);
const AddSheduleExamShedule = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/exam-shedule/add-shedule-exam-shedule/AddSheduleExamShedule"
    )
);
const AdmitCard = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/admit-card/admit-card/AdmitCard"
    )
);
const AssignAdmitCard = lazy(
  () =>
    import(
      "../../modules/admin/sidebar-activities/exam/admit-card/assign-admit-card/AssignAdmitCard"
    )
);
export default function ExamRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <ExamSlidebar />
          </Suspense>
        }
      >
        <Route path="exam-setup">
          <Route
            path="exam-name"
            element={
              <Suspense fallback="Loading">
                <ExamName />
              </Suspense>
            }
          ></Route>
          <Route
            path="exam-name/add"
            element={
              <Suspense fallback="Loading">
                <AddExamName />
              </Suspense>
            }
          ></Route>
          <Route
            path="grading-system"
            element={
              <Suspense fallback="Loading">
                <GradeSystem />
              </Suspense>
            }
          ></Route>
          <Route
            path="grading-system/add"
            element={
              <Suspense fallback="Loading">
                <AddGradeSystem />
              </Suspense>
            }
          ></Route>
          <Route
            path="exam-marks-name"
            element={
              <Suspense fallback="Loading">
                <ExamMarksName />
              </Suspense>
            }
          ></Route>
          <Route
            path="exam-marks-name/add"
            element={
              <Suspense fallback="Loading">
                <AddExamMarksName />
              </Suspense>
            }
          ></Route>
          <Route
            path="assign-mark"
            element={
              <Suspense fallback="Loading">
                <AssignExam />
              </Suspense>
            }
          ></Route>
          <Route
            path="assign-mark/assign/:classOfSchool/:section"
            element={
              <Suspense fallback="Loading">
                <AssignAssignExam />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="marks-ledger/view/:classOfSchool/:section/:studentName/:studentId"
          element={
            <Suspense fallback="Loading">
              <OpenMarksheet />
            </Suspense>
          }
        ></Route>
        <Route
          path="marks-ledger"
          element={
            <Suspense fallback="Loading">
              <MarkLedger />
            </Suspense>
          }
        ></Route>
        <Route
          path="marks-ledger/view/:classOfSchool/:section"
          element={
            <Suspense fallback="Loading">
              <ViewMarkLedger />
            </Suspense>
          }
        ></Route>
        <Route
          path="exam-shedule"
          element={
            <Suspense fallback="Loading">
              <ExamShedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="exam-shedule/shedule/:examName"
          element={
            <Suspense fallback="Loading">
              <SheduleExamShedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="exam-shedule/shedule/:examName/add"
          element={
            <Suspense fallback="Loading">
              <AddSheduleExamShedule />
            </Suspense>
          }
        ></Route>
        <Route
          path="admit-card"
          element={
            <Suspense fallback="Loading">
              <AdmitCard />
            </Suspense>
          }
        ></Route>
        <Route
          path="admit-card/assign/:classOfschool/:section"
          element={
            <Suspense fallback="Loading">
              <AssignAdmitCard />
            </Suspense>
          }
        ></Route>
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
