import { motion } from 'framer-motion';
import { categories } from '@/lib/data/carousel-data';

export default function SliderImages({
  currentSlide
}: {
  currentSlide: number;
}) {
  return categories.map((category, index) => (
    <motion.img
      animate={{
        opacity: currentSlide === index ? 1 : 0
      }}
      className='object-cover w-full h-full brightness-[0.7] absolute rounded-[3.5rem] mobile:rounded-[2rem] left-0 top-0'
      src={category.image}
      alt='Carusel image'
      key={index}
    />
  ));
}
