import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import universityBoardApi from '../../../../../../../api/admin/dashboard/admin/data-setup/universityBoardApi';
import { SearchBar } from '../../../../../../../components/common/fields';
import RefreshIcon from '@mui/icons-material/Refresh';
import RenderTable from './RenderTable';
import { useQuery } from '@tanstack/react-query';

export default function Table() {
  const { register, watch } = useForm();
  // const [data, setData] = useState([]);
  const { data, refetch, isFetching } = useQuery({
    queryFn: () => universityBoardApi.get(),
    queryKey: ['universityboardapiget'],
    select: (d) => d.data.data.data,
    // onSuccess: (d) =>  console.log(d),
    staleTime: 5 * 1000 * 60,
  });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await
  //       const datas = data?.data?.data;
  //       setData(datas?.data);
  //       // setData();
  //     } catch (e) {
  //       // console.warn(e);
  //     }
  //   })();
  // }, []);

  return (
    <div className="mt-11 lg:w-2/3 w-full">
      <div className="sm:flex sm:items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-72 relative max-w-full">
            <SearchBar register={register} name="search" />
          </div>
          <button className="" onClick={() => refetch()} disabled={isFetching}>
            <RefreshIcon />
          </button>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link
            to="/admin/dashboard/admin/data-setup/university-board/add"
            className="primary_btn"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      University/Board
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
      </div>
    </div>
  );
}
