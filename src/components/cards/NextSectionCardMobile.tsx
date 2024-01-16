'use client';

import NextItemButton from '@/components/buttons/NextItemButton';

export default ({
	text,
	image,
	className = ''
}: {
	text: string;
	image: string;
	className: string;
}) => {
	const handleClick = () => {};

	return (
		<div className={`relative grow ${className}`}>
			<img
				src={image}
				className='object-cover w-full h-full rounded-[2rem]'
				alt='Next section'
			/>
			<div className='absolute w-full h-full flex gap-8 items-center justify-center flex-col backdrop-blur-[16px] backdrop-brightness-50 rounded-[2rem] left-0 top-0 p-4'>
				<label className='small-title text-white left-0 top-0 text-center'>
					{text}
				</label>
				<NextItemButton
					className='rotate-90 flex'
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};
