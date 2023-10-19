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

function ImageSlider({ images, envelope }) {

  //Create a new array that includes the envelope image path and the rest of the letter images using the spread operator
  const letterImages = [envelope, ...images];

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

        {/* For each image path, return a slider with the image from the public folder */}
        {letterImages.map((image, index) => {
          return (
            <SwiperSlide key={index} className="imageslider__element">
              <img
                className="imageslider__image"
                src={image}
                alt="ww2 letter"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
