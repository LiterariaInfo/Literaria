import './Home.scss';
import Landing from './sections/Landing/Landing.tsx';
import Recommended from './sections/Recommended.tsx';
import Latest from './sections/Latest.tsx';

const Home = () => {
	return (
		<>
			<Landing />
			<Recommended />
			<Latest />
		</>
	);
};

export default Home;
