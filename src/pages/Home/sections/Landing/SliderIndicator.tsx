import { Dispatch, SetStateAction } from 'react';
import { categories } from '../../../../assets/text/carouselContent.ts';
import { motion } from 'framer-motion';
import NextItemButton from '../../../../components/buttons/NextItemButton.tsx';

const activeProgressIndicator = {
	width: '.5rem',
	backgroundColor: '#00000099'
};

const inactiveProgressIndicator = {
	width: '2rem',
	backgroundColor: '#000000CC'
};

const SliderIndicator = ({
	currentSlide,
	setCurrentSlide
}: {
	currentSlide: number;
	setCurrentSlide: Dispatch<SetStateAction<number>>;
}) => {
	const handleNextItemClick = () => {
		setCurrentSlide((currentSlide + 1) % categories.length);
	};

	return (
		<div className='slider-indicator'>
			<div className='slider-indicator-container'>
				{categories.map((_category, index) => (
					<motion.div
						animate={currentSlide === index ? inactiveProgressIndicator : activeProgressIndicator}
						className='slider-indicator-progress'
						key={index}
					></motion.div>
				))}
			</div>
			<NextItemButton onClick={handleNextItemClick} />
		</div>
	);
};

export default SliderIndicator;
