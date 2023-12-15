import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';
import { Article } from '../../../redux/models';

const Articles = () => {
	// const { categoryID } = useParams();

	const articles: Article[] = [{
		name: 'test',
		image: '1701428055558-5rdvdt',
		status: 'succeeded',
		id: 0,
		createdAt: new Date(),
		author: 'me',
		content: 'me2'
	}]

	return (
		<div className='articles section bottom-section'>
			<h1 className='main-title'>Perioada Pașoptistă</h1>
			<ArticleList>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</div>
	);
};

export default Articles;
