import { GlobeAltIcon, PrinterIcon } from '@heroicons/react/20/solid';
import Search from '@mui/icons-material/SearchOutlined';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Input, Select } from '../../../../../../components/common/oldFields';
import RenderTable from './RenderTable';
const people = [
  {
    subject: 'Physics',
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 'Published',
    remark: 'pass',
    stdId: 556453127332,
    stdName: 'Saurav ',
  },
  {
    subject: 'Physics',
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 'Published',
    remark: 'pass',
    stdId: 5587667332,
    stdName: 'Saurav ',
  },
  {
    subject: 'Physics',
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 'Published',
    remark: 'pass',
    stdId: 556733256,
    stdName: 'Saurav ',
  },
  {
    subject: 'Physics',
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 'Published',
    remark: 'pass',
    stdId: 556733452,
    stdName: 'Saurav ',
  },
];
const subject = ['English', 'Maths', 'Nepali', 'Social', 'EHP', 'Science'];

export default function TableWrapper() {
  // Checkbox
  // const checkbox = useRef();
  // const [checked, setChecked] = useState(false);
  // const [indeterminate, setIndeterminate] = useState(false);
  // const [selectedPeople, setSelectedPeople] = useState([]);

  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedPeople.length > 0 && selectedPeople.length < people.length;
  //   setChecked(selectedPeople.length === people.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedPeople]);

  // function toggleAll() {
  //   setSelectedPeople(checked || indeterminate ? [] : people);
  //   setChecked(!checked && !indeterminate);
  //   setIndeterminate(false);
  // }
  // // pagination
  // const itemsOnPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentItems, setCurrentItems] = useState(
  //   people.slice(0, itemsOnPage)
  // );
  // const [indexOfLastItem, setIndexOfLastItem] = useState(
  //   currentPage * itemsOnPage
  // );
  // const [indexOfFirstItem, setIndexOfFirstItem] = useState(
  //   indexOfLastItem - itemsOnPage
  // );
  // const [message, setmessage] = useState('Showing 1 to 2 of 2 results');

  // const onNextPage = () => {
  //   setCurrentPage((curr) => curr + 1);
  // };

  // const onPreviousPage = () => {
  //   setCurrentPage((curr) => curr - 1);
  // };
  // useEffect(() => {
  //   setIndexOfLastItem(currentPage * itemsOnPage);
  // }, [currentPage]);
  // useEffect(() => {
  //   setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  // }, [indexOfLastItem]);
  // useEffect(() => {
  //   setmessage(
  //     `Showing ${indexOfFirstItem + 1} to ${
  //       people.length <= indexOfLastItem ? people.length : indexOfLastItem
  //     } of ${people.length}`
  //   );
  //   setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  // }, [indexOfFirstItem]);
  // //
  // const arrayGradingSystem = ['GPA', 'Percentage'];
  // const arrayResultStatus = ['kjdhf', 'jhgd'];
  // const arrayRemark = ['jhfgd', 'fdjkh'];
  // const [academicYear, setAcademicYear] = useState('');
  // const [examName, setExamName] = useState('');
  // const [gradingSystem, setGradingSystem] = useState('GPA');
  // const [resultStatus, setResultStatus] = useState('Select');
  // const [remark, setRemark] = useState('Select');
  // const [errorAcademicYear, setErrorAcademicYear] = useState(false);
  // const [errorExamName, setErrorExamName] = useState(false);
  // //
  // const handleSubmit = () => {
  //  // console.log({
  //  //   academicYear,
  //  //   examName,
  //   //   gradingSystem,
  //   //   resultStatus,
  //  //   remark,
  //   // });
  //   academicYear || setErrorAcademicYear(true);
  //   examName || setErrorExamName(true);
  // };
  return <>hlo</>;
}
{
  /* search */
}

{
  /* Table heading */
}

{
  /* <div className="w-52 grid items-center grid-cols-2 gap-3 mt-3 mb-6 ml-auto">
        <div className="text-primary-700 text-base font-semibold">
          Total Pass
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2">
          30
        </div>

        <div className="text-primary-700 text-base font-semibold">
          Total Fail
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2 ">
          0
        </div>
      </div> */
}
