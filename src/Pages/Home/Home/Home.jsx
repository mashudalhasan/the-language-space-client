import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="-mt-11">
        <PopularClasses></PopularClasses>
      </div>
      <div className="-mt-12">
        <PopularInstructors></PopularInstructors>
      </div>
    </div>
  );
};

export default Home;
