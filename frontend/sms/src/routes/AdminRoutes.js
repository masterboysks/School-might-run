import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

const AdminMain = lazy(() => import("../pages/AdminMain"));

// const  Main=lazy(()=>import( "../modules/admin/sidebar-activities/index"))

// student import
const AddStudent = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddStudent"
  )
);
const StudentSlidebar = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/slidebar/Slidebar"
  )
);
const StudentInformation = lazy(() =>
  import("../modules/admin/sidebar-activities/student/Student-information")
);
const StudentAttendence = lazy(() =>
  import("../modules/admin/sidebar-activities/student/Student-attendence")
);
const AddguardianTrue = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddGuardianTrue"
  )
);
const AddguardianFalse = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddGuardianFalse"
  )
);
const WholeClass = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components-attendence/wholeClass/WholeClass"
  )
);
const StudentProfile = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components-attendence/studentProfile/StudentProfile"
  )
);
const AddAddress = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddAddress"
  )
);
const AddClassDetails = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddClassDetails"
  )
);
const AddFeeDetails = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/student/components/add-student/AddFeeDetails"
  )
);
// Staff immport
const StaffSlidebar = lazy(() =>
  import("../modules/admin/sidebar-activities/staff/slidebar.js")
);
const StaffInformation = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/main/staff-information.js"
  )
);
const AddStaffGeneralPersonal = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-personal/AddStaffGeneralPersonal"
  )
);
const AddStaffGeneralAddress = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-address/AddStaffGeneralAddress"
  )
);
const AddStaffGeneralOffice = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/general/add-staff-general-office/AddStaffGeneralOffice"
  )
);
const StaffAcademicDetails = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/academic/academic-details/AcademicDetails"
  )
);
const AddStaffAcademicDetails = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/academic/add-acedimic-details/AddAcademicDetails"
  )
);
const AddStaffDocument = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/documents/add-document/AddDocument"
  )
);
const StaffDocument = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/documents/documents/Document"
  )
);
const AddStaffGeneralBase = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/general/Base"
  )
);
const AddStaffAcademicBase = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/academic/base.js"
  )
);
const AddStaffDocumentBase = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-information/documents/base.js"
  )
);

