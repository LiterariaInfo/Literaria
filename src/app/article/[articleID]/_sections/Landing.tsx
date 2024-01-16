import GiantArticleCard from '@/components/cards/GiantArticleCard';
import SpotlightCard from '@/components/cards/SpotlightCard';
import NextSectionCard from '@/components/cards/NextSectionCard';
import articleCountFormatter from '@/lib/formatters/articleCountFormatter';

export default () => {
	const article = {
		id: 5,
		title:
			'“Ultima noapte de dragoste, intaia noapte de razboi” - un roman al suferintei',
		author: 'Scurtu Ana',
		image: '/images/art.jpg',
		createdAt: new Date()
	};

	const articleCount = 5;

	const articleTitle = 'Perioada pașoptistă';

	return (
		<section className='section pt-20 pb-10 px-8 mobile:px-4 gap-12 tablet:gap-7 mobile:flex-col'>
			<div className='flex flex-col grow laptop:pl-5'>
				<h1 className='text-left mb-8 main-title'>{articleTitle}</h1>
				<GiantArticleCard article={article} />
			</div>
			<div className='flex flex-col gap-10 tablet:gap-6 max-w-[30%]'>
				<SpotlightCard className='tablet:grow' article={article} />
				<NextSectionCard
					className='tablet:hidden'
					text={articleCountFormatter(articleCount)}
					image={article.image}
				/>
			</div>
		</section>
	);
};
