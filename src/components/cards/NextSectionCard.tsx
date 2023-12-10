import { baseURL } from '../../api.ts';
import NextItemButton from '../buttons/NextItemButton.tsx';

const NextSectionCard = ({ text, image }: { text: string; image: string }) => {
	const handleClick = () => {

	}

	return (
		<div className='next-section-card'>
			<img src={`${baseURL}/image/${image}`} className='next-section-card-image' alt='Next section image' />
			<div className='next-section-card-container'>
				<label>{text}</label>
				<NextItemButton onClick={handleClick} />
			</div>
		</div>
	);
};

export default NextSectionCard;
