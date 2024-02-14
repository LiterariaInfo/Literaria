import { Article } from '@/lib/models';
import ArticleList from '@/components/ArticleList';
import MediumArticleCard from '@/components/cards/MediumArticleCard';
import dateFormatter from '@/lib/formatters/dateFormatter';
import Link from 'next/link';

export default ({ article }: { article: Article }) => {
	const articles = article.children?.filter(
		(art) => art.children?.length === 0
	);

	if (!articles?.length) {
		return '';
	}

	return (
		<section className='section flex-col pt-20 !min-h-[100svh] !h-auto'>
			<h1 className='text-left pl-8 mb-8 main-title laptop:pl-5'>
				Ultimele articole
			</h1>
			<ArticleList className='mobile:hidden'>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
			<div className='hidden mobile:flex flex-col gap-4 px-4'>
				{articles.map((article, index) => (
					<Link
						href={`/article/${article.id}`}
						className='flex justify-between gap-6'
						key={index}
					>
						<div className='flex flex-col justify-between'>
							<h1 className='font-semibold text-[1.15rem] line-clamp-3'>
								{article.title}
							</h1>
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
					</Link>
				))}
			</div>
		</section>
	);
};
