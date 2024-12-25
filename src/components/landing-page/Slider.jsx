import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LandingPage from './LandingPage';
import { landingSliderData } from '../../constant/productsData';

export default function Slider() {
  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        {landingSliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <LandingPage data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute text-5xl z-10 top-1/2 left-10 -translate-y-1/2 text-gray-500 hover:text-gray-600">
        &#x276E;
      </button>
      <button className="custom-next absolute text-5xl z-10 top-1/2 right-10 -translate-y-1/2 text-gray-500 hover:text-gray-600">
        &#x276F;
      </button>
    </div>
  );
}
