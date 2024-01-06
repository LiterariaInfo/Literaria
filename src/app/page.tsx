import Latest from '@/app/_sections/Latest';
import Recommended from '@/app/_sections/Recommended';

export default () => {
	return (
		<main id={'main'} style={{
			height: '100vh',
			overflowY: 'auto',
			overflowX: 'hidden'
		}}>
			{/*<NavBar />*/}
			<Recommended />
			<Latest />
		</main>
	);
};
