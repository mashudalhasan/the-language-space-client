import { Helmet } from "react-helmet-async";
import useClass from "../../../hooks/useClass";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const MyClass = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useClass();
  const myClasses = classes.filter(
    (sort) => sort.instructor_email === user?.email
  );
  console.log(myClasses);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://the-language-space-server.vercel.app/classes/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Course has been deleted.", "success");
              setClasses((prevClasses) =>
                prevClasses.filter((classItem) => classItem._id !== item._id)
              );
            }
          });
      }
    });
  };

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
                    className={`badge badge-sm h-full ${
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
                <td>
                  {item?.feedback ? (
                    <div className="badge badge-md bg-red-100 text-red-500 h-full rounded">
                      {item?.feedback}
                    </div>
                  ) : (
                    <div
                      className={`flex justify-center items-center ${
                        item?.status === "Pending" ? "hidden" : ""
                      }`}
                    >
                      <FaCheckCircle className="text-green-500 text-base" />
                    </div>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/dashboard/updateclass/${item._id}`}>
                      <FaEdit />
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
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
