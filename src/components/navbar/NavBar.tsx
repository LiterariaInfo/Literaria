'use client';

import './Navbar.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useNavBar from '@/components/navbar/useNavBar';
import NavBarLogo from '@/components/navbar/components/NavBarLogo';
import NavBarCategories from '@/components/navbar/components/NavBarCategories';
import SearchBar from '@/components/navbar/components/SearchBar';
import NavBarListExpanded from '@/components/navbar/components/NavBarListExpanded';
import BackgroundEffect from '@/components/navbar/components/BackgroundEffect';


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
						<NavBarCategories setExpanded={setExpanded} />
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
