import SubCategoryCard from '../../../components/cards/SubCategoryCard.tsx';

const SubCategories = () => {
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
		<div className='section bottom-section sub-categories'>
			<div className='sub-categories-title'>
				<h1 className='secondary-title'>{directory.name}</h1>
			</div>
			{Array.from({ length: 30 }, () => {
				return {
					name: 'test',
					image: '1701435064767-3secuh',
					description: '',
					id: 2,
					status: 'succeeded'
				};
			}).map((directory, index) => (
				<SubCategoryCard directory={directory as any} key={index} />
			))}
		</div>
	);
};

export default SubCategories;
