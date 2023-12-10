import { Directory } from '../../redux/slices/articleSlice.ts';
import { baseURL } from '../../api.ts';

const SubCategoryCard = ({ directory }: { directory: Directory }) => {
	const { image } = directory;

	return (
		<div className='sub-category-card'>
			<img src={`${baseURL}/image/${image}`} alt='sub-category image' />
			<div className='sub-category-card-title'>
				<label>{directory.name}</label>
			</div>
		</div>
	);
};

export default SubCategoryCard;
