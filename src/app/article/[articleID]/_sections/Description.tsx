import NextSectionCard from '@/components/cards/NextSectionCard';
import { Article } from '@/lib/models';

export default ({ article }: { article: Article }) => {
	if (!article.content) {
		return '';
	}

	return (
		<section className='section pt-20 pb-10 px-8 mobile:px-4 gap-12 tablet:gap-7 mobile:gap-3 mobile:flex-col !h-auto !min-h-[100svh]'>
			<div className='flex flex-col grow'>
				<h1 className='text-left mb-28 mobile:mb-8 main-title'>
					{article.title}
				</h1>
				<div
					className='pr-[10rem] mobile:pr-0'
					dangerouslySetInnerHTML={{
						__html: (article.content as any).content
					}}
				></div>
			</div>
			<div className='flex flex-col gap-10 tablet:gap-6 mobile:gap-3 max-w-[30%] min-w-[20vw] mobile:max-w-none mobile:flex-row h-100%'>
				<img
					className='rounded-[3rem] tablet:rounded-[2rem] max-h-[70%] object-cover'
					src={article.image}
					alt='Directory description'
				/>
				<NextSectionCard
					className='mobile:hidden'
					text={'Vezi autorii'}
					image={article.image}
					anchorScroll={'#authors'}
				/>
			</div>
		</section>
	);
};
