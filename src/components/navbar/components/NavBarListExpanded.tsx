import { motion } from 'framer-motion';
import NavBarCategoryList from './NavBarCategoryList.tsx';
import { useAppSelector } from '../../../redux/store.ts';
import { selectActiveCategories } from '../../../redux/selectors/articleSelector.ts';

const NavBarListExpanded = () => {
  const navBarCategories = useAppSelector(selectActiveCategories);

  return (
    <motion.div layout className='nav-bar-category-list-expanded'>
      {navBarCategories.map((category, index) => (
        <NavBarCategoryList category={category} key={index} />
      ))}
    </motion.div>
  );
};

export default NavBarListExpanded;