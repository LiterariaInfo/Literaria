import literature from '../../../assets/images/literature.jpg';
import book from '../../../assets/icons/book.svg';
import NextItemButton from '../../../components/buttons/NextItemButton.tsx';
import NextSectionButton from '../../../components/buttons/NextSectionButton.tsx';

const Landing = () => {
	const handleNextItemClick = () => {};

	const handleNextSectionClick = () => {};

	return (
		<>
			<div className='outer-slider section'>
				<div className='slider'>
					<img className='slider-image' src={literature} alt='Carusel image' />
					<div className='category-label'>
						<img src={book} alt='book' />
						<label> {'Literatură'} </label>
					</div>
					<div className='slider-indicator'>
						<div className='slider-indicator-container'>
							<div className='slider-indicator-progress'></div>
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
