import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store.ts';
import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import GiantArticleCard from '../../../components/cards/GiantArticleCard.tsx';

const Landing = () => {
	const { categoryID } = useParams();

	const directory = useAppSelector(selectDirectory(+categoryID!));

	console.log(directory)

	return (
		<div className='landing section'>
			<div>
				<h1 className='main-title'>{directory.name}</h1>
				<GiantArticleCard article={directory.articles![0]} />
			</div>
			<div className='landing-side'>
				<SpotlightCard article={directory.articles![0]} />
				<NextSectionCard
					text={`Vezi toate cele ${directory.articles?.length}${
						directory.articles?.length! >= 20 ? ' de' : ''
					} Articole`}
					image={directory.articles![0]?.image}
				/>
			</div>
		</div>
	);
};

export default Landing;
