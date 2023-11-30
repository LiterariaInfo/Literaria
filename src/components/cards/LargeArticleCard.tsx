import './card.scss';
import { baseURL } from '../../api.ts';

const LargeArticleCard = (props: { label: string; title: string; url: string; image: string }) => {
	const { title, image } = props;

	return (
		<div className='large-article-card'>
			<img src={`${baseURL}/image/${image}`} alt={title} />
		</div>
	);
};

export default LargeArticleCard;
