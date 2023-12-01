import './Navbar.scss';
import NavBarCategory from './NavBarCateogry.tsx';
import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar.tsx';
import { categories } from '../../assets/text/navBarContent.ts';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<div className='main-nav-bar'>
				<img src={logo} alt='Literaria' />
				{categories.map((category, index) => (
					<NavBarCategory key={index} name={category.name} categories={category.subCategories} />
				))}
			</div>
			<SearchBar />
		</div>
	);
};

export default NavBar;
