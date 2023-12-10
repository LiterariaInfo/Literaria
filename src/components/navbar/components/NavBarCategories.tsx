import { motion } from 'framer-motion';
import { categories } from '../../../assets/text/navBarContent.ts';

const NavBarCategories = () => {
  return (
    <motion.div layout className='nav-bar-categories'>
      {categories.map((category, index) => (
        <label key={index}>{category.name}</label>
      ))}
    </motion.div>
  );
};

export default NavBarCategories;