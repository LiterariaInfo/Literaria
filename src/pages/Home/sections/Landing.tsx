import NextItemButton from '../../../components/buttons/NextItemButton.tsx';
import NextSectionButton from '../../../components/buttons/NextSectionButton.tsx';
import { categories } from '../../../assets/text/carouselContent.ts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const activeProgressIndicator = {
	width: '.5rem',
	backgroundColor: '#00000099'
};

const inactiveProgressIndicator = {
	width: '2rem',
	backgroundColor: '#000000CC'
};

const Landing = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	useEffect(() => {
		const changeSlide = setInterval(() => {
			setCurrentSlide((currentSlide + 1) % categories.length);
		}, 6000);

		return () => {
			clearInterval(changeSlide);
		};
	}, [setCurrentSlide, currentSlide]);

	const handleNextItemClick = () => {
		setCurrentSlide((currentSlide + 1) % categories.length);
	};

	const handleNextSectionClick = () => {};

	return (
		<>
			<div className='outer-slider section'>
				<div className='slider'>
					{categories.map((category, index) => (
						<motion.img
							animate={{
								opacity: currentSlide === index ? 1 : 0
							}}
							className='slider-image'
							src={category.image}
							alt='Carusel image'
							key={index}
						/>
					))}
					<div className='category-label'>
						<img src={categories[currentSlide].logo} alt='book' />
						<label> {categories[currentSlide].title} </label>
					</div>
					<div className='slider-indicator'>
						<div className='slider-indicator-container'>
							{categories.map((_category, index) => (
								<motion.div
									animate={
										currentSlide === index ? inactiveProgressIndicator : activeProgressIndicator
									}
									className='slider-indicator-progress'
									key={index}
								></motion.div>
							))}
						</div>
						<NextItemButton onClick={handleNextItemClick} />
					</div>
					<NextSectionButton text='Vezi articolele recomandate' onClick={handleNextSectionClick} />
				</div>
			</div>
		</>
	);
};

export default Landing;
