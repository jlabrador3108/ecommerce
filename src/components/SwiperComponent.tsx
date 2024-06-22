// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/images/fondos_de_pantalla_24.jpg";
import image2 from "../assets/images/WALLPAPER OMEGA (6).jpeg";
import image3 from "../assets/images/WALLPAPER OMEGA (24).jpg";
import image4 from "../assets/images/WALLPAPER OMEGA (28).jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComponent() {
  return (
    <Swiper
      // install Swiper modules
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 3500 }}
      // speed={5000}
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      style={{ height: "50vh", width: "100%" }}
    >
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // width: '100%',
          // height: "50vh",
        }}
      >
        <img
          src={image1}
          alt="Imagen 1"
          style={{
            width: "100%",
            // height: "50vh",
          }}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // width: '100%',
          // height: "50vh",
        }}
      >
        <img
          src={image2}
          alt="Imagen 1"
          style={{
            width: "100%",
            // height: "50vh",
          }}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // width: '100%',
          // height: "50vh",
        }}
      >
        <img
          src={image3}
          alt="Imagen 1"
          style={{
            width: "100%",
            // height: "50vh",
          }}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // width: '100%',
          // height: "50vh",
        }}
      >
        <img
          src={image4}
          alt="Imagen 1"
          style={{
            width: "100%",
            // height: "50vh",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
