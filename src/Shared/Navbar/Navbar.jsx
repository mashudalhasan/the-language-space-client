import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tippy";
import placeholder from "../../assets/others/Portrait_Placeholder_Square.png";
import "./Navbar.css";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          Dashboard
          <div className="badge bg-red-500 text-white border-none">
            {cart?.length || 0}
          </div>
        </Link>
      </li>
      {user && (
        <li>
          <button
            onClick={handleLogOut}
            className="bg-red-500 w-full rounded-md py-2 px-3 text-white font-semibold tracking-wide bg-btn"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label
            tabIndex={0}
            className="btn bg-transparent border-none lg:hidden text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="flex justify-start items-center gap-2 mb-2">
                <img src={logo} alt="" className="h-5" />
                <p className="normal-case tracking-tighter text-gray-500 font-semibold">
                  The Language Space
                </p>
              </div>
            </li>
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <div className="lg:flex justify-center items-center gap-2">
            <img src={logo} alt="" className="h-8 hidden lg:block" />
            <p className="normal-case text-sm lg:text-xl tracking-tighter font-bold text-red-500">
              The Language Space
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <span className="mr-2 lg:mr-4 border-4 rounded-full border-slate-100 transition hover:scale-110 hover:shadow-md">
            <Tooltip
              title={user?.displayName}
              position="bottom"
              trigger="mouseenter"
              theme="light"
              animation="perspective"
            >
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <img
                  src={placeholder}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              )}
            </Tooltip>
          </span>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 w-full rounded-md py-2 px-3 text-white font-semibold tracking-wide">
              Login
            </button>
          </Link>
        )}
        {/* Toggle button here */}
        <button className="btn btn-square bg-transparent hover:bg-transparent border-none">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
