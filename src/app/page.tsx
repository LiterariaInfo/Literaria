import Latest from '@/app/_sections/Latest';
import Recommended from '@/app/_sections/Recommended';
import Landing from '@/app/_sections/Landing';
import NavBar from '@/components/navbar/NavBar';

export default () => {
	return (
		<main id={'main'} className='h-screen overflow-y-auto overflow-x-hidden'>
			{/*<NavBar />*/}
			<Landing />
			<Recommended />
			<Latest />
		</main>
	);
};
