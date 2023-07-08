import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import banner4 from "../../../assets/banner/4.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <Swiper
      
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper lg:h-screen"
    >
      <SwiperSlide>
        <img src={banner1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
