import MediumArticleCard from '@/components/cards/MediumArticleCard';
import { Article } from '@/lib/models';
import ArticleList from '@/components/ArticleList';
import Script from 'next/script';

export default () => {
	const articles: Article[] = [
		{
			id: 0,
			title:
				'Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism',
			author:
				'gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel ',
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
		}
	];

	return (
		<section id='5' className='section flex-col pt-20'>
			<h1 className='text-left pl-8 mb-8 main-title laptop:pl-5'>
				Ultimele articole
			</h1>
			<ArticleList>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</section>
	);
};
