"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <Swiper
        rewind={true}
        loop={true}
        autoplay={{ delay: 3500 }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper home-slider"
      >
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2024/04/setpresso-slide.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/06/BW-and-LEO.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/06/82.jpg"
            alt="Slide"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
