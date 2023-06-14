import { FaChalkboardTeacher, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllInstructors = ({ instructor }) => {
  const {
    instructor_name,
    instructor_image,
    instructor_email,
    number_of_classes_taken_by_instructor,
  } = instructor;

  return (
    <div className="block rounded-lg p-4 shadow-md">
      <img
        alt="Instructor"
        src={instructor_image}
        className="h-96 w-full rounded-md object-cover"
      />

      <div className="flex flex-col mt-2">
        <dl>
          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-bold text-xl">{instructor_name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaUserAlt className="h-5 w-5 text-green-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Email</p>

              <p className="font-medium text-sm">{instructor_email}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaChalkboardTeacher className="h-5 w-5 text-green-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">No of Class</p>

              <p className="font-medium text-base">
                {number_of_classes_taken_by_instructor}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow mt-8">
          <Link to="/">
            <button className="rounded-lg bg-green-500 px-8 py-3 transition hover:shadow-md active:bg-red-400 text-sm font-medium w-full mx-auto text-center text-white">
              See Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllInstructors;
