import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store.ts';
import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import GiantArticleCard from '../../../components/cards/GiantArticleCard.tsx';

const Landing = () => {
	const { categoryID } = useParams();

	const directory = useAppSelector(selectDirectory(+categoryID!));

	return (
		<div className='landing section'>
			<div>
				<h1>{directory.name}</h1>
				<GiantArticleCard article={directory.articles![0]} />
			</div>
			<div>
				<SpotlightCard />
				<NextSectionCard
					text={`Vezi toate cele ${directory.articles?.length}${
						directory.articles?.length! >= 20 ? ' de' : ''
					} Articole`}
				/>
			</div>
		</div>
	);
};

export default Landing;
