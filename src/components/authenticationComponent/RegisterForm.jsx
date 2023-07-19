import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../redux/user/userApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/user/userSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { data, isSuccess, isError, isLoading, error }] =
    useRegisterMutation();

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const password = e.target.password.value;
    const userData = { fullName, phoneNumber, email, role, password };
    register(userData);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'login' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'login' });
    }
    if (isSuccess && data) {
      localStorage.setItem('accessToken', data?.token);
      dispatch(fetchUser(data?.token));
      navigate('/dashboard');
    }
    if (isError) {
      toast.error(error?.data?.error, { id: 'login' });
    }
  }, [isSuccess, isError, isLoading, error, data, navigate, dispatch]);
  return (
    <>
      <form onSubmit={handleRegister} className=" grid grid-cols-3 gap-5">
        <div>
          <label htmlFor="">Full Name</label>
          <br />
          <input
            type="text"
            required
            name="fullName"
            placeholder="Enter your full name"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Role</label>
          <br />
          <select
            name="role"
            id=""
            required
            className="border px-3 py-2 w-full rounded-lg"
          >
            <option value="houseOwner">House Owner</option>
            <option value="houseRenter">House Renter</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <br />
          <input
            type="text"
            required
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your email"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <br />
          <input
            required
            name="password"
            type="text"
            placeholder="*********"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <br />
          <input
            type="submit"
            value="Register "
            className="px-3 py-2 bg-gray-200  duration-500   text-gray-500 font-semibold w-full rounded-lg my-auto"
          />
        </div>
      </form>
      <div className="mt-10">
        <p className="text-center ">
          ALready have an account?{' '}
          <Link to="/login">
            <span className="text-blue-500 underline">
              Login to your account{' '}
            </span>
          </Link>
        </p>
      </div>

      <Link to="/" className="text-center mt-5 block underline">
        Go to home
      </Link>
    </>
  );
};

export default RegisterForm;
