import { Link } from "react-router-dom";
import classImg from "../../assets/banner/class.svg";

const InstructorCards = ({ instructor }) => {
  const {
    instructor_name,
    instructor_image,
    number_of_classes_taken_by_instructor,
  } = instructor;

  return (
    <div>
      <Link to="/instructors" className="group relative block bg-black rounded-lg">
        <img
          alt="Instructor"
          src={instructor_image}
          className="absolute inset-0 h-full w-full object-cover rounded-lg opacity-75 transition-opacity group-hover:opacity-40"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-green-500">
            Instructor
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {instructor_name}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center gap-5">
                <img src={classImg} alt="" className="w-10 h-10 text-green-500"/>
                <div className="text-white font-semibold">
                  <p>Number of Classes</p>
                  <p>{number_of_classes_taken_by_instructor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InstructorCards;
