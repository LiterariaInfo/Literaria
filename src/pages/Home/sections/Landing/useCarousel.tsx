import { categories } from '../../../../assets/text/carouselContent.ts';
import { useEffect, useState } from 'react';

const useCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % categories.length);
    }, 2000);

    return () => {
      clearInterval(changeSlide);
    };
  }, [setCurrentSlide, currentSlide]);

  return {
    currentSlide,
    setCurrentSlide
  }
}

export default useCarousel;