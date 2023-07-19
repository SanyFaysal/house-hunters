import { Link, Outlet, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import DashSideNav from '../components/DashboardComponent/DashboardSideNav';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import DashboardHeader from '../components/DashboardComponent/DashboardHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user?.email) {
      navigate('/login');
    }
  }, [token, dispatch, navigate, user]);

  return (
    <div className="grid grid-cols-6 gap-5  ">
      <div className="col-span-1   h-[100vh] bg-white px-4 sticky top-0">
        <div className="h-[65vh] ">
          {' '}
          <img
            src={logo}
            alt=""
            onClick={() => navigate('/')}
            className="  w-50 h-32 my-[-15px] my-5 mx-auto rounded"
          />
          <DashSideNav />
        </div>
        <div className="mt-[30vh] ">
          <Link
            to="/"
            className="block  px-3 py-2 bg-gray-100 text-gray-800 rounded text-semibold my-2"
          >
            <MdOutlineKeyboardArrowLeft className="inline" /> Go to Home
          </Link>
        </div>
      </div>
      <div className="col-span-5 pr-4">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
