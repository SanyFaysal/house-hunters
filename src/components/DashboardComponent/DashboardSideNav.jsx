import { Link } from 'react-router-dom';

const DashSideNav = () => {
  return (
    <div>
      <Link
        to="/dashboard/myHouses"
        className="px-3 block py-2 rounded bg-gray-100 text-gray-800 text-semibold my-2"
      >
        My Houses
      </Link>

      <Link
        to="/dashboard/addHouse"
        className="px-3 py-2 block rounded bg-gray-100 text-gray-800 text-semibold my-2"
      >
        Add New House
      </Link>
    </div>
  );
};

export default DashSideNav;
