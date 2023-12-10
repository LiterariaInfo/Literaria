import NextSectionButton from '../../../../components/buttons/NextSectionButton.tsx';
import { categories } from '../../../../assets/text/carouselContent.ts';
import SliderIndicator from './SliderIndicator.tsx';
import SliderImages from './SliderImages.tsx';
import useCarousel from './useCarousel.tsx';

const Landing = () => {
	const { currentSlide, setCurrentSlide } = useCarousel();

	const handleNextSectionClick = () => {};

	return (
		<div className='outer-slider section top-section'>
			<div className='slider'>
				<SliderImages currentSlide={currentSlide} />
				<div className='category-label'>
					<img src={categories[currentSlide].logo} alt='book' />
					<label>{categories[currentSlide].title}</label>
				</div>
				<SliderIndicator currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
			</div>
			<NextSectionButton text='Vezi articolele recomandate' onClick={handleNextSectionClick} />
		</div>
	);
};

export default Landing;
