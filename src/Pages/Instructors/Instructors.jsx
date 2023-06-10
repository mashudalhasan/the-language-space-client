import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AllInstructors from "./AllInstructors";
import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";

const Instructors = () => {
  const [instructors] = useClass();

  return (
    <div>
      <Helmet>
        <title>The Language Space | Instructors</title>
      </Helmet>
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
