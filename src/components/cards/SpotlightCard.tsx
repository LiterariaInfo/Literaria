import { Article } from '../../redux/slices/articleSlice.ts';

const SpotlightCard = ({ article }: { article: Article }) => {
	return <div className='spotlight-card'>
		<h1>{article?.name}</h1>
		<label>{article?.author}</label>
		<label>{new Date(article?.createdAt).toDateString()}</label>
	</div>;
};

export default SpotlightCard;
