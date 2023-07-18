import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className=" grid grid-cols-1 gap-2 mt-8">
      <div>
        <label htmlFor="">Email/Phone number</label>
        <br />
        <input
          required
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
          className="px-3 py-2 bg-gray-200 duration-500   text-gray-500 font-semibold w-full rounded-lg my-auto"
        />
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
      </div>
    </div>
  );
};

export default LoginForm;
