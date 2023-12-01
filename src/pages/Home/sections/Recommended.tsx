import { useSelector } from 'react-redux';
import { selectRecommended } from '../../../redux/slices/articleSlice.ts';
import SmallArticleCard from '../../../components/cards/SmallArticleCard.tsx';
import LargeArticleCard from '../../../components/cards/LargeArticleCard.tsx';
import ArticleList from '../../../components/article-list/ArticleList.tsx';
import NextSectionButton from '../../../components/buttons/NextSectionButton.tsx';

const Recommended = () => {
	const recommendedArticles = useSelector(selectRecommended);

	const handleNextSectionClick = () => {}

	return (
		<div className='recommended section'>
			<h1 className='main-title'>Articole recomandate</h1>
			<ArticleList>
				{recommendedArticles.map((article, index) =>
					index % 2 ? (
						<LargeArticleCard article={article} key={index} />
					) : (
						<SmallArticleCard article={article} key={index} />
					)
				)}
			</ArticleList>
			<NextSectionButton text='Vezi cele mai noi articole' onClick={handleNextSectionClick} />
		</div>
	);
};

export default Recommended;
