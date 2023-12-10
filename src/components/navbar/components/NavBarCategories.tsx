import { motion } from 'framer-motion';
import { categories } from '../../../assets/text/navBarContent.ts';
import { Dispatch, SetStateAction } from 'react';

const NavBarCategories = ({ setExpanded }: { setExpanded: Dispatch<SetStateAction<boolean>> }) => {
	return (
		<motion.div layout className='nav-bar-categories'>
			{categories.map((category, index) => (
				<motion.label
					onHoverStart={() => {
						setExpanded(true);
					}}
					key={index}
				>
					{category.name}
				</motion.label>
			))}
		</motion.div>
	);
};

export default NavBarCategories;
