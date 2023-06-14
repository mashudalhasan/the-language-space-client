import { Helmet } from "react-helmet-async";
import useEnrolled from "../../../hooks/useEnrolled";
import { Link } from "react-router-dom";

const Enrolled = () => {
  const [enrolled] = useEnrolled();
  console.log(enrolled);
  return (
    <div>
      <Helmet>
        <title>The Language Space | Enrolled</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Enrolled Classes
      </h2>

      <div>
        <div className="overflow-x-auto mt-14 rounded-md shadow-md">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr className="text-center">
                <th>Class Info</th>
                <th>Instructor Image</th>
                <th>Instructor Info</th>
                <th>Available Seats</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enrolled.map((enroll) => (
                <tr key={enroll._id} className="text-center">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={enroll?.class_image} alt="Class Image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{enroll?.class_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={enroll?.instructor_image}
                          alt="Instructor Image"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    {enroll?.instructor_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {enroll?.instructor_email}
                    </span>
                  </td>
                  <td>{enroll?.available_seats}</td>
                  <td>
                    <div className="badge badge-sm bg-green-100 text-green-600">
                      Enrolled
                    </div>
                  </td>
                  <td>
                    <Link to='/classes'>
                      <button className="btn btn-ghost btn-xs normal-case">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enrolled;
