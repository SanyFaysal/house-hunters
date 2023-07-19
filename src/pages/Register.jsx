import RegisterForm from '../components/authenticationComponent/RegisterForm';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Register = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    navigate('/');
  }, [user, navigate]);
  return (
    <div className=" flex w-full justify-center h-[100vh]  items-center">
      <div className="w-3/4 h-[70vh]  rounded-lg p-10 bg-white  ">
        <img
          src={logo}
          alt=""
          className="h-[25vh] mt-[-50px] mb-[-20px] mx-auto "
        />
        <div className="mt-[-50px]">
          <h1 className="text-2xl mb-4">Register an Account</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
