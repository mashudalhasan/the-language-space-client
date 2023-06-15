import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();

  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const status = form.status.value;
    const image = form.image.value;
    const instructorImage = form.instructorImage.value;

    const newClass = {
      instructor_name: instructorName,
      instructor_email: email,
      class_name: name,
      available_seats: quantity,
      price,
      status,
      class_image: image,
      instructor_image: instructorImage,
    };
    console.log(newClass);

    fetch("https://the-language-space-server.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-3/4">
      <Helmet>
        <title>The Language Space | Add Class</title>
      </Helmet>

      {/* content */}

      <div className="bg-base-100 p-8 rounded-md shadow-md">
        <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl mb-5">
          Add Class
        </h2>
        <form onSubmit={handleAddClass}>
          {/* form seller name and email row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="instructorName"
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="Enter seller name"
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
          </div>
          {/* form name and quantity row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Toy name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter available seats"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and status row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <label>
                <input
                  type="text"
                  name="status"
                  readOnly
                  defaultValue={"Pending"}
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
          </div>
          {/* form class image and instructor image row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Instructor Image</span>
              </label>
              <label>
                <input
                  type="text"
                  name="instructorImage"
                  readOnly
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full text-gray-500 cursor-not-allowed"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-green-100 py-3 px-5 text-base text-green-500 font-semibold transition active:bg-green-200"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
