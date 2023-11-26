import './Navbar.scss';
import NavbarCategory from './NavbarCateogry';
//@ts-ignore
import logo from '../../assets/logo.svg';

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
	}
];

const Navbar = () => {
	return (
		<div className="nav-bar">
			<img src={logo} />
			{categories.map((category, index) => (
				<NavbarCategory
					key={index}
					name={category.name}
					categories={category.subCategories}
				/>
			))}
		</div>
	);
};

export default Navbar;
