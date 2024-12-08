interface CarouselCategoryModel {
  image: string;
  logo: string;
  title: string;
}

export const categories: CarouselCategoryModel[] = [
  {
    image: '/images/literature.jpg',
    logo: '/icons/book.svg',
    title: 'Literatură'
  },
  {
    image: '/images/cinematography.jpg',
    logo: '/icons/film.svg',
    title: 'Film'
  },
  {
    image: '/images/art.jpg',
    logo: '/icons/palette.svg',
    title: 'Artă'
  }
];
