import icon1 from "../../../assets/icons/icons8-explore-64.png";
import icon2 from "../../../assets/icons/education-board.svg";
import icon3 from "../../../assets/icons/education-cap.svg";

const MottoBanner = () => {
  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-1/2 translate-y-1/4 w-3/4 shadow-md rounded-md bg-white">
      <div className="">
        <div className="flex justify-evenly items-center p-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={icon1} alt="" className="h-6 w-6 lg:h-10 lg:w-10" />
            <p className="text-center font-medium">Explore</p>
          </div>
          <div className="divider divider-horizontal text-green-500"></div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={icon2} alt="" className="h-6 w-6 lg:h-10 lg:w-10" />
            <p className="text-center font-medium">Learn</p>
          </div>
          <div className="divider divider-horizontal text-green-500"></div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={icon3} alt="" className="h-6 w-6 lg:h-10 lg:w-10" />
            <p className="text-center font-medium">Certify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MottoBanner;
