import MediumArticleCard from '@/components/cards/MediumArticleCard';
import { Article } from '@/lib/models';
import ArticleList from '@/components/ArticleList';

export default () => {
	const articles: Article[] = [
		{
			id: 0,
			title: 'Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism',
			author: 'gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel ',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 0,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 0,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 0,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 0,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 0,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		}
	];

	return (
		<section className='section bottom-section flex-col'>
			<h1 className='text-left pl-8 mb-8 main-title max-[1600px]:pl-5'>
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
