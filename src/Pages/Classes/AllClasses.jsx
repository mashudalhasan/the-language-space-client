import { Link } from "react-router-dom";
import { FaChair, FaDollarSign, FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllClasses = ({ item }) => {
  const { class_name, class_image, instructor_name, available_seats, price } =
    item;
  const { user } = useContext(AuthContext);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Enrolled",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login for Enrollment!",
        showDenyButton: true,
        denyButtonText: "Cancel",
        showConfirmButton: false,
        footer:
          '<a href="/login" class="text-red-500">Go for <span class="font-semibold underline">Login</span></a>',
      });
    }
  };

  return (
    <div className="block rounded-lg p-4 shadow-md">
      <img
        alt="Class"
        src={class_image}
        className="h-96 w-full rounded-md object-cover"
      />

      <div className="flex flex-col mt-2">
        <dl>
          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-bold text-xl">{class_name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex justify-between items-center  text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaUserAlt className="h-5 w-5 text-red-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Instructor</p>

              <p className="font-medium text-sm">{instructor_name}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaChair className="h-5 w-5 text-red-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Available Seats</p>

              <p className="font-medium text-base">{available_seats}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaDollarSign className="h-5 w-5 text-red-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Price</p>

              <p className="font-medium text-base">{price}</p>
            </div>
          </div>
        </div>
        <div className="flex-grow mt-8">
          <button
            onClick={() => handleAddToCart(item)}
            className="rounded-lg bg-red-500 px-8 py-3 transition hover:shadow-md active:bg-red-400 text-sm font-medium w-full mx-auto text-center text-white"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
