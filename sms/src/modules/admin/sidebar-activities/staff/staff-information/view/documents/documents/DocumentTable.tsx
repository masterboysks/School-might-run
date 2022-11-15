import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import staffAPI from '../../../../../../../../api/admin/dashboard/staff/staffAPI';
import Pagination from '../../../../../../../../components/common/navigation/Pagination';
import RenderTable from './RenderTable';

const people = [
  {
    document: 'slc',
  },
  {
    document: '+2',
  },
];

export default function DocumentTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const data = await staffAPI.getDocument(id, page);
        const datas = data?.data?.data;
        setData(datas?.data);
        setPagination(datas?.pagination);
        // console.log(datas);
      } catch (e) {
        // console.warn(e);
      }
    })();
  }, [page]);
  return (
    <div className="mt-11">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Available documents
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link to="add" className="primary_btn">
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 lg:w-2/3 w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Document name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={data} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination pagination={pagination} setPage={setPage} />
      </div>
    </div>
  );
}
