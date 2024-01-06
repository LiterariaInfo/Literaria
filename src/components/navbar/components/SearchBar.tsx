import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const SearchBar = () => {
	const [isExtended, setIsExtended] = useState<boolean>(false);

	const searchBar = useRef<HTMLInputElement>(null);

	return (
		<motion.div
			layout
			className='outer-search'
			onMouseEnter={() => {
				setIsExtended(true);
				searchBar.current!.focus();
			}}
			onMouseLeave={() => {
				if (searchBar.current!.value === '') {
					setIsExtended(false);
				}
			}}
		>
			<motion.input
				placeholder='Căutați...'
				initial={{ width: 0 }}
				animate={{ width: isExtended ? 300 : 0, fontSize: isExtended ? '1rem' : 0, padding: isExtended ? '0 0 0 1rem' : 0 }}
				ref={searchBar}
				onBlur={() => {
					if (searchBar.current!.value === '') {
						setIsExtended(false);
					}
				}}
			/>
			<div className='search'>
				<img src={'./icons/search.svg'} alt='search' />
			</div>
		</motion.div>
	);
};

export default SearchBar;
