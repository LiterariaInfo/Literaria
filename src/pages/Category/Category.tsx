import './Category.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Landing from './sections/Landing.tsx';
import Description from './sections/Description.tsx';
import SubCategories from './sections/SubCategories.tsx';
import Articles from './sections/Articles.tsx';
import ArticlesExpanded from './sections/ArticlesExpanded.tsx';
import { fetchLatest, fetchRecommended } from '../../redux/slices/articleSlice.ts';
import { useDispatch } from 'react-redux';
import store from '../../redux/store.ts';

const Category = () => {
	let { categoryID } = useParams();

	const dispatch = useDispatch<typeof store.dispatch>();

	useEffect(() => {
		dispatch(fetchRecommended());
		dispatch(fetchLatest());
	}, [dispatch]);

	return (
		<div className='category-slide'>
			<Landing />
			<Description />
			<SubCategories />
			<Articles />
			<ArticlesExpanded />
		</div>
	);
};

export default Category;
