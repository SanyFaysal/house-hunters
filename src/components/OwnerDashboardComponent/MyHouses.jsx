import { Link } from 'react-router-dom';
import PaginationPart from '../shared/PaginationPart';
import MyHouseTableRow from './MyHouseTableRow';
import { useGetHousesQuery } from '../../redux/house/houseApi';

const MyHouses = () => {
  const { data } = useGetHousesQuery();
  return (
    <div className="overflow-x-auto bg-white  my-2 rounded-lg">
      <div className="flex justify-between p-5">
        <div className="flex gap-4">
          <div>
            <label htmlFor="">Per page : </label>
            <select name="" id="" className="border rounded-lg px-2 ml-2">
              <option value="">5 </option>
              <option value="">10 </option>
              <option value="">15 </option>
            </select>
          </div>
        </div>
        <div>
          <Link
            to="/dashboard/addHouse"
            className="px-3 py-2 bg-blue-50 text-blue-500 rounded-lg"
          >
            Add New House
          </Link>
        </div>
      </div>
      <hr />
      <table className="table p-5">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Room size</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((house) => (
            <MyHouseTableRow key={house?._id} house={house} />
          ))}
        </tbody>
      </table>

      <div className=" flex justify-center border-t py-5">
        <PaginationPart />
      </div>
    </div>
  );
};

export default MyHouses;
