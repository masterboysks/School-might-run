import Arrow from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const Slidebar = () => {
  const location = useLocation().pathname;

  let nav;
  const sidebar = () => {
    nav = document.getElementById('sidebar')?.classList;
    nav.contains('hidden') ? nav.remove('hidden') : nav.add('hidden');
    slidebar();
  };

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
        className="min-w-[216px]  mt-[2px] box-border text-primary-grey-600 border-r-[1px] z-[99] border-r-primary-grey-100-grey-200 bg-primary-grey-100 fixed top-16 md:static   ml-[72px] md:ml-0 h-[94vh] pb-20 overflow-y-auto hidden lg:inline "
        id="slidebar"
      >
        <div className="w-full">
          <ul className="pt-9 mx-2">
            <Link to="/teacher/dashboard/exam/exam-marks" onClick={sidebar}>
              <li
                className={` flex  pr-3    p-1 mt-2 mb-3 cursor-pointer rounded ${
                  location.includes('/teacher/dashboard/exam/exam-marks')
                    ? ' bg-primary-grey-200  text-primary-grey-700 '
                    : ' hover:bg-primary-grey-200 text-primary-grey-600 '
                } text-sm`}
              >
                <div className="devList text-primary-grey-300">
                  <Arrow fontSize="inherit" />
                </div>
                Exam marks
              </li>
            </Link>
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

export default Slidebar;
