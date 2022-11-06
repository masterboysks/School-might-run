import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import staffAPI from '../../../../../../api/admin/dashboard/staff/staffAPI';
import StaffGeneralDetailsView from '../../../../../../contex/admin/staff/StaffGeneralDetailsView';
const pages = [
  { name: 'Staff' },
  {
    name: 'Staff Information',
    href: '/admin/dashboard/staff/staff-information',
  },
  {
    name: 'View',
  },
];
export default function ViewStaff() {
  const { id } = useParams();
  const generalDetails = useContext(StaffGeneralDetailsView);
  const data = generalDetails.data?.personal;
  useEffect(() => {
    (async () => {
      try {
        const personal = await staffAPI.personalGet(id);
        const address = await staffAPI.addressGet(id);
        const office = await staffAPI.officialGet(id);
        generalDetails.setData({
          personal: personal?.data?.data,
          address: address?.data?.data,
          office: office?.data?.data,
        });
      } catch (e) {
        console.log(e);
      }
    })();
    return generalDetails.setData({});
  }, []);

  return (
    <div className="my-6">
      <div className="flex gap-6">
        <div className="rounded-full overflow-hidden object-cover h-24 w-24 border">
          <img src={data?.profile_picture} alt={data?.first_name} />
        </div>
        <div className="">
          <div className="text-lg text-primary-grey-700 font-medium tracking-wide ">
            <span className="capitalize">{data?.first_name}</span>
            {'  '}
            {data?.last_name}
          </div>
          <div className="">{data?.email}</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
