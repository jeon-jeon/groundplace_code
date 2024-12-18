import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../style/customStyles.css";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const ImageSwiper = () => {
  const bgImgs = [
    "/images/bgImg1.jpg",
    "/images/bgImg2.jpg",
    "/images/bgImg3.jpg",
    "/images/bgImg4.jpg",
    "/images/bgImg5.jpg",
    "/images/bgImg6.jpg",
    "/images/bgImg7.jpg",
  ];
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div className="swiper-button-prev custom-prev">
        <MdNavigateBefore size={70} />
      </div>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        // navigation={true}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        className="mySwiper"
      >
        {bgImgs.map((v) => (
          <SwiperSlide
            style={{
              backgroundImage: `url(${v})`,
              position: "relative",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next custom-next">
        <MdNavigateNext size={70} />
      </div>
    </div>
  );
};

export default ImageSwiper;