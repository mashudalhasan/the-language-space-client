import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCards from "../../../Shared/InstructorCards/InstructorCards";
import './PopularInstructors.css';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (instructor) => instructor.category === "popular"
        );
        setInstructors(popularInstructors);
      });
  }, []);
  return (
    <section className="bg-circle pt-12">
      <div className="classes">
        <SectionTitle
          heading={"Top Instructors"}
          subheading={"Learn with the top instructors"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {instructors.map((instructor) => (
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
