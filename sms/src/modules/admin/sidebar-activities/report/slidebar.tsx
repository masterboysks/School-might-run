import Arrow from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const ReportSlidebar = () => {
  const [attendanceReport, setAttendanceReport] = useState(false);
  const [dropAttendanceReport, setDropAttendanceReport] = useState(true);

  const [transportReport, setTransportReport] = useState(false);
  const [dropTransportReport, setDropTransportReport] = useState(true);
  const location = useLocation().pathname;
  let nav;
  const sidebar = () => {
    nav = document.getElementById('sidebar')?.classList;
    nav.contains('hidden') ? nav.remove('hidden') : nav.add('hidden');
    slidebar();
  };
  const links = [
    {
      name: 'Student attendance report',
      path: 'attendance-report/student-attendance-report',
    },
    {
      name: 'Staff attendance report',
      path: 'attendance-report/staff-attendance-report',
    },
  ];
  const arrayTeansportLiks = [
    {
      name: 'Student wise report',
      path: 'transportation-report/student-wise-report',
    },
    {
      name: 'Location wise report',
      path: 'transportation-report/location-wise-report',
    },
  ];
  useEffect(() => {
    location.includes('admin/dashboard/report/attendance-report')
      ? setAttendanceReport(true)
      : setAttendanceReport(false);
    location.includes('admin/dashboard/report/transportation-report')
      ? setTransportReport(true)
      : setTransportReport(false);
  }, [location]);

  const slidebar = () => {
    nav = document.getElementById('sidebar')?.classList;
    let overlay = document.getElementById('overlay')?.classList;
    const slidebar = document.getElementById('slidebar')?.classList;

    slidebar &&
      (slidebar.contains('hidden') && !nav.contains('hidden')
        ? slidebar.remove('hidden')
        : slidebar.add('hidden'));
    overlay &&
      (!slidebar?.contains('hidden')
        ? overlay.remove('hidden')
        : overlay.add('hidden'));
  };
  return (
    <>
      <div
        className="w-[216px]  mt-[2px] box-border text-primary-grey-600 border-r-[1px] z-[99] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 h-[94vh] pb-20 overflow-y-auto hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <li
              id="attendanceReport"
              onClick={() => {
                setDropAttendanceReport((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
              ${
                attendanceReport
                  ? 'text-primary-grey-700'
                  : 'text-primary-grey-600'
              } 
                   ${
                     attendanceReport && !dropAttendanceReport
                       ? 'bg-primary-grey-200 '
                       : 'text-primary-grey-600'
                   }text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  dropAttendanceReport ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Attendance report</div>
            </li>
            <ul
              className={`${
                dropAttendanceReport ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {links.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6   pr-3   mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <Link to="exam-report" onClick={sidebar}>
              <li
                className={` flex p-1   pr-3    mt-2 mb-3 cursor-pointer rounded  ${
                  location.includes('/report/exam-report')
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Exam report
              </li>
            </Link>
            <Link to="fee-report" onClick={sidebar}>
              <li
                className={` flex p-1  pr-3    mt-2 mb-3 cursor-pointer rounded ${
                  location.includes('/report/fee-report')
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Fee report
              </li>
            </Link>
            <Link to="topper-report" onClick={sidebar}>
              <li
                className={` flex p-1   pr-3   mt-2 mb-3 cursor-pointer rounded ${
                  location.includes('/report/topper-report')
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Topper report
              </li>
            </Link>
            <li
              id="transportReport"
              onClick={() => {
                setDropTransportReport((c) => !c);
              }}
              className={`flex   pr-3    p-1 mt-2 mb-3 cursor-pointer rounded hover:bg-primary-grey-200 
              ${
                transportReport
                  ? 'text-primary-grey-700'
                  : 'text-primary-grey-600'
              } 
                   ${
                     transportReport && !dropTransportReport
                       ? 'bg-primary-grey-200 '
                       : 'text-primary-grey-600'
                   }text-sm`}
            >
              <div
                id="arrow"
                className={`devList text-black  transition duration-100 ease-in text-sm ${
                  dropTransportReport ? 'rotate-90' : ''
                }  `}
              >
                <Arrow fontSize="inherit" />
              </div>
              <div className=" text-sm">Transportation report</div>
            </li>
            <ul
              className={`${
                dropTransportReport ? '' : 'hidden'
              } transition duration-700 ease-in`}
              id="dropdown"
            >
              {arrayTeansportLiks.map((curr) => {
                return (
                  <Link to={curr.path} key={curr.name} onClick={sidebar}>
                    <li
                      className={`pl-6   pr-3   mx-2 mt-2 mb-3 rounded py-[3px] text-sm ${
                        location.includes(curr.path)
                          ? 'bg-primary-grey-200 text-primary-grey-700'
                          : 'hover:bg-primary-grey-200 text-primary-grey-600'
                      }`}
                    >
                      {curr.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
      <div className=" sm:ml-[72px] box-border md:ml-0 sm:pt-2 md:w-full  md:min-w-0 flex-1">
        <div className="top-28 sm:mt-9 md:block sm:static -z-10 absolute left-0 w-full">
          <div className="-z-10 sm:mt-9 w-11/12 mx-auto text-sm">
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className="lg:hidden overscroll-none opacity-95 fixed top-0  z-[99999] left-[288px] hidden w-full h-screen bg-transparent"
        id="overlay"
        onClick={sidebar}
      />
    </>
  );
};

export default ReportSlidebar;
