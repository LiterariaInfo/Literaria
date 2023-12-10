import './card.scss';
import { baseURL } from '../../api.ts';
import { Article } from '../../redux/slices/articleSlice.ts';

const SmallArticleCard = ({ article }: { article: Article }) => {
	const { author, name, image } = article;

	return (
		<div className='small-article-card'>
			<div className='small-article-card-image'>
				<img src={`${baseURL}/image/${image}`} alt={name} />
				{/*<OpenLinkButton />*/}
			</div>
			<label className='title-label'>{author}</label>
			<h3 className='small-title'>{name}</h3>
		</div>
	);
};

export default SmallArticleCard;
