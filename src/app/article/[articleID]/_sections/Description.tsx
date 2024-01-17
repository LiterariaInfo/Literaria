import NextSectionCardMobile from '@/components/cards/NextSectionCardMobile';
import NextSectionCard from '@/components/cards/NextSectionCard';

export default () => {
	const article = {
		id: 5,
		title:
			'“Ultima noapte de dragoste, intaia noapte de razboi” - un roman al suferintei',
		author: 'Scurtu Ana',
		image: '/images/art.jpg',
		createdAt: new Date()
	};

	const articleTitle = 'Perioada pașoptistă';

	return (
		<section className='section pt-20 pb-10 px-8 mobile:px-4 gap-12 tablet:gap-7 mobile:gap-3 mobile:flex-col !h-auto !min-h-screen'>
			<div className='flex flex-col grow'>
				<h1 className='text-left mb-28 mobile:mb-8 main-title'>{articleTitle}</h1>
				<div
					className='pr-[10rem] mobile:pr-0'
					dangerouslySetInnerHTML={{
						__html:
							'<p class="font-semibold text-[1.25rem] mobile:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
					}}
				></div>
			</div>
			<div className='flex flex-col gap-10 tablet:gap-6 mobile:gap-3 max-w-[30%] mobile:max-w-none mobile:flex-row'>
				<img
					className='rounded-[3rem] tablet:rounded-[2rem]'
					src={article.image}
					alt='Directory description'
				/>
				<NextSectionCard
					className='mobile:hidden'
					text={'Vezi autorii'}
					image={article.image}
				/>
			</div>
		</section>
	);
};
