import './Navbar.scss';
import NavBarCategory from './NavBarCateogry.tsx';
import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar.tsx';
import { categories } from '../../assets/text/navBarContent.ts';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { RefObject, useState } from 'react';

const NavBar = ({ scrollRef }: { scrollRef: RefObject<HTMLDivElement> }) => {
	const { scrollYProgress } = useScroll({
		container: scrollRef
	});

	const [navMode, setNavMode] = useState<boolean>(true);

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		setNavMode(value < 0.1);
	});
	return (
		<motion.div
			style={
				navMode
					? {
							flexDirection: 'column'
					  }
					: {
							flexDirection: 'row'
					  }
			}
			layout
			className='nav-bar'
		>
			<motion.img layout src={logo} alt='Literaria' />
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
