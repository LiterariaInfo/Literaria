import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store.ts';
import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import GiantArticleCard from '../../../components/cards/GiantArticleCard.tsx';

const getArticleCountText = (articles: number): string => {
	if (!articles) {
		return "Niciun articol";
	}

	if (articles === 1) {
		return "Vezi un articol";
	}

	if (articles < 20) {
		return `Vezi toate cele ${articles} articole`;
	}

	return `Vezi toate cele ${articles} de articole`;
}

const Landing = () => {
	const { categoryID } = useParams();

	const directory = useAppSelector(selectDirectory(+categoryID!));

	return (
		<div className='landing section top-section'>
			<div className='thumbnail-side'>
				<h1 className='main-title'>{directory.name}</h1>
				<GiantArticleCard article={directory.articles![0]} />
			</div>
			<div className='navigation-side'>
				<SpotlightCard article={directory.articles![0]} />
				<NextSectionCard
					text={getArticleCountText(directory.articles?.length ?? 0)}
					image={directory.articles![0]?.image}
				/>
			</div>
		</div>
	);
};

export default Landing;
