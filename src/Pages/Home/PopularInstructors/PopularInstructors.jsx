import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCards from "../../../Shared/InstructorCards/InstructorCards";
import "./PopularInstructors.css";
import useClass from "../../../hooks/useClass";

const PopularInstructors = () => {
  const [instructor] = useClass();
  const popular = instructor.filter((item) => item.category === "popular");

  return (
    <section className="bg-circle p-12">
      <div className="classes">
        <SectionTitle
          heading={"Top Instructors"}
          subheading={"Learn with the top instructors"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {popular.map((instructor) => (
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
