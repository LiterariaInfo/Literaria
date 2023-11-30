import './card.scss';
import { baseURL } from '../../api.ts';

const SmallArticleCard = (props: { label: string; title: string; url: string; image: string }) => {
	const { label, title, image } = props;

	return (
		<div className="small-article-card">
			<div className="small-article-card-image">
				<img src={`${baseURL}/image/${image}`} alt={title} />
			</div>
			<label className="title-label">{label}</label>
			<h3 className="small-title">{title}</h3>
		</div>
	);
};

export default SmallArticleCard;
