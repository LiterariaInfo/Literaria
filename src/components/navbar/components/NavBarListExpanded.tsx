import { motion } from 'framer-motion';
import NavBarCategoryList from '@/components/navbar/components/NavBarCategoryList';

const NavBarListExpanded = () => {
  const navBarCategories: any[] = [];

  return (
    <motion.div layout className='nav-bar-category-list-expanded'>
      {navBarCategories.map((category, index) => (
        <NavBarCategoryList category={category} key={index} />
      ))}
    </motion.div>
  );
};

export default NavBarListExpanded;