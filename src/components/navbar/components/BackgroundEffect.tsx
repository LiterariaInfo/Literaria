import { motion } from 'framer-motion';

const BackgroundEffect = ({ expanded }: { expanded: boolean }) => {
  const navbarBackground: any = {
    backdropFilter: expanded ? 'blur(10px)' : 'blur(0px)',
    backgroundColor: expanded ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
    zIndex: expanded ? 9 : -1
  };

  return (
    <motion.div
      animate={navbarBackground}
      transition={{
        zIndex: {
          delay: expanded ? 0 : 0.2
        }
      }}
      className='nav-bar-background'
    ></motion.div>
  );
};

export default BackgroundEffect;