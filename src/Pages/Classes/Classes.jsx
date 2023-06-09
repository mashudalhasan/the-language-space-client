import { useEffect, useState } from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AllClasses from "./AllClasses";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <CommonBanner title={"All Classes"}></CommonBanner>
      <div className="w-11/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((item) => (
          <AllClasses key={item._id} item={item}></AllClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
