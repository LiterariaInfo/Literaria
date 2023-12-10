import './Navbar.scss';
import SearchBar from './components/SearchBar.tsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import NavBarLogo from './components/NavBarLogo.tsx';
import NavBarCategories from './components/NavBarCategories.tsx';
import NavBarListExpanded from './components/NavBarListExpanded.tsx';
import BackgroundEffect from './components/BackgroundEffect.tsx';
import useNavBar from './useNavBar.tsx';

const navBarTransition = {
	bounce: 0,
	bounceDamping: 0,
	bounceStiffness: 0
};

const NavBar = () => {
	const { navMode, navbarVariants, mainNavbarVariants } = useNavBar();

	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<>
			<motion.div
				onHoverStart={() => {
					setExpanded(true);
				}}
				onHoverEnd={() => {
					setExpanded(false);
				}}
				transition={navBarTransition}
				layout
				className='nav-bar'
			>
				<motion.div style={navbarVariants} layout className='outer-nav-bar'>
					<NavBarLogo navMode={navMode} />
					<motion.div style={mainNavbarVariants} layout className='main-nav-bar'>
						<NavBarCategories />
						<SearchBar />
					</motion.div>
				</motion.div>
				{expanded ? <NavBarListExpanded /> : null}
			</motion.div>
			<BackgroundEffect expanded={expanded} />
		</>
	);
};

export default NavBar;
