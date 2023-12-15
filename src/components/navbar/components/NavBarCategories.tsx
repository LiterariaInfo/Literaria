import { motion } from 'framer-motion';
import { categories } from '../../../assets/text/navBarContent.ts';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../../redux/store.ts';
import { setActiveCategory } from '../../../redux/slices/articleSlice.ts';
import { Link } from 'react-router-dom';

const NavBarCategories = ({ setExpanded }: { setExpanded: Dispatch<SetStateAction<boolean>> }) => {
	const dispatch = useAppDispatch();

	return (
		<motion.div layout className='nav-bar-categories'>
			{categories.map((category, index) => (
				<motion.label
					onHoverStart={() => {
						dispatch(setActiveCategory(category.id));
						setExpanded(true);
					}}
					key={index}
				>
					<Link to={`/category/${category.id}`}>{category.name}</Link>
				</motion.label>
			))}
		</motion.div>
	);
};

export default NavBarCategories;