// Admin Imports
const AdminSlidebar = lazy(() =>
  import("../modules/admin/sidebar-activities/admin/slidebar")
);
const OrginazationSetup = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/organization-setup/OrginazationSetup"
  )
);
const UniversityBoard = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/university-board/university-board/UniversityBoard"
  )
);
const AddUniversityBoard = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/university-board/add-university-board/AddUniversityBoard"
  )
);
const Level = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/level/level/Level"
  )
);
const AddLevel = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/level/add-level/AddLevel"
  )
);
const Faculty = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/faculty/faculty/Faculty"
  )
);
const AddFaculty = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/faculty/add-faculty/AddFaculty"
  )
);
const SubFaculty = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/sub-faculty/SubFaculty"
  )
);
const AddSubFaculty = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/add-sub-faculty/AddSubFaculty"
  )
);
const Section = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/section/section/Section"
  )
);
const AddSection = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/section/add-section/AddSection"
  )
);
const Subject = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/subject/subject/Subject"
  )
);
const AddSubject = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/subject/add-subject/AddSubject"
  )
);
const ClassSemester = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/class-semester/class-semester/ClassSemester"
  )
);
const AddClassSemester = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/class-semester/add-class-semester/AddClassSemester"
  )
);
const AssignSubject = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/assign-subject/assign-subject/AssignSubject"
  )
);
const AddAssiginSubject = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/assign-subject/add-assign-subject/AddAssiginSubject"
  )
);
const Department = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/department/department/Department"
  )
);
const AddDepartment = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/department/add-department/AddDepartment"
  )
);
const Designation = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/designation/designation/Designation"
  )
);
const AddDesignation = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/designation/add-designation/AddDesignation"
  )
);
const AcademicYear = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/academic-year/academic-year/AcademicYear"
  )
);
const AddAcademicYear = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/academic-year/add-academic-year/AddAcademicYear"
  )
);
const FiscalYear = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/fiscal-year/FiscalYear"
  )
);
const AddFiscalYear = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/add-fiscal-year/AddFiscalYear"
  )
);
const AddClassShedule = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/class-shedule/add-class-shedule/AddClassShedule"
  )
);
const UpgradeClass = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/upgrade-class/upgrade-class/UpgradeClass"
  )
);
const ClassSchedule = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/class-shedule/class-shedule/ClassShedule"
  )
);
const Upgrade = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/upgrade-class/upgrade/Upgrade"
  )
);
const Notice = lazy(() =>
  import("../modules/admin/sidebar-activities/admin/notice/notice/Notice")
);
const NewNotice = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/admin/notice/new-notice/NewNotice"
  )
);
const Event = lazy(() =>
  import("../modules/admin/sidebar-activities/admin/event/event/Event")
);
const AddEvent = lazy(() =>
  import("../modules/admin/sidebar-activities/admin/event/add-event/AddEvent")
);
const Temeplate = lazy(() =>
  import("../modules/admin/sidebar-activities/admin/tempelate/Temeplate")
);
//
const StaffAttendence = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/staff-attendence/main/StaffAttendence"
  )
);
const TeacherAssign = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/teacher-assign/teacher-assign/TeacherAssign"
  )
);
const AssignTeacher = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/staff/teacher-assign/assign-teacher/AssignTeacher"
  )
);
const FeeSlidebar = lazy(() =>
  import("../modules/admin/sidebar-activities/fee/slidebar")
);
const FeeType = lazy(() =>
  import("../modules/admin/sidebar-activities/fee/fee-type/fee-type/FeeType")
);
const AddFeeType = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-type/add-fee-type/AddFeeType"
  )
);
const FeeAssign = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-assign/fee-assign/FeeAssign"
  )
);
const Assign = lazy(() =>
  import("../modules/admin/sidebar-activities/fee/fee-assign/assign/Assign")
);
const StudentLogsheet = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/logsheet/student-logsheet/StudentLogsheet"
  )
);
const Logsheet = lazy(() =>
  import("../modules/admin/sidebar-activities/fee/logsheet/logsheet/Logsheet")
);
const FeePayment = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-payment/fee-payment/FeePayment"
  )
);
const MiscAssign = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/assign/MiscAssign"
  )
);
const MiscellaneousFeeAssign = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/miscellaneous-fee-assign/miscellaneous-fee-assign/MiscellaneousFeeAssign"
  )
);
const FeeStudent = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-payment/fee-student/FeeStudent"
  )
);
const ClassFeeStatement = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-fee-statement/ClassFeeStatement"
  )
);
const StudentFeeStatement = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-fee-statement/StudentFeeStatement"
  )
);
const ClassStatement = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement/ClassStatement"
  )
);
const StudentStatement = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-statement/student-fee-statement/student-statement/StudentStatement"
  )
);
const ClassStatementMonthly = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/fee/fee-statement/class-fee-statement/class-statement-monthly/ClassStatementMonthly"
  )
);
const ExamSlidebar = lazy(() =>
  import("../modules/admin/sidebar-activities/exam/ExamSlidebar")
);
const ExamName = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/exam-name/exam-name/ExamName"
  )
);
const AddExamName = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/exam-name/add-exam-name/AddExamName"
  )
);
const GradeSystem = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/grade-system/grade-system/GradeSystem"
  )
);
const AddGradeSystem = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/grade-system/add-grade-system/AddGradeSystem"
  )
);
const ExamMarksName = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/exam-marks-name/exam-marks-name/ExamMarksName"
  )
);
const AddExamMarksName = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/exam-marks-name/add-exam-marks-name/AddExamMarksName"
  )
);
const AssignExam = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/assign-mark/assign-mark/AssignExam"
  )
);
const AssignAssignExam = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-setup/assign-mark/assign-assign-mark/AssignAssignExam"
  )
);
const MarkLedger = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/mark-ledger/mark-ledger/MarkLedger"
  )
);
const ViewMarkLedger = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/mark-ledger/view-mark-ledger/ViewMarkLedger"
  )
);
const OpenMarksheet = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/mark-ledger/view-mark-ledger/open-marksheet/OpenMarksheet"
  )
);
const ExamShedule = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-shedule/exam-shedule/ExamShedule"
  )
);
const SheduleExamShedule = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-shedule/shedule-exam-shedule/SheduleExamShedule"
  )
);
const AddSheduleExamShedule = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/exam-shedule/add-shedule-exam-shedule/AddSheduleExamShedule"
  )
);
const AdmitCard = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/admit-card/admit-card/AdmitCard"
  )
);
const AssignAdmitCard = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/exam/admit-card/assign-admit-card/AssignAdmitCard"
  )
);
// routes of report
const StudentAttendenceReportClasses = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/attendence-report/student-attendence-report/classes/StudentAttendenceReportClasses"
  )
);
const ReportSlidebar = lazy(() =>
  import("../modules/admin/sidebar-activities/report/slidebar")
);
const StudentAttendenceReportClass = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/attendence-report/student-attendence-report/class/StudentAttendenceReportClass"
  )
);
const StaffAttendenceReport = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/attendence-report/staff-sttendence-report/StaffAttendenceReport"
  )
);
const ExamReportClasses = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/exam-report/exam-report-classes/ExamReportClasses"
  )
);
const ExamReportClass = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/exam-report/exam-report-class/ExamReportClass"
  )
);
const FeeReport = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/fee-report/fee-report/FeeReport"
  )
);
const MonthlyFeeStatementReport = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/fee-report/monthly-fee-statement-report/MonthlyFeeStatementReport"
  )
);
const FeeStatementReport = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/fee-report/fee-statement-report/FeeStatementReport"
  )
);
const TopperReportClasses = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/topper-report/topper-report-classes/TopperReportClasses"
  )
);
const TopperReportClass = lazy(() =>
  import(
    "../modules/admin/sidebar-activities/report/topper-report/topper-report-class/TopperReportClass"
  )
);

