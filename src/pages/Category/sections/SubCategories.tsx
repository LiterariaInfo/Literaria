import SubCategoryCard from '../../../components/cards/SubCategoryCard.tsx';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store.ts';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';

const SubCategories = () => {
	const { categoryID } = useParams();

	const directory = useAppSelector(selectDirectory(+categoryID!));

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
