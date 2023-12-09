import './Category.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './sections/Landing.tsx';
import Description from './sections/Description.tsx';
import SubCategories from './sections/SubCategories.tsx';
import Articles from './sections/Articles.tsx';
import ArticlesExpanded from './sections/ArticlesExpanded.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { fetchDirectory, selectDirectoryState } from '../../redux/slices/articleSlice.ts';

const Category = () => {
	const dispatch = useAppDispatch();

	const { categoryID } = useParams();

	const directoryState = useAppSelector(selectDirectoryState(+categoryID!));
	
	useEffect(() => {
		if (directoryState === 'idle') {
			dispatch(fetchDirectory(+categoryID!));
			console.log(6888)
		}
	}, [dispatch]);

	return (
		<>
			<Landing />
			<Description />
			<SubCategories />
			<Articles />
			<ArticlesExpanded />
		</>
	);
};

export default Category;
