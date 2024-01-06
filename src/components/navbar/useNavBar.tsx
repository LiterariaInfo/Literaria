'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useNavBar = () => {
	const isHome = window.location.pathname === '/';

	const [navMode, setNavMode] = useState<boolean>(isHome);

	const main = useRef<any>(null);

	useEffect(() => {
		main.current = document.getElementById('main');
	}, [navMode]);

	const { scrollYProgress } = useScroll({
		container: main,
		layoutEffect: false
	});

	if (isHome) {
		useMotionValueEvent(scrollYProgress, 'change', (value) => {
			setNavMode(value === 0);
		});
	}

	const navbarVariants: any = {
		flexDirection: navMode ? 'column' : 'row',
		gap: navMode ? 0 : '2rem'
	};

	const mainNavbarVariants: any = {
		justifyContent: navMode ? 'center' : 'space-between'
	};

	return {
		navMode,
		navbarVariants,
		mainNavbarVariants
	};
};

export default useNavBar;
