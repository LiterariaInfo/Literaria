'use client';

import SliderImages from '@/app/_sections/Landing/SliderImages';
import { categories } from '../../../public/text/carouselContent';
import SliderIndicator from '@/app/_sections/Landing/SliderIndicator';
import useCarousel from '@/app/_sections/Landing/useCarousel';
import SliderLabel from '@/app/_sections/Landing/SliderLabel';

export default () => {
	const { currentSlide, setCurrentSlide } = useCarousel();

	return (
		<section className='section flex-col pt-[12rem] pb-12 items-center'>
			<div className='w-[92vw] h-[73vh] bg-cover bg-center box-border relative rounded-[3.5rem]'>
				<SliderImages currentSlide={currentSlide} />
				<SliderLabel
					logo={categories[currentSlide].logo}
					title={categories[currentSlide].title}
				/>
				<SliderIndicator
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			</div>
		</section>
	);
};
