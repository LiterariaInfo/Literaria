import SmallArticleCard from '@/components/cards/SmallArticleCard';
import LargeArticleCard from '@/components/cards/LargeArticleCard';
import SpotlightCardMobile from '@/components/cards/SpotlightCardMobile';
import { getRecommended } from '@/lib/api/article';

export default async () => {
	const articles = await getRecommended();

	return (
		<section className='section flex-col pt-20 pb-24 laptop:pb-16'>
			<h1 className='text-center mb-8 main-title'>Articole recomandate</h1>
			<div className='flex mobile:hidden grow w-full box-border overflow-hidden gap-[2%] px-[2%] py-0'>
				<SmallArticleCard
					className='w-[30%] min-w-[30%]'
					article={articles[1].article}
				/>
				<LargeArticleCard article={articles[0].article} />
				<SmallArticleCard
					className='w-[24%] min-w-[24%]'
					article={articles[2].article}
				/>
			</div>
			<div className='hidden mobile:flex flex-col grow w-full box-border overflow-hidden gap-3 px-4 py-0'>
				<LargeArticleCard article={articles[0].article} />
				<div className='flex gap-3'>
					<SpotlightCardMobile
						className='w-0 grow'
						article={articles[1].article}
					/>
					<SpotlightCardMobile
						className='w-0 grow'
						article={articles[2].article}
					/>
				</div>
			</div>
		</section>
	);
};
