import './card.scss';
import { Article } from '../../redux/slices/articleSlice.ts';
import { baseURL } from '../../api.ts';
import Timestamp from '../timestamp/Timestamp.tsx';
import OpenLinkButton from '../buttons/OpenLinkButton.tsx';

const MediumArticleCard = ({ article }: { article: Article }) => {
	const { author, name, image, createdAt } = article;

	return (
		<div className='medium-article-card'>
			<div className='medium-article-card-image'>
				<img src={`${baseURL}/image/${image}`} alt={name} />
				<Timestamp className='outer-time-stamp' time={createdAt} />
				<OpenLinkButton className='outer-open-link-button' />
			</div>
			<label className='title-label'>{author}</label>
			<h3 className='small-title'>{name}</h3>
		</div>
	);
};

export default MediumArticleCard;
