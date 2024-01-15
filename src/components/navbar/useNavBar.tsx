'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useNavBar = () => {
	const isHome = window.location.pathname === '/' && window.innerWidth > 900;

	const [navMode, setNavMode] = useState<boolean>(isHome);

	const main = useRef<any>(null);

	useEffect(() => {
		main.current = document.getElementById('main');
	}, [navMode]);

	const { scrollYProgress } = useScroll({
		container: main,
		layoutEffect: false
	});

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		if (isHome) {
			setNavMode(value === 0);
		}
	});

	return {
		navMode
	};
};

export default useNavBar;
