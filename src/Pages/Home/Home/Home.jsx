import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>The Language Space | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="-mt-11">
        <PopularClasses></PopularClasses>
      </div>
      <div className="-mt-12">
        <PopularInstructors></PopularInstructors>
      </div>
      <div className="my-12">
        <ParallaxSection></ParallaxSection>
      </div>
      <div className="my-12">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
