import { motion } from 'framer-motion';
import NavBarCategoryList from '@/components/navbar/components/NavBarCategoryList';

const NavBarListExpanded = () => {
	const navBarCategories: any[] = [];

	return (
		<motion.div layout className='flex gap-16 pl-32 py-8'>
			{navBarCategories.map((category, index) => (
				<NavBarCategoryList category={category} key={index} />
			))}
		</motion.div>
	);
};

export default NavBarListExpanded;
