import literature from '../../../assets/images/literature.jpg';
import cinematography from '../../../assets/images/cinematography.jpg';
import art from '../../../assets/images/art.jpg';
import book from '../../../assets/icons/book.svg';
import film from '../../../assets/icons/film.svg';
import palette from '../../../assets/icons/palette.svg';
import horizontalArrow from '../../../assets/icons/horizontal-arrow.svg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sliderIndicatorInactive = {
	backgroundColor: '#00000099',
	width: '.5rem'
};

const sliderIndicatorActive = {
	backgroundColor: '#000000CC',
	width: '2rem'
};

const data: { image: any; name: string; icon: any }[] = [
	{
		image: literature,
		name: 'Literatură',
		icon: book
	},
	{
		image: cinematography,
		name: 'Film',
		icon: film
	},
	{
		image: art,
		name: 'Desen',
		icon: palette
	}
];

const Landing = () => {
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index + 1) % data.length);
		}, 6000);

		return () => {
			clearInterval(interval);
		};
	}, [index, setIndex]);

	return (
		<>
			<div className="outer-slider">
				<div className="slider">
					<img className="slider-image" src={data[index].image} alt="Carusel image" />
					<motion.div layout="position" transition={{ duration: 0.3 }} className="category-label">
						<motion.img layout="position" src={data[index].icon} alt="book" />
						<motion.label layout="position"> {data[index].name} </motion.label>
					</motion.div>
					<div className="slider-indicator">
						<div className="slider-indicator-container">
							<motion.div
								className="slider-indicator-progress"
								animate={index === 0 ? sliderIndicatorActive : sliderIndicatorInactive}
							></motion.div>
							<motion.div
								className="slider-indicator-progress"
								animate={index === 1 ? sliderIndicatorActive : sliderIndicatorInactive}
							></motion.div>
							<motion.div
								className="slider-indicator-progress"
								animate={index === 2 ? sliderIndicatorActive : sliderIndicatorInactive}
							></motion.div>
						</div>
						<div
							onClick={() => {
								setIndex((index + 1) % data.length);
							}}
							className="slider-next"
						>
							<img
								className="slider-next-image"
								src={horizontalArrow}
								alt="horizontal-arrow"
								draggable="false"
							/>
						</div>
					</div>
					<div className="see-more">
						<label>Vezi articolele recomandate</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
