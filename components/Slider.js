import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderData } from './SliderData';

export default function Slider() {
  return (
    <>
      <div className="w-364 h-346 sm:w-556 sm:h-450 rounded-lg border-2 border-brown-600 sm:rounded-36 sm:border-0 sm:border-none">
        <Swiper
          className="w-full h-full"
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
                  className="w-full h-full object-cover rounded-lg sm:rounded-36"
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
