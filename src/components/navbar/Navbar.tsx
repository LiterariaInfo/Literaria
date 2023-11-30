import './Navbar.scss';
import NavbarCategory from './NavbarCateogry';
import logo from '../../assets/logo.svg';
import search from '../../assets/icons/search.svg';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const categories: {
	name: string;
	subCategories: {
		name: string;
		url: string;
	}[];
}[] = [
	{
		name: 'Articole generale',
		subCategories: []
	},
	{
		name: 'Literatura și celelalte arte',
		subCategories: []
	},
	{
		name: 'Perioade literare',
		subCategories: []
	},
	{
		name: 'Despre noi',
		subCategories: []
	}
];

const Navbar = () => {
	const [isExtended, setIsExtended] = useState<boolean>(false);

	const searchBar = useRef<HTMLInputElement>(null);

	return (
		<div className="nav-bar">
			<div className="main-nav-bar">
				<Link to={'/'} >
					<img src={logo} alt="Literaria" />
				</Link>
				{categories.map((category, index) => (
					<NavbarCategory key={index} name={category.name} categories={category.subCategories} />
				))}
			</div>
			<div
				className="outer-search"
				style={{
					borderWidth: isExtended ? '1px' : 0
				}}
				onMouseEnter={() => {
					setIsExtended(true);
					searchBar.current!.focus();
				}}
				onMouseLeave={() => {
					if (searchBar.current!.value === '') {
						setIsExtended(false);
					}
				}}
			>
				<div className="search">
					<img src={search} alt="search" />
				</div>
				<motion.input
					placeholder="Căutați..."
					initial={{ width: 0 }}
					animate={{ width: isExtended ? 300 : 0, fontSize: isExtended ? '1rem' : 0 }}
					ref={searchBar}
					onBlur={() => {
						if (searchBar.current!.value === '') {
							setIsExtended(false);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Navbar;
