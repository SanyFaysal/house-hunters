import { BsPersonCircle } from 'react-icons/bs';

const DashboardHeader = () => {
  return (
    <div className=" bg-white p-5 mt-2 rounded-lg flex sticky top-0 z-10 justify-between border-b items-center">
      <h1 className="text-xl font-semibold">House Owner Dashboard</h1>
      <p className="flex justify-end gap-2">
        <span className="font-semibold">Abu Sani Faysal</span>
        <BsPersonCircle className="text-2xl text-gray-400" />
      </p>
    </div>
  );
};

export default DashboardHeader;
