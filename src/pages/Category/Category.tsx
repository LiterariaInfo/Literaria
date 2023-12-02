import './Category.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './sections/Landing.tsx';
import Description from './sections/Description.tsx';
import SubCategories from './sections/SubCategories.tsx';
import Articles from './sections/Articles.tsx';
import ArticlesExpanded from './sections/ArticlesExpanded.tsx';
import { useDispatch } from 'react-redux';
import store from '../../redux/store.ts';
import { fetchDirectory } from '../../redux/slices/articleSlice.ts';

const Category = () => {
	const { categoryID } = useParams();

	const dispatch = useDispatch<typeof store.dispatch>();

	useEffect(() => {
		dispatch(fetchDirectory(+categoryID!));
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
