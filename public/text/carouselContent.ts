import literature from '../images/literature.jpg';
import book from '../icons/book.svg';
import cinematography from '../images/cinematography.jpg';
import film from '../icons/film.svg';
import art from '../images/art.jpg';
import palette from '../icons/palette.svg';

interface CarouselCategoryModel {
	image: any;
	logo: any;
	title: string;
}

const categories: CarouselCategoryModel[] = [
	{
		image: literature,
		logo: book,
		title: 'Literatură'
	},
	{
		image: cinematography,
		logo: film,
		title: 'Film'
	},
	{
		image: art,
		logo: palette,
		title: 'Artă'
	}
];

export { categories };
