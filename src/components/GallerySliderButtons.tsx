import React from 'react';

const GallerySliderButtons: React.FC = () => {
  return (
    <div className="  hidden tablet:flex justify-between px-16 absolute w-full bottom-[17px] left-0 z-20 desktop:px-56 desktop:bottom-0 ">
      <button
        className=" prevSlide opacity-50 text-right text-33 font-thin leading-normal tablet:block hover:opacity-100 transition-opacity duration-300"
        type="button"
        aria-label="Previous image"
      >
        BACK
      </button>
      <button
        className=" nextSlide opacity-50 text-left text-33 font-thin leading-normal tablet:block hover:opacity-100 transition-opacity duration-300"
        type="button"
        aria-label="Next image"
      >
        NEXT
      </button>
    </div>
  );
};

export default GallerySliderButtons;
