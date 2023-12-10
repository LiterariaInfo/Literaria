import './Home.scss';
import Landing from './sections/Landing/Landing.tsx';
import { useEffect } from 'react';
import Recommended from './sections/Recommended.tsx';
import {
	fetchLatest,
	fetchRecommended,
	selectLatestState,
	selectRecommendedState
} from '../../redux/slices/articleSlice.ts';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import Latest from './sections/Latest.tsx';

const Home = () => {
	const dispatch = useAppDispatch();
	const recommendedState = useAppSelector(selectRecommendedState);
	const latestState = useAppSelector(selectLatestState);

	useEffect(() => {
		if (recommendedState === 'idle') {
			dispatch(fetchRecommended());
		}
		if (latestState === 'idle') {
			dispatch(fetchLatest());
		}
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
