import { categories } from '../../../../assets/text/carouselContent.ts';
import { motion } from 'framer-motion';

const SliderImages = ({ currentSlide }: { currentSlide: number }) => {
	return categories.map((category, index) => (
		<motion.img
			animate={{
				opacity: currentSlide === index ? 1 : 0
			}}
			className='slider-image'
			src={category.image}
			alt='Carusel image'
			key={index}
		/>
	));
};

export default SliderImages;