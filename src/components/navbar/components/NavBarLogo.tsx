import { motion, TargetAndTransition } from 'framer-motion';
import Link from 'next/link';

const initial = {
	height: '3rem'
};

const NavBarLogo = ({ navMode }: { navMode: boolean }) => {
	const logoVariants: TargetAndTransition = {
		height: navMode ? '6rem' : '3rem'
	};

	return (
		<Link href={'/'}>
			<motion.img
				initial={initial}
				animate={logoVariants}
				layout='preserve-aspect'
				src={'./logo.svg'}
				alt='Literaria'
			/>
		</Link>
	);
};

export default NavBarLogo;
