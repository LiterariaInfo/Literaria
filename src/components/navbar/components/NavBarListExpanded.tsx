import { motion } from 'framer-motion';
import NavBarCategoryList from './NavBarCategoryList.tsx';

const navBarCategories = [
  {
    title: 'Literatură veche',
    categories: ['Grigore Ureche', 'Miron Costin']
  },
  {
    title: 'Literatură iluministă',
    categories: ['Ion Budai-Deleanu']
  },
  {
    title: 'Perioada Pașoptistă',
    categories: ['Mihail Kogălniceanu', 'Vasile Alecsandri', 'Nicolae Filimon', 'Alte articole']
  },
  {
    title: 'Perioada Marilor Clasici',
    categories: [
      'Titu Maiorescu',
      'Mihai Eminescu',
      'Ion Creangă',
      'Ioan Slavici',
      'Ion Luca Caragiale',
      'George Coșbuc'
    ]
  },
  {
    title: 'Perioada Interbelică',
    categories: [
      'Eugen Lovinescu',
      'Liviu Rebreanu',
      'Camil Petrescu',
      'Cezar Petrescu',
      'Octavian Goga',
      'Mihail Sadoveanu',
      'Vasile Voiculescu'
    ]
  }
];

const NavBarListExpanded = () => {
  return (
    <motion.div layout className='nav-bar-category-list-expanded'>
      {navBarCategories.map((category, index) => (
        <NavBarCategoryList title={category.title} categories={category.categories} key={index} />
      ))}
    </motion.div>
  );
};

export default NavBarListExpanded;