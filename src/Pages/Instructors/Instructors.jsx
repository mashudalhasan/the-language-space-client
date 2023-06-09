import { useEffect, useState } from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AllInstructors from "./AllInstructors";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div>
      <CommonBanner title={"All Instructors"}></CommonBanner>
      <div className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map((instructor) => (
          <AllInstructors
            key={instructor._id}
            instructor={instructor}
          ></AllInstructors>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
