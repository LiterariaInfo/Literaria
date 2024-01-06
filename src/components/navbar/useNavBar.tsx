'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useNavBar = () => {
	const [navMode, setNavMode] = useState<boolean>(true);

	const main = useRef<any>(null);

	useEffect(() => {
		main.current = document.getElementById('main');
	}, [navMode]);

	const { scrollYProgress } = useScroll({
		container: main,
		layoutEffect: false
	});

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		console.log(333);
		setNavMode(value === 0);
	});

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
