import SmallArticleCard from '../../../components/cards/SmallArticleCard.tsx';
import NextSectionButton from '../../../components/buttons/NextSectionButton.tsx';
import { useAppDispatch, useAppSelector } from '../../../redux/store.ts';
import LargeArticleCard from '../../../components/cards/LargeArticleCard.tsx';
import {
	selectRecommended,
	selectRecommendedStatus
} from '../../../redux/selectors/articleSelector.ts';
import { useEffect } from 'react';
import { getRecommended } from '../../../redux/thunks/articleThunk.ts';

const Recommended = () => {
	const dispatch = useAppDispatch();
	const status = useAppSelector(selectRecommendedStatus);
	const articles = useAppSelector(selectRecommended);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(getRecommended());
		}
	}, [dispatch]);

	const handleNextSectionClick = () => {};

	return (
		<div className='recommended section bottom-section'>
			{status === 'succeeded' ? (
				<>
					<h1 className='main-title'>Articole recomandate</h1>
					<div className='recommended-article-list'>
						<SmallArticleCard article={articles[0]} />
						<LargeArticleCard article={articles[1]} />
						<SmallArticleCard article={articles[2]} />
					</div>
					<NextSectionButton text='Vezi cele mai noi articole' onClick={handleNextSectionClick} />
				</>
			) : null}
		</div>
	);
};

export default Recommended;
