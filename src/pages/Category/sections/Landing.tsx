import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store.ts';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';

const Landing = () => {
	const { categoryID } = useParams();

	const directory = (useSelector((state: RootState) => selectDirectory(state, +categoryID!)) ?? {
		articles: []
	})!;

	return (
		<div className='landing section'>
			<div>
				<h1>{directory.name}</h1>
				{/*<GiantArticleCard article={directory.articles![0]} />*/}
			</div>
			<div>
				<SpotlightCard />
				<NextSectionCard />
			</div>
		</div>
	);
};

export default Landing;
