import SpotlightCard from '../../../components/cards/SpotlightCard.tsx';
import NextSectionCard from '../../../components/cards/NextSectionCard.tsx';
import GiantArticleCard from '../../../components/cards/GiantArticleCard.tsx';
import articleCountFormatter from '../../../Formatters/articleCountFormatter.ts';

const Landing = () => {
	// const { categoryID } = useParams();

	const directory = {
		name: 'dire',
		articles: [{
			name: 'test',
			image: '1701428055558-5rdvdt',
			status: 'succeeded',
			id: 0,
			createdAt: new Date(),
			author: 'me',
			content: 'me2'
		}],
		id: -1,
		image: '1701428055558-5rdvdt',
		description: 'meme',
		status: 'succeeded',
		directories: []
	};

	return (
		<div className='landing section top-section'>
			<div className='thumbnail-side'>
				<h1 className='main-title'>{directory?.name}</h1>
				<GiantArticleCard article={directory?.articles![0]} />
			</div>
			<div className='navigation-side'>
				<SpotlightCard article={directory?.articles![0]} />
				<NextSectionCard
					text={articleCountFormatter(directory?.articles?.length ?? 0)}
					image={directory?.articles![0]?.image}
				/>
			</div>
		</div>
	);
};

export default Landing;
