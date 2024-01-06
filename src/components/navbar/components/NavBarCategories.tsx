import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { categories } from '../../../../public/text/navBarContent';
import Link from 'next/link';

const NavBarCategories = ({ setExpanded }: { setExpanded: Dispatch<SetStateAction<boolean>> }) => {
	return (
		<motion.div layout className='nav-bar-categories'>
			{categories.map((category, index) => (
				<motion.label
					onHoverStart={() => {
						// dispatch(setActiveCategory(category.id));
						setExpanded(true);
					}}
					key={index}
				>
					<Link href={`/category/${category.id}`}>{category.name}</Link>
				</motion.label>
			))}
		</motion.div>
	);
};

export default NavBarCategories;
