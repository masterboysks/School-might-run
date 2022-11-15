import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const LibraryBookEntryReport = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/libaray-book-report/book-entry-report/page'
    )
);
const LibraryBookReport = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/libaray-book-report/book-report/page'
    )
);
const LibraryBookTransactionReport = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/libaray-book-report/book-transaction-report/page'
    )
);
const LibraryDayLog = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/libaray-book-report/libaray-day-log/page'
    )
);
const LibraryMemberStaffMain = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/staff/main/page'
    )
);
const LibraryRegisterStaff = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/staff/register/page'
    )
);
const BookBorrowHistoryStaff = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/staff/staff/boook-borrow-history/page'
    )
);
const LibraryEnrollRenewHistoryStaff = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/staff/staff/enroll-renew/page'
    )
);
const LibrarySingleStaffLayout = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/staff/staff/layout'
    )
);
const LibraryMemberStudentMain = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/student/main/page'
    )
);
const LibraryRegisterStudent = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/student/register/page'
    )
);
const BookBorrowHistory = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/student/student/boook-borrow-history/page'
    )
);
const LibraryEnrollRenewHistory = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/student/student/enroll-renew/page'
    )
);
const LibrarySingleStudentLayout = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-member/student/student/layout'
    )
);
const LibraryFineStatement = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-payment-report/library-fine-statement/page'
    )
);
const LibraryFineSummary = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-payment-report/library-fine-summary/page'
    )
);
const LibraryBookCategoryAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-category/add/page'
    )
);
const LibraryBookCategory = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-category/catagory/page'
    )
);
const LibraryBookCategoryEdit = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-category/edit/page'
    )
);
const LibraryBookIssueRuleEdit = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-issue-rule/edit/page'
    )
);
const LibraryBookIssueRule = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-issue-rule/issue-rule/page'
    )
);
const LibraryBookSubCategoryAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-sub-catagory/add/page'
    )
);
const LibraryBookSubCategoryEdit = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-sub-catagory/edit/page'
    )
);
const LibraryBookSubCatagory = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/book-sub-catagory/sub-category/page'
    )
);
const LibraryFineSetupEdit = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/finesetup/edit/page'
    )
);
const LibraryFineSetup = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-setup/finesetup/finesetup/page'
    )
);
const BookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/book-details/page'
    )
);
const EditBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/edit-book-details/page'
    )
);
const EditShelfDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/edit-shelf-details/page'
    )
);
const LibraryGeneralDetailsAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/general-details/page'
    )
);
const LayoutBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/layout'
    )
);
const LibrarySpecificDetailsAdd = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/book-details/register-new-book/specific-details/page'
    )
);
const LendBook = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/lend-book/lend-book/page'
    )
);
const LendBookLend = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/lend-book/lend/page'
    )
);
const ReturnReIssueBooks = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/library-activities/return-reissue-books/page'
    )
);
const LostBookMember = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details-add/member/page'
    )
);
const LostBookOrganization = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details-add/organization/page'
    )
);
const LostBookDetails = lazy(
  () =>
    import(
      '../../modules/admin/sidebar-activities/library/lost-book-details/lost-book-details/page'
    )
);
const LibrarySlidebar = lazy(
  () => import('../../modules/admin/sidebar-activities/library/Slidebar')
);
export default function LibraryRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading">
            <LibrarySlidebar />
          </Suspense>
        }
      >
        <Route path="book-details">
          <Route
            index
            element={
              <Suspense fallback="Loading">
                <BookDetails />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense>
                <LayoutBookDetails />{' '}
              </Suspense>
            }
          >
            <Route
              path="general"
              element={
                <Suspense>
                  <LibraryGeneralDetailsAdd />
                </Suspense>
              }
            />
            <Route
              path="specific"
              element={
                <Suspense>
                  <LibrarySpecificDetailsAdd />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="edit-shelf-details"
            element={
              <Suspense>
                <EditShelfDetails />{' '}
              </Suspense>
            }
          />
          <Route
            path="edit-book-details"
            element={
              <Suspense>
                <EditBookDetails />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="library-activities">
          <Route path="lend-book">
            <Route
              index
              element={
                <Suspense>
                  <LendBook />{' '}
                </Suspense>
              }
            />
            <Route
              path="lend"
              element={
                <Suspense>
                  <LendBookLend />{' '}
                </Suspense>
              }
            />
          </Route>
          <Route
            path="return-reissue-book"
            element={
              <Suspense>
                <ReturnReIssueBooks />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="lost-book-details">
          <Route
            index
            element={
              <Suspense fallback="Loading">
                <LostBookDetails />
              </Suspense>
            }
          />
          <Route
            path="lost-book-organization"
            element={
              <Suspense>
                <LostBookOrganization />{' '}
              </Suspense>
            }
          />
          <Route
            path="lost-book-member"
            element={
              <Suspense>
                <LostBookMember />{' '}
              </Suspense>
            }
          />
        </Route>
        <Route path="library-member">
          <Route path="staff">
            <Route
              index
              element={
                <Suspense>
                  <LibraryMemberStaffMain />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense>
                  <LibraryRegisterStaff />
                </Suspense>
              }
            />
            <Route path=":staff" element={<LibrarySingleStaffLayout />}>
              <Route
                path="enroll-renew"
                element={<LibraryEnrollRenewHistoryStaff />}
              />
              <Route
                path="book-borrow-history"
                element={<BookBorrowHistoryStaff />}
              />
            </Route>
          </Route>
          <Route path="student">
            <Route
              index
              element={
                <Suspense>
                  <LibraryMemberStudentMain />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense>
                  <LibraryRegisterStudent />
                </Suspense>
              }
            />
            <Route path=":student" element={<LibrarySingleStudentLayout />}>
              <Route
                path="enroll-renew"
                element={<LibraryEnrollRenewHistory />}
              />
              <Route
                path="book-borrow-history"
                element={<BookBorrowHistory />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="library-setup">
          <Route path="book-category">
            <Route index element={<LibraryBookCategory />} />
            <Route path="add" element={<LibraryBookCategoryAdd />} />
            <Route path=":id" element={<LibraryBookCategoryEdit />} />
          </Route>
          <Route path="book-sub-category">
            <Route index element={<LibraryBookSubCatagory />} />
            <Route path=":id" element={<LibraryBookSubCategoryEdit />} />
          </Route>
          <Route path="book-issue-rule">
            <Route index element={<LibraryBookIssueRule />} />
            <Route path=":id" element={<LibraryBookIssueRuleEdit />} />
          </Route>
          <Route path="fine-setup">
            <Route index element={<LibraryFineSetup />} />
            <Route path=":id" element={<LibraryFineSetupEdit />} />
          </Route>
        </Route>
        <Route path="library-book-report">
          <Route path="book-report" element={<LibraryBookReport />} />{' '}
          <Route
            path="book-transaction-report"
            element={<LibraryBookTransactionReport />}
          />
          <Route path="library-day-log" element={<LibraryDayLog />} />{' '}
          <Route
            path="book-entry-report"
            element={<LibraryBookEntryReport />}
          />
        </Route>
        <Route path="library-payment-report">
          <Route path="summary" element={<LibraryFineSummary />} />
          <Route path="statement" element={<LibraryFineStatement />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div className="text-primary-grey-700 w-full mt-12 text-xl font-semibold text-center">
            Page not found-{location.pathname.replace('/', ' ')}
          </div>
        }
      />
    </Routes>
  );
}
