import './Navbar.scss';
import NavBarCategory from './NavBarCateogry.tsx';
import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar.tsx';
import { categories } from '../../assets/text/navBarContent.ts';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useContext, useState } from 'react';
import { AppContext } from '../../App.tsx';
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

const NavBar = () => {
	const { scrollRef } = useContext(AppContext)!;

	const { scrollYProgress } = useScroll({
		container: scrollRef,
		layoutEffect: false
	});

	const [navMode, setNavMode] = useState<boolean>(true);

	const [expanded, setExpanded] = useState<boolean>(false);

	useMotionValueEvent(scrollYProgress, 'change', (value) => {
		setNavMode(value === 0);
	});

	const navbarVariants: any = {
		flexDirection: navMode ? 'column' : 'row',
		gap: navMode ? 0 : '2rem'
	};

	const logoVariants: any = {
		height: navMode ? '6rem' : '3rem'
	};

	const mainNavbarVariants: any = {
		justifyContent: navMode ? 'center' : 'space-between'
	};

	const navbarBackground: any = {
		backdropFilter: expanded ? 'blur(10px)' : 'blur(0px)',
		backgroundColor: expanded ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
		zIndex: expanded ? 9 : -1
	};

	return (
		<>
			<motion.div
				onHoverStart={() => {
					setExpanded(true);
				}}
				onHoverEnd={() => {
					setExpanded(false);
				}}
				transition={{
					bounce: 0,
					bounceDamping: 0,
					bounceStiffness: 0
				}}
				layout
				className='nav-bar'
			>
				<motion.div style={navbarVariants} layout className='outer-nav-bar'>
					<motion.img
						initial={{
							height: '3rem'
						}}
						animate={logoVariants}
						layout='preserve-aspect'
						src={logo}
						alt='Literaria'
					/>
					<motion.div style={mainNavbarVariants} layout className='main-nav-bar'>
						<motion.div layout className='nav-bar-categories'>
							{categories.map((category, index) => (
								<NavBarCategory
									key={index}
									name={category.name}
									categories={category.subCategories}
								/>
							))}
						</motion.div>
						<SearchBar />
					</motion.div>
				</motion.div>
				{expanded ? (
					<motion.div layout className='nav-bar-category-list-list'>
						{navBarCategories.map((category, index) => (
							<NavBarCategoryList
								title={category.title}
								categories={category.categories}
								key={index}
							/>
						))}
					</motion.div>
				) : null}
			</motion.div>
			<motion.div
				animate={navbarBackground}
				transition={{
					zIndex: {
						delay: expanded ? 0 : 0.2
					}
				}}
				className='nav-bar-background'
			></motion.div>
		</>
	);
};

export default NavBar;
