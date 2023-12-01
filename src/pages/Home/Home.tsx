import './Home.scss';
import Landing from './sections/Landing.tsx';
import { useEffect } from 'react';
import Recommended from './sections/Recommended.tsx';
import { useDispatch } from 'react-redux';
import { fetchLatest, fetchRecommended } from '../../redux/slices/articleSlice.ts';
import store from '../../redux/store.ts';
import Latest from './sections/Latest.tsx';

const Home = () => {
	const dispatch = useDispatch<typeof store.dispatch>();

	useEffect(() => {
		dispatch(fetchRecommended());
		dispatch(fetchLatest());
	}, [dispatch]);

	return (
		<>
			<Landing />
			<Recommended />
			<Latest />
		</>
	);
};

export default Home;
