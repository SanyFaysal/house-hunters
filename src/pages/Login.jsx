import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import LoginForm from '../components/authenticationComponent/LoginForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user?.email) {
      navigate('/');
    }
  }, [user, navigate]);
  return (
    <>
      <div className=" flex w-full justify-center h-[100vh]  items-center">
        <div className="w-3/4  h-[70vh] grid grid-cols-2 rounded-lg bg-white  ">
          <div className="flex justify-center items-center border-r ">
            <img src={logo} alt="" className=" " />
          </div>
          <div className=" p-10">
            <h1 className="text-2xl mb-4">Login to your Account</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
