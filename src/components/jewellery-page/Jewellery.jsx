import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Jewellery({ jewelleryData, title }) {
  return (
    <div>
      {title && <h1 className="text-center p-16 text-5xl font-serif">{title}</h1>}
      <div className="mx-auto max-w-fit w-[75%] pb-16 relative">
        <Swiper
          navigation={{
            nextEl: ".custom-nxt",
            prevEl: ".custom-pr",
          }}
          pagination={{
            clickable: true, // Enables clickable pagination dots
            el: ".swiper-pagination", // Explicitly define the pagination element
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
        >
          {jewelleryData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex-shrink-0">
                <div>
                  <img
                    src={slide.imgSrc}
                    alt="necklace image"
                    width="260"
                    height="272"
                  />
                </div>
                <h1>{slide.name}</h1>
                <h1 className="font-semibold">{slide.price}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="custom-pr absolute text-3xl z-10 top-1/2 -left-10 -translate-y-1/2 text-gray-500 hover:text-gray-600">
          &#x276E;
        </button>
        <button className="custom-nxt absolute text-3xl z-10 top-1/2 -right-10 -translate-y-1/2 text-gray-500 hover:text-gray-600">
          &#x276F;
        </button>

        {/* Pagination Container */}
        <div className="swiper-pagination absolute bottom-0 w-full flex justify-center gap-2 py-2"></div>
      </div>
    </div>
  );
}

export default Jewellery;
