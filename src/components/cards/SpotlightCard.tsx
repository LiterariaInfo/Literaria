import { Article } from '../../redux/slices/articleSlice.ts';
import dateFormatter from '../../Formatters/dateFormatter.ts';
import OpenLinkButton from '../buttons/OpenLinkButton.tsx';

const SpotlightCard = ({ article }: { article: Article }) => {
	return (
		<div className='spotlight-card'>
			<h1>{article?.name}</h1>
			<label>{article?.author}</label>
			<div className=''>
				<label>{dateFormatter(new Date(article?.createdAt))}</label>
				<OpenLinkButton />
			</div>
		</div>
	);
};

export default SpotlightCard;
