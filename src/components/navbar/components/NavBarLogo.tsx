import { motion } from 'framer-motion';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavBarLogo = ({ navMode }: { navMode: boolean }) => {
  const logoVariants: any = {
    height: navMode ? '6rem' : '3rem'
  };

  return (
    <Link to={'/'}>
      <motion.img
        initial={{
          height: '3rem'
        }}
        animate={logoVariants}
        layout='preserve-aspect'
        src={logo}
        alt='Literaria'
      />
    </Link>
  );
};

export default NavBarLogo;