import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const EditAcademicYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/academic-year/edit-academic-year/EditAcademicYear"));
const EditClassSemester = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/class-semester/edit-class-semester/EditClassSemester"));
const EditDepartment = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/department/edit-department/EditDepartment"));
const EditDesignation = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/designation/edit-designation/EditDesignation"));
const EditFaculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/faculty/edit-faculty/EditFaculty"));
const EditFiscalYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/edit-fiscal-year/EditFiscalYear"));
const EditSection = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/section/edit-section/EditSection"));
const EditSubFaculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/edit-sub-faculty/EditSubFaculty"));
const EditSubject = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/subject/edit-subject/EditSubject"));
// my imports
const EditLevel = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/level/edit-level/EditLevel"));
const EditUniversityBoard = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/university-board/edit-university-board/EditUniversityBoard"));
const UniversityBoard = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/university-board/university-board/UniversityBoard"));
const AddUniversityBoard = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/university-board/add-university-board/AddUniversityBoard"));
const Level = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/level/level/Level"));
const AddLevel = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/level/add-level/AddLevel"));
const Faculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/faculty/faculty/Faculty"));
const AddFaculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/faculty/add-faculty/AddFaculty"));
const SubFaculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/sub-faculty/SubFaculty"));
const AddSubFaculty = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/sub-faculty/add-sub-faculty/AddSubFaculty"));
const Section = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/section/section/Section"));
const AddSection = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/section/add-section/AddSection"));
const Subject = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/subject/subject/Subject"));
const AddSubject = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/subject/add-subject/AddSubject"));
const ClassSemester = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/class-semester/class-semester/ClassSemester"));
const AddClassSemester = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/class-semester/add-class-semester/AddClassSemester"));
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
const Department = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/department/department/Department"));
const AddDepartment = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/department/add-department/AddDepartment"));
const Designation = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/designation/designation/Designation"));
const AddDesignation = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/designation/add-designation/AddDesignation"));
const AcademicYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/academic-year/academic-year/AcademicYear"));
const AddAcademicYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/academic-year/add-academic-year/AddAcademicYear"));
const FiscalYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/fiscal-year/FiscalYear"));
const AddFiscalYear = lazy(() => import("../../modules/admin/sidebar-activities/admin/data-setup/fiscal-year/add-fiscal-year/AddFiscalYear"));
export default function AdminDataSetupRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "university-board", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(UniversityBoard, {}) }) }), _jsx(Route, { path: "university-board/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddUniversityBoard, {}) }) }), _jsx(Route, { path: "university-board/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditUniversityBoard, {}) }) }), _jsx(Route, { path: "level", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Level, {}) }) }), _jsx(Route, { path: "level/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddLevel, {}) }) }), _jsx(Route, { path: "level/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditLevel, {}) }) }), _jsx(Route, { path: "faculty", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Faculty, {}) }) }), _jsx(Route, { path: "faculty/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddFaculty, {}) }) }), _jsx(Route, { path: "faculty/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditFaculty, {}) }) }), _jsx(Route, { path: "sub-faculty", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(SubFaculty, {}) }) }), _jsx(Route, { path: "sub-faculty/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddSubFaculty, {}) }) }), _jsx(Route, { path: "sub-faculty/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditSubFaculty, {}) }) }), _jsx(Route, { path: "section", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Section, {}) }) }), _jsx(Route, { path: "section/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddSection, {}) }) }), _jsx(Route, { path: "section/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditSection, {}) }) }), _jsx(Route, { path: "subject", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Subject, {}) }) }), "checking going on", _jsx(Route, { path: "subject/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddSubject, {}) }) }), _jsx(Route, { path: "subject/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditSubject, {}) }) }), _jsx(Route, { path: "class-semester", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(ClassSemester, {}) }) }), _jsx(Route, { path: "class-semester/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddClassSemester, {}) }) }), _jsx(Route, { path: "class-semester/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditClassSemester, {}) }) }), _jsx(Route, { path: "department", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Department, {}) }) }), _jsx(Route, { path: "department/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddDepartment, {}) }) }), _jsx(Route, { path: "department/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditDepartment, {}) }) }), _jsx(Route, { path: "designation", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(Designation, {}) }) }), _jsx(Route, { path: "designation/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddDesignation, {}) }) }), _jsx(Route, { path: "designation/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditDesignation, {}) }) }), _jsx(Route, { path: "academic-year", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AcademicYear, {}) }) }), _jsx(Route, { path: "academic-year/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddAcademicYear, {}) }) }), _jsx(Route, { path: "academic-year/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditAcademicYear, {}) }) }), _jsx(Route, { path: "fiscal-year", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(FiscalYear, {}) }) }), _jsx(Route, { path: "fiscal-year/add", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(AddFiscalYear, {}) }) }), _jsx(Route, { path: "fiscal-year/:id/:name", element: _jsx(Suspense, { fallback: "Loading", children: _jsx(EditFiscalYear, {}) }) })] }));
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
