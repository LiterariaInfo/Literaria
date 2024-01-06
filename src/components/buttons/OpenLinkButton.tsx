import Link from 'next/link';

export default ({
	url = '',
	className = ''
}: {
	url?: string;
	className?: string;
}) => {
	return (
		<Link href={url}>
			<div
				className={`flex items-center justify-center rounded-full bg-white p-4 aspect-square ${className}`}
			>
				<img
					className='h-4 rounded-none'
					src='./icons/top-right-arrow.svg'
					alt='Top right arrow'
				/>
			</div>
		</Link>
	);
};
