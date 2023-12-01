interface NavBarCategoryModel {
	name: string;
	subCategories: {
		name: string;
		url: string;
	}[];
}

const categories: NavBarCategoryModel[] = [
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

export { categories };
