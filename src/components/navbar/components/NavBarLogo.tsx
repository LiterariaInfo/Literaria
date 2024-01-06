import { motion } from 'framer-motion';
import Link from 'next/link';

const NavBarLogo = ({ navMode }: { navMode: boolean }) => {
	const logoVariants: any = {
		height: navMode ? '6rem' : '3rem'
	};

	return (
		<Link href={'/'}>
			<motion.img
				initial={{
					height: '3rem'
				}}
				animate={logoVariants}
				layout='preserve-aspect'
				src={'./logo.svg'}
				alt='Literaria'
			/>
		</Link>
	);
};

export default NavBarLogo;
