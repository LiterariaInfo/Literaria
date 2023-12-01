import { useSelector } from 'react-redux';
import { selectRecommended } from '../../../redux/slices/articleSlice.ts';
import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';

const Articles = () => {
	const recommendedArticles = useSelector(selectRecommended);

	return (
		<div className='articles section'>
			<h1 className='main-title'>Perioada Pașoptistă</h1>
			<ArticleList>
				{recommendedArticles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</div>
	);
};

export default Articles;
