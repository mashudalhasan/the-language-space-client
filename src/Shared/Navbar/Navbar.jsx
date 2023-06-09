import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
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
    </>
  );
  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
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
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'>
          <button className="bg-red-500 w-full rounded-md py-2 px-3 text-white font-semibold tracking-wide">
            Login
          </button>
        </Link>
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
