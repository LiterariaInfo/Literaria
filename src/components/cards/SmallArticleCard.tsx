import image from '../../assets/image.png';
import "./SmallArticleCard.scss";

const SmallArticleCard = (props: { label: string; title: string }) => {
	const { label, title } = props;

	return (
		<div className="small-article-card">
			<div className="small-article-card-image">
				<img src={image} />
			</div>
			<label>{label}</label>
			<h3>{title}</h3>
		</div>
	);
};

export default SmallArticleCard;
