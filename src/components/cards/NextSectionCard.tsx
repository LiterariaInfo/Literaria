import NextItemButton from '@/components/buttons/NextItemButton';

const NextSectionCard = ({ text, image }: { text: string; image: string }) => {
	const handleClick = () => {};

	return (
		<div className='relative w-full h-0 grow'>
			<img
				src={image}
				className='object-cover w-full h-full rounded-[3rem]'
				alt='Next section'
			/>
			<div className='absolute w-full h-full flex gap-8 items-center justify-center flex-col backdrop-blur-[20px] backdrop-brightness-50 rounded-[3rem] left-0 top-0'>
				<label className='text-white font-semibold text-[2rem] left-0 top-0'>
					{text}
				</label>
				<NextItemButton className='rotate-90' onClick={handleClick} />
			</div>
		</div>
	);
};

export default NextSectionCard;
