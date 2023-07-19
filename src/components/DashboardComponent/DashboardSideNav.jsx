import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DashSideNav = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {user?.role === 'houseOwner' ? (
        <>
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
        </>
      ) : user?.role === 'houseRenter' ? (
        <Link
          to="/dashboard/myBookings"
          className="px-3 py-2 block rounded bg-gray-100 text-gray-800 text-semibold my-2"
        >
          My Bookings
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DashSideNav;
