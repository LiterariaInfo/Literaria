import { selectLatest } from '../../../redux/slices/articleSlice.ts';
import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';
import { useAppSelector } from '../../../redux/store.ts';

const Latest = () => {
	const recommendedArticles = useAppSelector(selectLatest);

	return (
		<div className='latest section bottom-section'>
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