function AdminRoutes() {
  const [hasAnotherChild, setHasAnotherChild] = useState(false);
  const location = useLocation();
  return (
    <Routes>
      <Route
        path="/dashboard/"
        element={
          <Suspense>
            <AdminMain />
          </Suspense>
        }
      >
        {/* Report route */}
        <Route
          path="report"
          element={
            <Suspense>
              <ReportSlidebar />
            </Suspense>
          }
        >
          <Route
            path="attendence-report/student-attendence-report"
            element={
              <Suspense>
                <StudentAttendenceReportClasses />
              </Suspense>
            }
          />
          <Route
            path="attendence-report/student-attendence-report/:classOfSchool/:section"
            element={
              <Suspense>
                <StudentAttendenceReportClass />
              </Suspense>
            }
          />
          <Route
            path="attendence-report/staff-attendence-report"
            element={
              <Suspense>
                <StaffAttendenceReport />
              </Suspense>
            }
          />
          <Route
            path="exam-report"
            element={
              <Suspense>
                <ExamReportClasses />
              </Suspense>
            }
          />
          <Route
            path="exam-report/:classOfSchool/:section"
            element={
              <Suspense>
                <ExamReportClass />
              </Suspense>
            }
          />
          <Route
            path="fee-report"
            element={
              <Suspense>
                <FeeReport />
              </Suspense>
            }
          />
          <Route
            path="fee-report/fee-statement/:classOfSchool/:section/:monthly"
            element={
              <Suspense>
                <MonthlyFeeStatementReport />
              </Suspense>
            }
          />
          <Route
            path="fee-report/fee-statement/:classOfSchool/:section"
            element={
              <Suspense>
                <FeeStatementReport />
              </Suspense>
            }
          />
          <Route
            path="topper-report"
            element={
              <Suspense>
                <TopperReportClasses />
              </Suspense>
            }
          />
          <Route
            path="topper-report/:classOfSchool"
            element={
              <Suspense>
                <TopperReportClass />
              </Suspense>
            }
          />
        </Route>
        {/* Exam Routes reside here */}
        <Route
          path="exam"
          element={
            <Suspense>
              <ExamSlidebar />
            </Suspense>
          }
        >
          <Route path="exam-setup">
            <Route
              path="exam-name"
              element={
                <Suspense>
                  <ExamName />
                </Suspense>
              }
            ></Route>
            <Route
              path="exam-name/add"
              element={
                <Suspense>
                  <AddExamName />
                </Suspense>
              }
            ></Route>
            <Route
              path="grading-system"
              element={
                <Suspense>
                  <GradeSystem />
                </Suspense>
              }
            ></Route>
            <Route
              path="grading-system/add"
              element={
                <Suspense>
                  <AddGradeSystem />
                </Suspense>
              }
            ></Route>
            <Route
              path="exam-marks-name"
              element={
                <Suspense>
                  <ExamMarksName />
                </Suspense>
              }
            ></Route>
            <Route
              path="exam-marks-name/add"
              element={
                <Suspense>
                  <AddExamMarksName />
                </Suspense>
              }
            ></Route>
            <Route
              path="assign-mark"
              element={
                <Suspense>
                  <AssignExam />
                </Suspense>
              }
            ></Route>
            <Route
              path="assign-mark/assign/:classOfSchool/:section"
              element={
                <Suspense>
                  <AssignAssignExam />
                </Suspense>
              }
            ></Route>
          </Route>

          <Route
            path="marks-ledger/view/:classOfSchool/:section/:studentName/:studentId"
            element={
              <Suspense>
                <OpenMarksheet />
              </Suspense>
            }
          ></Route>
          <Route
            path="marks-ledger"
            element={
              <Suspense>
                <MarkLedger />
              </Suspense>
            }
          ></Route>
          <Route
            path="marks-ledger/view/:classOfSchool/:section"
            element={
              <Suspense>
                <ViewMarkLedger />
              </Suspense>
            }
          ></Route>

          <Route
            path="exam-shedule"
            element={
              <Suspense>
                <ExamShedule />
              </Suspense>
            }
          ></Route>
          <Route
            path="exam-shedule/shedule/:examName"
            element={
              <Suspense>
                <SheduleExamShedule />
              </Suspense>
            }
          ></Route>
          <Route
            path="exam-shedule/shedule/:examName/add"
            element={
              <Suspense>
                <AddSheduleExamShedule />
              </Suspense>
            }
          ></Route>
          <Route
            path="admit-card"
            element={
              <Suspense>
                <AdmitCard />
              </Suspense>
            }
          ></Route>
          <Route
            path="admit-card/assign/:classOfschool/:section"
            element={
              <Suspense>
                <AssignAdmitCard />
              </Suspense>
            }
          ></Route>
        </Route>
        {/* Admin Routes reside here */}
        <Route
          path="admin"
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
          <Route
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
          ></Route>

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
          />
        </Route>
        {/* Staff Routes reside here */}
        <Route
          path="staff"
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
        {/* Student Routes reside here */}
        <Route
          path="student"
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
        {/* Fee Routes reside here */}
        <Route
          path="fee"
          element={
            <Suspense>
              <FeeSlidebar />
            </Suspense>
          }
        >
          <Route
            path="miscellaneous-fee-assign"
            element={
              <Suspense>
                <MiscellaneousFeeAssign />
              </Suspense>
            }
          ></Route>
          <Route
            path="miscellaneous-fee-assign/assign"
            element={
              <Suspense>
                <MiscAssign />
              </Suspense>
            }
          ></Route>

          <Route
            path="fee-statement/student-fee-statement/:student"
            element={
              <Suspense>
                <StudentStatement />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-statement/student-fee-statement"
            element={
              <Suspense>
                <StudentFeeStatement />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-statement/class-fee-statement/:classOfSchool/:section/:monthly"
            element={
              <Suspense>
                <ClassStatementMonthly />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-statement/class-fee-statement/:classOfSchool/:section"
            element={
              <Suspense>
                <ClassStatement />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-statement/class-fee-statement"
            element={
              <Suspense>
                <ClassFeeStatement />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-payment"
            element={
              <Suspense>
                <FeePayment />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-payment/:student"
            element={
              <Suspense>
                <FeeStudent />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-type"
            element={
              <Suspense>
                <FeeType />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-type/add"
            element={
              <Suspense>
                <AddFeeType />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-assign"
            element={
              <Suspense>
                <FeeAssign />
              </Suspense>
            }
          ></Route>
          <Route
            path="fee-assign/assign"
            element={
              <Suspense>
                <Assign />
              </Suspense>
            }
          ></Route>
          <Route
            path="student-logsheet"
            element={
              <Suspense>
                <StudentLogsheet />
              </Suspense>
            }
          ></Route>
          <Route
            path="student-logsheet/:student"
            element={
              <Suspense>
                <Logsheet />
              </Suspense>
            }
          ></Route>
        </Route>
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

export default AdminRoutes;
