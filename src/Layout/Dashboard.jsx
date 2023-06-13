import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet-async";
import cartIcon from "../assets/dashboard/cart.svg";
import bookingIcon from "../assets/dashboard/booking.svg";
import walletIcon from "../assets/dashboard/wallet.svg";
import homeIcon from "../assets/dashboard/home.svg";
import instructorIcon from "../assets/dashboard/people.svg";
import courseIcon from "../assets/dashboard/online-courses.svg";
import classesIcon from "../assets/dashboard/chalkboard.svg";
import usersIcon from "../assets/dashboard/list-users.svg";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const [cart] = useCart();
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>The Language Space | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start lg:items-center justify-center mt-2 ml-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-none drawer-button lg:hidden"
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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full text-base-content bg-white border-r">
            {/* Sidebar content here */}

            <Link to="/">
              <div className="flex justify-start items-center gap-2 ml-4">
                <img src={logo} alt="" className="h-8" />
                <p className="normal-case text-sm lg:text-xl tracking-tighter font-bold text-red-500">
                  The Language Space
                </p>
              </div>
            </Link>

            <div className="mt-6 ml-2 space-y-2">
              {/* admin menu */}

              {isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/manageclasses"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={classesIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">
                        Manage Classes
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageusers"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={usersIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">
                        Manage Users
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* instructor menu */}

              {isInstructor && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/addclass"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={classesIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">Add Class</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myclass"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={usersIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">My Class</span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* student menu */}

              {(isStudent || user) && !isAdmin && !isInstructor && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/mycart"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={cartIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">My Cart</span>
                      <div className="badge bg-red-500 text-white border-none">
                        {cart?.length || 0}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/enrolled"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={bookingIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">Enrolled</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/historypay"
                      className={({ isActive }) =>
                        isActive ? "bg-base-200 font-semibold" : ""
                      }
                    >
                      <img
                        src={walletIcon}
                        alt=""
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                      <span className="text-base text-gray-700">
                        Payment History
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              <div className="divider"></div>

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-base-200 font-semibold" : ""
                  }
                >
                  <img
                    src={homeIcon}
                    alt=""
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-base text-gray-700">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "bg-base-200 font-semibold" : ""
                  }
                >
                  <img
                    src={instructorIcon}
                    alt=""
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-base text-gray-700">Instructors</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "bg-base-200 font-semibold" : ""
                  }
                >
                  <img
                    src={courseIcon}
                    alt=""
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-base text-gray-700">Courses</span>
                </NavLink>
              </li>

              <div className="divider"></div>

              <li>
                <details>
                  <summary className="flex cursor-pointer items-center justify-between pl-0 pr-4 py-0 text-gray-500 hover:bg-base-100 hover:text-gray-700">
                    <div className="flex items-center gap-2 p-4">
                      <img
                        alt="Man"
                        src={user?.photoURL}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-xs">
                          <strong className="block font-medium">
                            {user?.displayName}
                          </strong>

                          <span> {user?.email} </span>
                        </p>
                      </div>
                    </div>
                  </summary>

                  <ul className="p-2">
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
