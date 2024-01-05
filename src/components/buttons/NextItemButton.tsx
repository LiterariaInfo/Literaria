import './button.scss';
import horizontalArrow from '../../assets/icons/horizontal-arrow.svg';

const NextItemButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<div onClick={onClick} className='next-item-button'>
			<img
				className='slider-next-image'
				src={horizontalArrow}
				alt='horizontal-arrow'
				draggable='false'
			/>
		</div>
	);
};

export default NextItemButton;
