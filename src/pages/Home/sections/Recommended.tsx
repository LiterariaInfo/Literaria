import { selectRecommended } from '../../../redux/slices/articleSlice.ts';
import SmallArticleCard from '../../../components/cards/SmallArticleCard.tsx';
import NextSectionButton from '../../../components/buttons/NextSectionButton.tsx';
import { useAppSelector } from '../../../redux/store.ts';
import LargeArticleCard from '../../../components/cards/LargeArticleCard.tsx';

const Recommended = () => {
	const recommendedArticles = useAppSelector(selectRecommended);

	const handleNextSectionClick = () => {};

	return recommendedArticles.length ? (
		<div className='recommended section bottom-section'>
			<h1 className='main-title'>Articole recomandate</h1>
			<div className='recommended-article-list'>
				<SmallArticleCard
					article={{
						author: 'mircea cristea',
						name: 'adasad',
						createdAt: new Date(),
						id: 1,
						image: '1701435521891-q27h88',
						status: 'succeeded'
					}}
				/>
				<LargeArticleCard article={{
					author: 'mircea cristea',
					name: 'adasad',
					createdAt: new Date(),
					id: 1,
					image: '1701435521891-q27h88',
					status: 'succeeded'
				}} />
				<SmallArticleCard
					article={{
						author: 'mircea cristea',
						name: 'adasad',
						createdAt: new Date(),
						id: 1,
						image: '1701435521891-q27h88',
						status: 'succeeded'
					}}
				/>
			</div>
			<NextSectionButton text='Vezi cele mai noi articole' onClick={handleNextSectionClick} />
		</div>
	) : null;
};

export default Recommended;
