import { BsPersonCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const DashboardHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className=" bg-white p-5 mt-2 rounded-lg flex sticky top-0 z-10 justify-between border-b items-center">
      <h1 className="text-xl font-semibold"><span className=' mr-2 text-blue-500'>{user?.role==='houseRenter'?'House Renter':"House Owner"}</span>Dashboard</h1>
      <p className="flex justify-end gap-2">
        <span className="font-semibold ">{user?.fullName}</span>
        <BsPersonCircle className="text-2xl text-gray-400" />
      </p>
    </div>
  );
};

export default DashboardHeader;
