import './button.scss';
import horizontalArrow from '../../assets/icons/horizontal-arrow.svg';

const NextItemButton = (props: { onClick: () => void }) => {
	const { onClick } = props;

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
