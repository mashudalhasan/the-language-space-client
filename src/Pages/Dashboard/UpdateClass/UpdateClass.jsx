import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const { user } = useAuth();
  const uniqueClass = useLoaderData();

  const { _id, class_name, class_image, price, available_seats } = uniqueClass;

  const handleUpdateClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const image = form.image.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const updatedClass = {
      instructor_name: instructorName,
      instructor_email: email,
      class_image: image,
      price,
      available_seats: quantity,
    };
    console.log(updatedClass);

    // send data to the server
    fetch(`http://localhost:5000/classes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>The Language Space | Update Class</title>
      </Helmet>

      {/* form content */}

      <div className="bg-base-100 p-8 rounded-md shadow-md">
        <h2 className="text-xl text-center font-semibold tracking-tighter text-gray-900 sm:text-3xl mb-5">
          Update Class: <span className="text-gray-500">{class_name}</span>
        </h2>
        <form onSubmit={handleUpdateClass}>
          {/* form seller name and email row */}
          <div className="md:flex gap-6 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="instructorName"
                  disabled
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
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
                  disabled
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and quantity row */}
          <div className="md:flex gap-6 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={available_seats}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form description row */}
          <div className="md:flex gap-6 mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Class PhotoURL</span>
              </label>
              <label>
                <input
                  type="text"
                  name="image"
                  defaultValue={class_image}
                  className="input input-bordered w-full text-gray-500"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-info py-3 px-5 text-base text-white font-semibold transition hover:bg-opacity-90"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
