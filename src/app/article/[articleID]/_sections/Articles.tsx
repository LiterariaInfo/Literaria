import { Article } from '@/lib/models';
import ArticleList from '@/components/ArticleList';
import MediumArticleCard from '@/components/cards/MediumArticleCard';
import dateFormatter from '@/lib/formatters/dateFormatter';

export default () => {
	const articles: Article[] = [
		{
			id: 0,
			title: 'Observatia lucida a lui Caragiale asupra societatii burgheze dddd',
			author: 'gigel gige',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 1,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 2,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 3,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 4,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 5,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 5,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 5,
			title: 'Pasoptism',
			author: 'gigel',
			image: '/images/art.jpg',
			createdAt: new Date()
		}
	];

	const authors = ['pasoptism', 'pasoptism', 'pasoptism', 'pasoptism'];

	return (
		<section className='section flex-col pt-20 !min-h-screen !h-auto'>
			<h1 className='text-left pl-8 mb-8 main-title laptop:pl-5'>
				Ultimele articole
			</h1>
			<div className='px-8 flex gap-4 mb-10 overflow-x-auto overflow-y-hidden'>
				{authors.map((author, index) => (
					<label
						className={`font-semibold text-[1.25rem] ${
							index === 0 ? 'border-b-4 border-black' : ''
						}`}
						key={index}
					>
						{author}
					</label>
				))}
			</div>
			<ArticleList className='mobile:hidden'>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
			<div className='hidden mobile:flex flex-col gap-4 px-4'>
				{articles.map((article) => (
					<div className='flex justify-between gap-6'>
						<div className='flex flex-col justify-between'>
							<h1 className='font-semibold text-[1.15rem] line-clamp-3'>{article.title}</h1>
							<div className='flex flex-col'>
								<label className='font-medium text-[.9rem]'>
									{article.author}
								</label>
								<label className='font-medium text-[.9rem]'>
									{dateFormatter(article.createdAt)}
								</label>
							</div>
						</div>
						<img
							className='min-w-[44%] w-[44%] max-w-[44%] h-[8rem] rounded-[1.25rem] object-cover'
							src={article.image}
							alt={article.title}
						/>
					</div>
				))}
			</div>
		</section>
	);
};
