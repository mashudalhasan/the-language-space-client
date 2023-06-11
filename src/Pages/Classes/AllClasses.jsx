import { FaChair, FaDollarSign, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { Grid } from "react-loader-spinner";
import useInstructor from "../../hooks/useInstructor";

const AllClasses = ({ item }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const {
    class_name,
    class_image,
    instructor_name,
    available_seats,
    price,
    _id,
  } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        itemId: _id,
        class_name,
        class_image,
        instructor_name,
        available_seats,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
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
        title: "Please Login for Enrollment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  if (isAdminLoading || isInstructorLoading) {
    // Render a loading state while checking the user's admin/instructor status
    return (
      <div className="h-screen flex justify-center items-center">
        <Grid
          height="80"
          width="80"
          color="#EF4444"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

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
            disabled={isAdmin || isInstructor}
            className={`rounded-lg bg-red-500 px-8 py-3 transition text-sm font-medium w-full mx-auto text-center text-white ${
              isAdmin || isInstructor
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-md active:bg-red-400"
            }`}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
