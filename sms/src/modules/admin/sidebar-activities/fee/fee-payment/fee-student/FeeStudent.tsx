import profile from './profile.png';
import { useParams } from 'react-router-dom';
import Table from './Table';
import Form from './Form';
import Breadnav from '../../../../../../components/common/navigation/Breadnav';

export default function FeeStudent() {
  const { student } = useParams();
  const pages = [
    { name: 'Fee' },
    {
      name: 'Fee payment',
      href: 'admin/dashboard/fee/fee-payment/',
    },
    {
      name: `${
        student.split('-')[0][0].toUpperCase() +
        student.split('-')[0].substring(1)
      }'s logsheet`,
    },
  ];
  return (
    <>
      <Breadnav pages={pages} />

      <div className=" my-6">
        <div className="w-fit my-3 ml-auto">
          <div className="primary_btn">Fee statement</div>
        </div>
        <div className="md:flex ring-black ring-opacity-5 ring-1 form-solid p-4 rounded-md shadow">
          <img
            src={profile}
            alt="Ranjit sherstha"
            className="md:mr-2 h-fit mx-auto rounded"
          />
          <div className="flex-1">
            <div className="md:grid-cols-2 gap-x-5 gap-y-2 xl:grid-cols-3 grid grid-cols-1">
              <span className="md:text-start col-span-full text-primary-grey-700 text-lg font-medium text-center">
                Ranjit Sherstha
              </span>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Student ID:</span>
                <span className="text-primary-grey-700">1234</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Class/semester:</span>
                <span className="text-primary-grey-700">Nursery</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Guardain name:</span>
                <span className="text-primary-grey-700">Shyam sherstha</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Addmission date:</span>
                <span className="text-primary-grey-700">2022/02/01</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Faculty:</span>
                <span className="text-primary-grey-700"></span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Gurdain number:</span>
                <span className="text-primary-grey-700">9800223300</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Status:</span>
                <span className="text-primary-grey-700">Active</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Sub-faculty:</span>
                <span className="text-primary-grey-700"></span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Relation:</span>
                <span className="text-primary-grey-700">Brother</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Student number:</span>
                <span className="text-primary-grey-700"></span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600">Section:</span>
                <span className="text-primary-grey-700">B</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
                <span className="text-primary-grey-600 ">Mail:</span>
                <span className="text-primary-grey-700">abc@hotmail.com</span>
              </div>
              <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 md:border-none">
                <span className="text-primary-grey-600">Student number:</span>
                <span className="text-primary-grey-700">9818756958</span>
              </div>

              <div className=" flex justify-between py-2">
                <span className="text-primary-grey-600">Roll no:</span>
                <span className="text-primary-grey-700">22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table />
      <Form />
    </>
  );
}
