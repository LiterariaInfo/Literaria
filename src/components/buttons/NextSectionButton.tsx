import './button.scss';
import downArrow from '../../assets/icons/down-arrow.svg';

const NextSectionButton = (props: { text: string; onClick: () => void }) => {
	const { text, onClick } = props;

	return (
		<div className='next-section-button' onClick={onClick}>
			<label>{text}</label>
			<img src={downArrow} alt='down-arrow' />
		</div>
	);
};

export default NextSectionButton;
