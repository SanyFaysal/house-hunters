import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full ">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img className="w-32 " src={logo} alt="log" />
          </div>
          <div>
            <ul className="flex items-center gap-5 my-1 font-medium">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button>
                  <Link to="/register">Register</Link>
                </button>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
