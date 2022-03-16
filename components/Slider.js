import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { SliderData } from './SliderData';

export default function Slider() {
  const [SlideIndex, setSlideIndex] = useState(0);
  const slideLength = SliderData.length;

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setSlideIndex(SlideIndex === 0 ? slideLength - 1 : SlideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(SlideIndex === slideLength - 1 ? 0 : SlideIndex + 1);
  };

  setTimeout(nextSlide, 12000);

  return (
    <>
      <div className="relative flex justify-center items-center w-556 h-450">
        {SliderData.map((image, index) => {
          return (
            <div
              className={
                index === SlideIndex
                  ? 'w-full h-full opacity-100 duration-700 ease-in'
                  : 'opacity-0'
              }
              key={index}
            >
              {index === SlideIndex && (
                <img
                  className="w-full h-full object-cover rounded-36"
                  src={image.src}
                  alt={image.alt}
                />
              )}
            </div>
          );
        })}
        <button
          className="w-40 h-40 flex justify-center items-center absolute top-1/2 left-6 -translate-y-1/2 select-none bg-gray-200 rounded-full"
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft className="w-34 h-34 text-white-default" />
        </button>
        <button
          className="w-40 h-40 flex justify-center items-center absolute top-1/2 right-6 -translate-y-1/2 select-none bg-gray-200 rounded-full"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight className="w-34 h-34 text-white-default" />
        </button>
      </div>
    </>
  );
}
