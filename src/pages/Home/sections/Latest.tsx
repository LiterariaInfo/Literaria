import { useSelector } from 'react-redux';
import { selectRecommended } from '../../../redux/slices/articleSlice.ts';
import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';

const Latest = () => {
	const recommendedArticles = useSelector(selectRecommended);

	return (
		<div className='latest section'>
			<h1 className='main-title'>Ultimele articole</h1>
			<ArticleList>
				{recommendedArticles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</div>
	);
};

export default Latest;
