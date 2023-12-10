import './Category.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './sections/Landing.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { fetchDirectory, selectDirectoryState } from '../../redux/slices/articleSlice.ts';
import Description from './sections/Description.tsx';

const Category = () => {
	const dispatch = useAppDispatch();

	const { categoryID } = useParams();

	const directoryState = useAppSelector(selectDirectoryState(+categoryID!));
	
	useEffect(() => {
		if (directoryState === 'idle') {
			dispatch(fetchDirectory(+categoryID!));
		}
	}, [dispatch]);

	return (
		<>
			<Landing />
			<Description />
			{/*
			<SubCategories />
			<Articles />
			<ArticlesExpanded />*/}
		</>
	);
};

export default Category;
