import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [showModal, setShowModal] = useState(null);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    console.log("res from manage classes", res);
    return res.data;
  });

  const handleMakeApprove = (singleClass) => {
    fetch(`http://localhost:5000/classes/approve/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass.class_name} is Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeDeny = (singleClass) => {
    fetch(`http://localhost:5000/classes/deny/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass.class_name} is Denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>The Language Space | Manage Classes</title>
      </Helmet>
      <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl">
        Manage Classes
      </h2>

      <div className="overflow-x-auto mt-14 rounded-md shadow-md">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr className="text-center">
              <th>Class Info</th>
              <th>Instructor Info</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((singleClass) => (
              <tr key={singleClass._id} className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.class_image} alt="Class Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{singleClass.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {singleClass.instructor_name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {singleClass.instructor_email}
                  </span>
                </td>
                <td>{singleClass.available_seats}</td>
                <td>${singleClass.price}</td>
                <td>
                  <div
                    className={`badge badge-sm ${
                      singleClass.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : singleClass.status === "Denied"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {singleClass.status || "Pending"}
                  </div>
                </td>
                <td>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => handleMakeApprove(singleClass)}
                      disabled={
                        singleClass.status === "Approved" ? true : false
                      }
                      className="btn btn-ghost btn-xs normal-case"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleMakeDeny(singleClass)}
                      disabled={singleClass.status === "Denied" ? true : false}
                      className="btn btn-ghost btn-xs normal-case"
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => setShowModal(singleClass._id)}
                      className="btn btn-ghost btn-xs normal-case"
                    >
                      Send Feedback
                    </button>
                  </div>
                  {showModal && (
                    <Feedback
                      singleClass={showModal}
                      setShowModal={setShowModal}
                      refetch={refetch}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
