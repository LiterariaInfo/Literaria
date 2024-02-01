import { motion } from 'framer-motion';
import NavBarCategoryList from '@/components/navbar/components/NavBarCategoryList';
import { CategoryModel } from '@/components/navbar/NavBar';

const NavBarListExpanded = ({ categories }: { categories: CategoryModel[] }) => {
	return (
		<motion.div layout className='flex gap-16 pl-32 py-8'>
			{categories.map((category, index) => (
				<NavBarCategoryList category={category} key={index} />
			))}
		</motion.div>
	);
};

export default NavBarListExpanded;
