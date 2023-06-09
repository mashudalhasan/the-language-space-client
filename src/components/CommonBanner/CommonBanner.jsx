import img from "../../assets/banner/layered-waves-haikei.svg";
// import "./CommonBanner.css";

const CommonBanner = ({ title }) => {
  const bannerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-28 lg:h-44" style={bannerStyle}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl lg:text-5xl font-bold tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CommonBanner;
