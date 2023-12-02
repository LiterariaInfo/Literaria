import './Navbar.scss';
import NavBarCategory from './NavBarCateogry.tsx';
import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar.tsx';
import { categories } from '../../assets/text/navBarContent.ts';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useContext, useState } from 'react';
import { AppContext } from '../../App.tsx';

const NavBar = () => {
	const { scrollRef } = useContext(AppContext)!;

	const { scrollYProgress } = useScroll({
		container: scrollRef,
		layoutEffect: false
	});

	const [navMode, setNavMode] = useState<boolean>(true);

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		setNavMode(value === 0);
	});

	return (
		<motion.div
			style={
				navMode
					? {
							flexDirection: 'column',
							gap: 0
					  }
					: {
							flexDirection: 'row',
							gap: '2rem'
					  }
			}
			layout
			className='nav-bar'
		>
			<motion.img
				initial={{
					height: '3rem'
				}}
				animate={
					navMode
						? {
								height: '6rem'
						  }
						: {
								height: '3rem'
						  }
				}
				layout
				src={logo}
				alt='Literaria'
			/>
			<motion.div
				style={
					navMode
						? {
								justifyContent: 'center'
						  }
						: {
								justifyContent: 'space-between'
						  }
				}
				layout
				className='main-nav-bar'
			>
				<motion.div layout className='nav-bar-categories'>
					{categories.map((category, index) => (
						<NavBarCategory key={index} name={category.name} categories={category.subCategories} />
					))}
				</motion.div>
				<SearchBar />
			</motion.div>
		</motion.div>
	);
};

export default NavBar;
