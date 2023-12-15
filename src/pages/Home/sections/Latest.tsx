import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';
import { useAppDispatch, useAppSelector } from '../../../redux/store.ts';
import { selectLatest, selectLatestStatus } from '../../../redux/selectors/articleSelector.ts';
import { useEffect } from 'react';
import { getLatest } from '../../../redux/thunks/articleThunk.ts';

const Latest = () => {
	const dispatch = useAppDispatch();
	const status = useAppSelector(selectLatestStatus);
	const articles = useAppSelector(selectLatest) ?? [];

	useEffect(() => {
		if (status === 'idle') {
			dispatch(getLatest());
		}
	}, [dispatch]);

	return (
		<div className='latest section bottom-section'>
			<h1 className='main-title'>Ultimele articole</h1>
			<ArticleList>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</div>
	);
};

export default Latest;
