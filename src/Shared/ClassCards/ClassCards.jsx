import {
  FaChair,
  FaDollarSign,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

// TODO: have to use dynamic image
const ClassCards = ({ item }) => {
  const { class_name, class_image, instructor_name, available_seats, price } =
    item;

  return (
    <div className="relative block overflow-hidden rounded-lg shadow-md">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-green-500"></span>
      <div>
        <img src={class_image} alt="" className="rounded-t-lg h-96 w-full object-cover" />
      </div>
      <a className="block bg-white p-4 sm:p-6 lg:p-8" href="">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {class_name}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium">Instructor:</span> {instructor_name}
          </p>
        </div>
        <div className="mt-6 flex justify-between items-center text-xs">
          <div className="flex items-center gap-3">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaChair className="h-4 w-4 text-green-500" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Available Seats</p>

                <p className="font-medium">{available_seats}</p>
              </div>
            </div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaDollarSign className="h-4 w-4 text-green-500" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Price</p>

                <p className="font-medium">{price}</p>
              </div>
            </div>
          </div>
          <div>
            <FaRegArrowAltCircleRight className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ClassCards;
