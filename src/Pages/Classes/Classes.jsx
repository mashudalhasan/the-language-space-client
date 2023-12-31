import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AllClasses from "./AllClasses";
import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const Classes = () => {
  const [classes] = useClass();

  return (
    <div className="pt-16">
      <Helmet>
        <title>The Language Space | Classes</title>
      </Helmet>
      <CommonBanner title={"All Classes"}></CommonBanner>
      <div
        className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {classes.map((item) => (
          <AllClasses key={item._id} item={item}></AllClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
