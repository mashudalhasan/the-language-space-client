import { Helmet } from "react-helmet-async";
import useClass from "../../../hooks/useClass";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();
  const [classes] = useClass();
  const myClasses = classes.filter(
    (sort) => sort.instructor_email === user?.email
  );
  console.log(myClasses);
  return (
    <div>
      <Helmet>
        <title>The Language Space | My Class</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        My Classes
      </h2>

      {/* table content */}

      <div className="overflow-x-auto mt-14 rounded-md shadow-md">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="text-center">
              <th>Class Info</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClasses.map((item) => (
              <tr key={item._id} className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.class_image} alt="Class Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>{item?.number_of_students}</td>
                <td>
                  <div
                    className={`badge badge-sm ${
                      item?.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : item?.status === "Denied"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item?.status}
                  </div>
                </td>
                <td>{item?.feedback}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/dashboard/updateclass/${item._id}`}>
                      <FaEdit />
                    </Link>
                  </button>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
