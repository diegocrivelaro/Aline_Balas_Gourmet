import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderData } from './SliderData';

export default function Slider() {
  return (
    <>
      <div className="w-90% h-346 sm:w-3/4 sm:h-346 md:w-556 md:h-450 ">
        <Swiper
          className="w-full h-full shadow-slider rounded-lg border-2 border-brown-600 md:rounded-36 md:border-0 md:border-none"
          slidePerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {SliderData.map((image) => {
            return (
              <SwiperSlide>
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
