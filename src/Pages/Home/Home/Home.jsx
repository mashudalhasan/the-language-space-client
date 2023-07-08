import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import Reviews from "../Reviews/Reviews";
import MockupFeatures from "../MockupFeatures/MockupFeatures";
import MottoBanner from "../MottoBanner/MottoBanner";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>The Language Space | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="-mt-12 relative">
        <MottoBanner></MottoBanner>
      </div>
      <div className="">
        <MockupFeatures></MockupFeatures>
      </div>
      <div className="">
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
      <div className="my-12">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
