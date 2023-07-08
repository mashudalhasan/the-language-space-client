import "./MockupFeatures.css";
import mockupImg from "../../../assets/banner/Expert Teachers.svg";
import icon1 from "../../../assets/icons/icons8-learning-support-64.png";
import icon2 from "../../../assets/icons/icons8-youtube-live.svg";
import icon3 from "../../../assets/icons/icons8-headset-96.png";
import icon4 from "../../../assets/icons/icons8-guarantee-96.png";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const MockupFeatures = () => {
  return (
    <section className="overflow-hidden py-28 relative bg-shape">
      <div className="z-10" data-aos="fade-left" data-aos-duration="2000">
        <img src={mockupImg} alt="" className="lg:w-3/4 mx-auto" />
      </div>
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-4/5 mx-auto">
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={icon1} alt="" className="h-10 w-10" />
          <p className="text-center">
            Our expert teacher will guide you with One on One mentorship.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={icon2} alt="" className="h-10 w-10" />
          <p className="text-center">
            Learn with fun through live interactive classes.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={icon3} alt="" className="h-10 w-10" />
          <p className="text-center">
            24/7 support available for learning assistance.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={icon4} alt="" className="h-10 w-10" />
          <p className="text-center">Receive a certificate upon completion.</p>
        </div>
      </div>
    </section>
  );
};

export default MockupFeatures;
