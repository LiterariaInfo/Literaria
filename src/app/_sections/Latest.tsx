import MediumArticleCard from '@/components/cards/MediumArticleCard';
import ArticleList from '@/components/ArticleList';
import { getLatest } from '@/lib/api/article';

export default async () => {
	const articles = await getLatest();

	return (
		<section className='section flex-col pt-20'>
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
