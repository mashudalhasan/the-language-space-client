import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
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
          <div>
            <h2 className="text-center text-7xl font-bold">Content</h2>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full text-base-content bg-white border-r">
            {/* Sidebar content here */}
            <Link to="/">
              <div className="flex justify-start items-center gap-2 ">
                <img src={logo} alt="" className="h-8" />
                <p className="normal-case text-sm lg:text-xl tracking-tighter font-bold text-red-500">
                  The Language Space
                </p>
              </div>
            </Link>
            <div className="mt-6 ml-4">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </div>
          </ul>

          <div className="sticky inset-x-0 bottom-0 border-t border-r">
            <details className="relative group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center gap-2 p-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-xs">
                      <strong className="block font-medium">
                        Eric Frusciante
                      </strong>

                      <span> eric@frusciante.com </span>
                    </p>
                  </div>

                  <span className="ml-10 transition duration-300 group-open:-rotate-2 rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </summary>

              <ul className="absolute bottom-full left-0 mt-2 space-y-1 px-4">
                <li>
                  <button className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700">
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
