'use client';

const NextItemButton = ({
	onClick,
	className
}: {
	onClick: () => void;
	className?: string;
}) => {
	return (
		<div
			onClick={onClick}
			className={`flex justify-center items-center h-10 w-10 backdrop-blur-[0.1rem] rounded-[5rem] bg-[#ffffffcc] hover:bg-[#ffffff] cursor-pointer ${className}`}
		>
			<img
				className='h-1/2 max-h-8'
				src={'./icons/horizontal-arrow.svg'}
				alt='horizontal-arrow'
				draggable='false'
			/>
		</div>
	);
};

export default NextItemButton;
