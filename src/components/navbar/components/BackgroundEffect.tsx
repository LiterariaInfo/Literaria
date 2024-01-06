import { motion } from 'framer-motion';

const BackgroundEffect = ({ expanded }: { expanded: boolean }) => {
	const navbarBackground: any = {
		backdropFilter: expanded ? 'blur(10px)' : 'blur(0px)',
		backgroundColor: expanded ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
		zIndex: expanded ? 9 : -1
	};

	const transition = {
		zIndex: {
			delay: expanded ? 0 : 0.2
		}
	};

	return (
		<motion.div
			animate={navbarBackground}
			transition={transition}
			className='w-screen h-screen fixed left-0 top-0'
		></motion.div>
	);
};

export default BackgroundEffect;
