import './Category.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './sections/Landing.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import Description from './sections/Description.tsx';
import SubCategories from './sections/SubCategories.tsx';
import Articles from './sections/Articles.tsx';
import { getDirectory } from '../../redux/thunks/directoryThunk.ts';
import { selectDirectoryStatus } from '../../redux/selectors/directorySelector.ts';

const Category = () => {
	/*const dispatch = useAppDispatch();

	const { categoryID } = useParams();

	const status = useAppSelector(selectDirectoryStatus(+categoryID!));

	useEffect(() => {
		if (status === 'idle') {
			dispatch(getDirectory(+categoryID!));
		}
	}, [dispatch]);*/

	return (
		<>
			<Landing />
			<Description />
			<SubCategories />
			<Articles />
			{/* <ArticlesExpanded /> */}
		</>
	);
};

export default Category;
