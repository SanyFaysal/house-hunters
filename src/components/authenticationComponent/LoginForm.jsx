import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/user/userApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/user/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, isSuccess, isError, isLoading, error }] =
    useLoginMutation();

  const handleLogin = () => {
    if (email && password) {
      login({ email, password });
    }
  };
  console.log(data, isSuccess, isError, isLoading, error);
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'login' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'login' });
    }
    if (isSuccess && data) {
      console.log(data);
      localStorage.setItem('accessToken', data?.token);
      dispatch(fetchUser(data?.token));
      navigate('/dashboard');
    }
    if (isError) {
      toast.error(error?.data?.error, { id: 'login' });
    }
  }, [isSuccess, isError, isLoading, error, data, navigate, dispatch]);
  return (
    <div className=" grid grid-cols-1 gap-2 mt-8">
      <div>
        <label htmlFor="">Email</label>
        <br />
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          className="border px-3 py-2 w-full rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <br />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="*********"
          className="border px-3 py-2 w-full rounded-lg"
        />
      </div>
      <div>
        <br />
        <button
          type="submit"
          onClick={handleLogin}
          className="px-3 py-2 bg-gray-200 duration-500   text-gray-500 font-semibold w-full rounded-lg my-auto"
        >
          Login
        </button>
      </div>
      <div className="mt-3">
        <p className="text-center ">
          New to House Hunters ?{' '}
          <Link to="/register">
            <span className="text-blue-500 underline">
              Register an account{' '}
            </span>
          </Link>
        </p>

        <Link to="/" className="text-center mt-5 block underline">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
