import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCards from "../../../Shared/ClassCards/ClassCards";
import "./PopularClasses.css";
import useClass from "../../../hooks/useClass";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const PopularClasses = () => {
  const [classes] = useClass();

  // Use reduce to create an object where the keys are class IDs and the values are the corresponding classes
  const uniqueClasses = classes.reduce((acc, classItem) => {
    if (!acc[classItem.instructor_name]) {
      acc[classItem.instructor_name] = classItem;
    }
    return acc;
  }, {});

  // Get an array of the unique classes
  const popularClasses = Object.values(uniqueClasses);

  // Sort the classes based on a specific criterion (e.g., number_of_students) in descending order
  popularClasses.sort((a, b) => b.number_of_students - a.number_of_students);

  return (
    <section className="py-14 lg:py-28 relative bg-shape">
      <div className="z-10">
        <SectionTitle
          heading={"Popular Classes"}
          subheading={"Explore your dream classes"}
        ></SectionTitle>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {popularClasses.map((item) => (
            <ClassCards key={item._id} item={item}></ClassCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
