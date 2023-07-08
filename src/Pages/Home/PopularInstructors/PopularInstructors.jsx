import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCards from "../../../Shared/InstructorCards/InstructorCards";
import "./PopularInstructors.css";
import useClass from "../../../hooks/useClass";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const PopularInstructors = () => {
  const [instructors] = useClass();

  // Use reduce to create an object where the keys are instructor names and the values are the corresponding instructors
  const uniqueInstructors = instructors.reduce((acc, instructor) => {
    if (!acc[instructor.instructor_name]) {
      acc[instructor.instructor_name] = instructor;
    }
    return acc;
  }, {});

  // Get an array of the unique instructors
  const popularInstructors = Object.values(uniqueInstructors);

  // Sort the instructors based on the number_of_students in descending order
  popularInstructors.sort(
    (a, b) => b.number_of_students - a.number_of_students
  );

  return (
    <section className=" p-12 relative bg-shape">
      <div className="z-10">
        <SectionTitle
          heading={"Top Instructors"}
          subheading={"Learn with the top instructors"}
        ></SectionTitle>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {popularInstructors.map((instructor) => (
            <InstructorCards
              key={instructor._id}
              instructor={instructor}
            ></InstructorCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
