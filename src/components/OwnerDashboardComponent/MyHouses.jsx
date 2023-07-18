import PaginationPart from '../shared/PaginationPart';
import MyHouseTableRow from './MyHouseTableRow';

const MyHouses = () => {
  return (
    <div className="overflow-x-auto bg-white  my-2 rounded-lg">
      <div className="flex justify-between p-5">
        <div>
          <label htmlFor="">Total :120 </label>
        </div>
        <div>
          <label htmlFor="">Per page : </label>
          <select name="" id="" className="border rounded-lg px-2 ml-2">
            <option value="">5 </option>
            <option value="">10 </option>
            <option value="">15 </option>
          </select>
        </div>
      </div>
      <hr />
      <table className="table p-5">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Room size</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <MyHouseTableRow />
          <MyHouseTableRow />
          <MyHouseTableRow />
          <MyHouseTableRow />
          <MyHouseTableRow />
          <MyHouseTableRow />
          <MyHouseTableRow />
        </tbody>
      </table>

      <div className=" flex justify-center border-t py-5">
        <PaginationPart />
      </div>
    </div>
  );
};

export default MyHouses;
