import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./ImageSlider.scss";
import envlope from "../../assets/images/ww2envlope.png";
import letter1 from "../../assets/images/ww2letter.jpeg";
import letter2 from "../../assets/images/ww2letter2.jpeg";
import letter3 from "../../assets/images/ww2letter3.jpeg";

function ImageSlider() {
  return (
    <div className="imageslider__container">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        sliderPerView={1}
        className="imageslider__carousel"
      >
        <SwiperSlide className="imageslider__element">
          <img className="imageslider__image" src={envlope} alt="ww2 letter" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageslider__image" src={letter2} alt="ww2 letter" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageslider__image" src={letter3} alt="ww2 letter" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;