import { baseURL } from '../../api.ts';

const NextSectionCard = ({ text, image }: { text: string, image: string }) => {
	console.log(image)
	return <div className='next-section-card'>
		<img src={`${baseURL}/image/${image}`} alt='Next section image' />
		<div>
			<label>{text}</label>
		</div>
	</div>;
};

export default NextSectionCard;