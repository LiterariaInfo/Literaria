import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const width0 = { width: 0 };

const SearchBar = () => {
	const [isExtended, setIsExtended] = useState<boolean>(false);

	const searchBarRef = useRef<HTMLInputElement>(null);
	const searchBar = searchBarRef.current;

	const inputAnimate = {
		width: isExtended ? 300 : 0,
		fontSize: isExtended ? '1rem' : 0,
		padding: isExtended ? '0 0 0 1rem' : 0
	};

	const handleMouseEnter = () => {
		setIsExtended(true);
		searchBar?.focus();
	};

	const handleMouseLeave = () => {
		if (searchBar?.value === '') {
			setIsExtended(false);
		}
	};

	return (
		<motion.div
			layout
			className='flex border rounded-[10rem] border-solid outline-none'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.input
				placeholder='Căutați...'
				className='rounded-[10rem] border-[none] outline-none bg-transparent'
				initial={width0}
				animate={inputAnimate}
				ref={searchBarRef}
				onBlur={handleMouseLeave}
			/>
			<div className='w-12 h-12 flex justify-center items-center aspect-[1] rounded-[5rem] bg-black cursor-pointer'>
				<img src={'./icons/search.svg'} alt='search' />
			</div>
		</motion.div>
	);
};

export default SearchBar;
