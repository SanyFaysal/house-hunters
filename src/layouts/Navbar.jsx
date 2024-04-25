import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/user/userSlice";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(logOut());
  };
  return (
    <>
      <nav className="w-full h-16 fixed  backdrop-blur-lg z-10 ">
        <div className="h-full w-full ">
          <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
            <div>
              <img
                onClick={() => navigate("/")}
                className="w-32 "
                src={logo}
                alt="log"
              />
            </div>
            <div>
              <ul className="flex items-center gap-5 my-1 font-medium">
                <li>
                  <Link to="/Login">Wishlist</Link>
                </li>
                {user?.email && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )}
                {!user?.email ? (
                  <>
                    <li>
                      <button>
                        <Link to="/register">Register</Link>
                      </button>
                    </li>
                    <li>
                      <Link to="/Login">Login</Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
